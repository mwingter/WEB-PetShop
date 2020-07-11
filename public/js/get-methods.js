//Adiciona os listeners aos botões para páginas de produtos
$(".getButton").click((ev) => {
    $.ajax({
        method: "GET",
        url: "",
        datatype:'json',
        data: { type: "getProductsByTag", tag: ev.target.name }
      })
        .done(function( res ) {
          let content = document.getElementById("produtos-content");
          content.innerHTML = "";
          Array.prototype.forEach.call(res, (el) => {
            const newProduct = document.createElement('product-card');
            newProduct.product = el;
            content.appendChild(newProduct);
          })
          if (content.innerHTML === ""){
              content.innerHTML = "<h3>Infelizmente, ainda n&atilde;o temos produtos desse tipo </h3>"
          }
          $(".renderProductPage").on('click',(ev) => { //Adiciona listeners para renderizar a página individual do produto
            renderProductPage(ev.target.parentElement.parentElement.id);
            })
          changeContent("produtos-content");
        });
})

//Mostra a página de um produto específico
var renderProductPage = (id) => {
    $.ajax({
        method: "GET",
        url: "",
        datatype:'json',
        data: { type: "getProductById", id: id }
      })
        .done(function( res ) {
          content = document.getElementById("exibeProduto-content");
          let product = res;
          const el = document.createElement('product-page');
          el.product = product;
          content.innerHTML = "";
          content.appendChild(el);
          changeContent("exibeProduto-content");
        });
}

//Realiza uma busca
$("#searchForm").submit((ev) => {
  ev.preventDefault();
  let query = document.getElementById("search").value;
  $.ajax({
    method: "GET",
    url: "",
    datatype:'json',
    data: { type: "searchProducts", queryString: query }
  })
    .done(function( res ) {
      let content = document.getElementById("produtos-content");
      content.innerHTML = "";
      Array.prototype.forEach.call(res, (el) => {
        const newProduct = document.createElement('product-card');
        newProduct.product = el;
        content.appendChild(newProduct);
      })
      if (content.innerHTML === ""){
          content.innerHTML = "<h3>Sem resultados</h3>"
      }
      $(".renderProductPage").on('click',(ev) => { //Adiciona listeners para renderizar a página individual do produto
        renderProductPage(ev.target.parentElement.parentElement.id);
        })
      changeContent("produtos-content");
    });
});

//Obtém os produtos mais vendidos ao carregamento da página.
var getBestSellingProducts = () => {
  $.ajax({
      method: "GET",
      url: "",
      datatype:'json',
      data: { type: "getBestSellingProducts"}
    })
      .done(function( res ) {
        let content = document.getElementById("bestSellingProducts");
        content.innerHTML = "";
        Array.prototype.forEach.call(res, (el) => {
          const newProduct = document.createElement('product-card');
          newProduct.product = el;
          content.appendChild(newProduct);
        })
        if (content.innerHTML === ""){
            content.innerHTML = "<h3>Infelizmente, ainda n&atilde;o temos produtos na loja</h3>"
        }
        $(".renderProductPage").on('click',(ev) => { //Adiciona listeners para renderizar a página individual do produto
          renderProductPage(ev.target.parentElement.parentElement.id);
          })
      });
}



//Obtém todos os produtos para os listar na página de administrador 

var admin_getProducts = () => {
  $.ajax({
    method: "GET",
    url: "",
    datatype:'json',
    data: { type: "getAllProducts"}
  })
    .done(function( res ) {
      let content = document.getElementById("adminProduct");
      content.innerHTML = "";
      Array.prototype.forEach.call(res, (el) => {
        const newProduct = document.createElement('admin-product');
        newProduct.product = el;
        content.appendChild(newProduct);
      })
      if (content.innerHTML === ""){
          content.innerHTML = "<h5>Nenhum produto encontrado</h5>"
      }
      
    });
}

var admin_getUsers = () => {
  $.ajax({
    method: "GET",
    url: "",
    datatype:'json',
    data: { type: "getAllUsers"}
  })
    .done(function( res ) {
      let content = document.getElementById("adminUser");
      content.innerHTML = "";
      Array.prototype.forEach.call(res, (el) => {
        const newUser = document.createElement('admin-user');
        newUser.user = el;
        content.appendChild(newUser);
      })
      if (content.innerHTML === ""){
          content.innerHTML = "<h5>Nenhum usu&aacute;rio encontrado</h5>"
      }
      
    });
}

var admin_getServices = () => {
  $.ajax({
    method: "GET",
    url: "",
    datatype:'json',
    data: { type: "getAllServices"}
  })
    .done(function( res ) {
      let content = document.getElementById("adminService");
      content.innerHTML = "";
      Array.prototype.forEach.call(res, (el) => {
        const newService = document.createElement('admin-service');
        newService.service = el;
        content.appendChild(newService);
      })
      if (content.innerHTML === ""){
          content.innerHTML = "<h5>Nenhum servi&ccedil;o</h5>"
      }
      
    });
}

$(document).ready((ev) => {
  getBestSellingProducts();
  admin_getProducts();
  admin_getUsers();
  admin_getServices();
})