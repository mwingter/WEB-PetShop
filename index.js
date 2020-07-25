const express = require('express');
const fs = require('fs');
const formidable = require ('formidable');

//Funçao de utilidade usada para verificar se há um arquivo junto com os forms no post
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const NodeCouchDB = require('node-couchdb')
const couch = new NodeCouchDB();
var _users = [];
var _products = [];
var _services = [];
var _sales = [];

var dbInit = () => { //Inicializa a DB. Chamada ao início do programa e após um novo cadastro
  console.log("DB reinicializada")

  _users = [];
  _products = [];
  _services = [];
  _sales = [];

  couch.get('petshop','_design/users/_view/all').then(
    ({data,headers,status}) => {
      Array.prototype.forEach.call(data.rows, (json) => {
        _users.push(json.value);
      })
      console.log("Usuários obtidos com sucesso");
    },
    (err) => {
      console.log("Falha na obtenção dos usuários:\n" + err);
    }
  );
  
  couch.get('petshop','_design/products/_view/all').then(
    ({data,headers,status}) => {
      Array.prototype.forEach.call(data.rows, (json) => {
        _products.push(json.value);
      })
      console.log("Produtos obtidos com sucesso")
    },
    (err) => {
      console.log("Falha na obtenção dos produtos:\n" + err);
    }
  );

  couch.get('petshop','_design/sales/_view/all').then(
    ({data,headers,status}) => {
      Array.prototype.forEach.call(data.rows, (json) => {
        _sales.push(json.value);
      })
      console.log("Vendas obtidas com sucesso")
    },
    (err) => {
      console.log("Falha na obtenção das vendas:\n" + err);
    }
  );

  couch.get('petshop','_design/services/_view/all').then(
    ({data,headers,status}) => {
      Array.prototype.forEach.call(data.rows, (json) => {
        _services.push(json.value);
      })
      console.log("Serviços obtidos com sucesso")
    },
    (err) => {
      console.log("Falha na obtenção dos serviços:\n" + err);
    }
  );
}

dbInit();

const app = express();
app.use(express.json()); 
app.use(express.static(__dirname + '/public'));//Acesso aos arquivos públicos


const port = process.env.PORT || 3000; //Porta do ambiente ou 3000 se não for epecificada 
app.listen(port, () => { console.log(`Listening on port ${port}`); });//Servidor inicializado

app.get('/',(req,res)=>{
  console.log("GET: " + JSON.stringify(req.query));
  const query = req.query;
  switch (query.type){
    case("getProductsByTag"):
      const tag = query.tag;
      let response = _products.filter((el) => {return el.tag === tag})
      res.send(response);
      res.end();
    break;

    case("getProductById"):
      const id = query.id;
      const product = _products.find(el => {return el._id === id})
      res.send(product);
      res.end();
    break;

    case("searchProducts"):
      const queryString = query.queryString;
      console.log("buscando por " + queryString);
      let response2 = _products.filter((el) => {return (el.name.toLowerCase()).includes(queryString.toLowerCase())});
      res.send(response2);
      res.end();
    break;

    case("getBestSellingProducts"):
      let response3 = [];
      let i = 0;
      _products.sort((a,b) => parseFloat(b.qtVendida) - parseFloat(a.qtVendida)) //Ordem decrescente de vendas
      _products.forEach((el) => {
        //Envia apenas os 9 produtos mais vendidos para não poluir a página
        if (i === 9) return;
        response3.push(el)
        i++;
      });
      res.send(response3)
      res.end();
    break;

    case("getAllProducts"):
      res.send(_products);
      res.end;
    break;

    case("getAllUsers"):
      res.send(_users);
      res.end;
    break;

    case("getAllServices"):
      res.send(_services);
      res.end;
    break;

    case("getAllSales"):
      res.send(_sales);
      res.end;
    break;

    default: //carrega a pagina normalmente

        const page = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/HTML'});
        res.write(page);
        res.end();

    break;
  }
});

