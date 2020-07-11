//Os conteúdos estáticos sempre estão na página, e são alterados pelo CSS.
var changeContent = (id) => {
    let contents = document.getElementsByClassName("content");
    Array.prototype.forEach.call(contents, element => {
        if(element.getAttribute("id") !== id)
            element.setAttribute("style", "display: none");
        else
            element.setAttribute("style", "display: default");
    });
};

//Obtém o usuário logado no momento
var getCurrentUser = () => {
    let cookie = document.cookie;
    cookie = cookie.replace("c_user=","");
    let json;
    try{
        json = JSON.parse(cookie);
    } catch (ex) {
        json = null;
    } finally {
        return json;
    }
}

//Muda para a página de login de o usuário não estiver logado ou para a página do usuário se estivar
var userContent = () => {
    const curr = getCurrentUser();
    if (curr === null){
        changeContent("login-content");
    }
    else{
        if (curr.hasOwnProperty("admin")){
            changeContent("admin-content");
        }
        else {
            changeContent('usuario-content');
        }
    }
}

//Desfaz o login
var logout = () => {
    document.cookie = `c_user = null`;
    alert("Usuário deslogado");
    changeContent("home-content");
};

//Menu para telas menores e celulares
$(document).ready(() => {	  
    $('.menu-toggler').click(() => {
        $('.menu nav').toggleClass('active');
    });
})

//Inicialização da página de usuário feita de maneira dinâmica
$(document).ready(() => {
    if (getCurrentUser() === null) return; //Não há usuário logado, então a página não é carregada
    const el = document.createElement('user-page');
    el.user = getCurrentUser();
    let userPage = document.getElementById('usuario-content');
    userPage.innerHTML = "";
    userPage.appendChild(el);
    $('.userRequired').each((index, element) => { //Define os dados de usuário dos forms
        element.setAttribute("value",JSON.stringify(getCurrentUser()));
    });
})

var userRequired = ()=> {
    if (getCurrentUser() === null){
        alert("Você deve estar logado para realizar essa operação")
        return false;
    }
    else {
        return true;
    }
}
