//TODO: finalizar as funções de callback
//Funções de callback para serem executadas após a submissão dos forms
var cadastroCallback = (res) => {
    if (res.status === "ok"){
        alert("Cadastro realizado com sucesso.");
        changeContent("home-content");
        admin_getServices();
    }
    else{
        alert("Cadastro não realizado: " + res.status);
    }
}

var criarItemCallback = (res) => {
    if (res.status === "ok"){
        alert("Produto cadastrado com sucesso.");
        changeContent("admin-content");
        admin_getProducts();
    }
    else{
        alert("O produto não foi cadastrado: " + res.status);
    }
}

var loginCallback = (res) => {
    if (res.status === "ok"){
        alert("Login realizado com sucesso.");
        const user = res.json;
        document.cookie = `c_user=${JSON.stringify(user)}`; //Cria cookie com o JSON do usuário
        $('.userRequired').each((index, element) => { //Define os campos necessários como o usuário atual
            element.setAttribute("value",JSON.stringify(getCurrentUser()));
        });
        if (res.json.hasOwnProperty("admin")){
            changeContent("admin-content");
        }
        else{
            const el = document.createElement('user-page');
            el.user = getCurrentUser();
            let userPage = document.getElementById('usuario-content');
            userPage.innerHTML = "";
            userPage.appendChild(el);
            changeContent("usuario-content");
        }
    }
    else{
        alert(res.status);
    }
}

var servicosCallback = (res) => {
    if (res.status === "ok"){
        alert("Serviço agendado com sucesso!");
        changeContent("home-content");
        admin_getServices();
    }
    else{
        alert("O serviço não pôde ser cadastrado: " + res.status);
    }
}

//Adiciona os callbacks aos posts dos forms
$(document).ready((ev) => {

    $('#formCadastro').ajaxForm({
        url : '',
        dataType : 'json',
        success : (response) => {
            cadastroCallback(response);
        }
    });

    $('#formLogin').ajaxForm({
        url : '',
        dataType : 'json',
        success : (response) => {
            loginCallback(response);
        }
    });

    $('#formServicos').ajaxForm({
        url : '',
        dataType : 'json',
        success : (response) => {
            servicosCallback(response);
        }
    });

    $('#formCadastroItem').ajaxForm({
        url : '',
        dataType : 'json',
        success : (response) => {
            criarItemCallback(response);
        }
    });



});