app.post('/', function(req, res, next){
  let path = null; //Armazena o caminho do arquivo
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, json, files) {
    console.log("POST recebido: " + JSON.stringify(json));

    if (!isEmpty(files)){ //Arquivo recebido: realizar upload
      let oldpath = files.img.path;
      let newpath = __dirname + '/public/uploads/' + files.img.name;
      path = '/uploads/' + files.img.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
      });
    }

    switch (json.type){

      case ("login"):
  
        let userJSON = _users.find(element => element.email === json.email);
        if (userJSON !== null && userJSON !== undefined){ //Usuário existe
          if (userJSON.password !== json.password){ //Senha incorreta
            res.end(JSON.stringify({status: "Senha incorreta"}));
          }
          else{ //Senha correta
            res.end(JSON.stringify({status: "ok", json: userJSON}));
          }
        }
        else{ //Usuário não existe 
          res.end(JSON.stringify({status: "Usuário inexistente"}));
        }
  
      break;
  
      case ("user"): 
  
        let newUser = json;
        if (_users.find(element => element.email === newUser.email) !== undefined){ //Usuário já existe
          res.end(JSON.stringify({status: "Já existe um usuário com esse email"}));
          return;
        }
        else if (newUser.password !== newUser.passwordConfirm){
          res.end(JSON.stringify({status: "As senhas não batem!"}));
          return;
        }
        else{ //Usuário não existe: realizar cadastro
          couch.uniqid().then((ids) => {
            newUser._id = ids[0];
            newUser.img = '/img/imgNotFound.jpg';
            if (path) newUser.img = path;
            couch.insert('petshop',newUser).then(
              (data,headers,status) => { //Promise resolve: Cadastro concluído
                dbInit();
                res.end(JSON.stringify({status: "ok"}));
                return;
              },
              (err) => { //Promise reject: Erro no cadastro
                res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
                return;
              }
            )
          })
        }
  
      break;
  
      case ("product"):
  
      let newProduct = json;
      if (_users.find(element => element.name === newProduct.name) !== undefined){ //Usuário já existe
        res.end(JSON.stringify({status: "Já existe um produto com esse nome"}));
        return;
      }
      else{ //Usuário não existe: realizar cadastro
        couch.uniqid().then((ids) => {
          newProduct._id = ids[0];
          newProduct.img = path;
          couch.insert('petshop',newProduct).then(
            (data,headers,status) => { //Promise resolve: Cadastro concluído
              dbInit();
              res.end(JSON.stringify({status: "ok"}));
              return;
            },
            (err) => { //Promise reject: Erro no cadastro
              res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
              return;
            }
          )
        })
      }
  
    break;
  
    case ("service"):
  
        let newService = json;
        if (_users.find(element => element.data === newService.data && element.horario === newService.horario ) !== undefined){ //Usuário já existe
          res.end(JSON.stringify({status: "O horário não está disponível."}));
          return;
        }
        else{ //Usuário não existe: realizar cadastro
          couch.uniqid().then((ids) => {
            newService._id = ids[0];
            couch.insert('petshop',newService).then(
              (data,headers,status) => { //Promise resolve: Cadastro concluído
                dbInit();
                res.end(JSON.stringify({status: "ok"}));
                return;
              },
              (err) => { //Promise reject: Erro no cadastro
                res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
                return;
              }
            )
          })
        }
  
    break;

    case("deletarItem"):
      //aqui está o id e o rev desejado
      query = json
      couch.del('petshop', json.id, json.rev).then(
          (data,headers,status) => { //Promise resolve: deleção concluído
                dbInit();
                console.log('deletei item')
                res.end(JSON.stringify({status: "ok"}));
                res.redirect('/')
                return;
              },
              (err) => { //Promise reject: Erro ao deletar
                console.log('não deletei')
                res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
                return;
              });
      return
      break;


      case("deletarUser"):
      //aqui está o id e o rev desejado
      query = json
      couch.del('petshop', json.id, json.rev).then(
          (data,headers,status) => { //Promise resolve: deleção concluído
                dbInit();
                console.log('deletei user')
                res.end(JSON.stringify({status: "ok"}));
                return;
              },
              (err) => { //Promise reject: Erro ao deletar
                console.log('não deletei user')
                res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
                return;
              });
      return
      break;

      case("deletarServico"):
      //aqui está o id e o rev desejado
      query = json
      couch.del('petshop', json.id, json.rev).then(
          (data,headers,status) => { //Promise resolve: deleção concluído
                dbInit();
                console.log('deletei serviço')
                res.end(JSON.stringify({status: "ok"}));
                return;
              },
              (err) => { //Promise reject: Erro ao deletar
                console.log('não deletei serviço')
                res.end(JSON.stringify({status: "Erro na base de dados do servidor"}));
                return;
              });
      return
      break;


    default:
        res.status(400).end(JSON.stringify({status: "Ação não suportada"}));
        return;
    break;
    }
  });

    
});
