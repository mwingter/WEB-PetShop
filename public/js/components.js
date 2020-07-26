class ProductCard extends HTMLElement {
    set product(product){
        this.innerHTML = `
        <div class="produto" id="${product._id}">
            <a class="renderProductPage" ><img src = "${product.img}" style="width:100%;"></a>
            <h1>${product.name}</h1>
            <p class="preco">$${product.price}</p>
            <p>${product.desc}</p>
            <p><button onclick="shoppingCartAdd('${product.name}');">Por no carrinho</button></p>
        </div>`;
    }
}

class ProductPage extends HTMLElement {
    set product(product){
        this.innerHTML = `
        <div class="paginaProduto" id="${product._id}">
        <img id="imagemProduto" src="${product.img}">
        <div id="infoProduto">
                <h1>${product.name}</h1>
                <p class="preco">$${product.price}</p>
                <p id="descricaoProduto">${product.desc}
                <br>
                <br>
                Unidades em estoque: ${product.qtEstoque} <br>
                Unidades vendidas: ${product.qtVendida}
            
            </p>
                <p><button onclick="shoppingCartAdd('${product.name}');">Por no carrinho</button></p>
        </div>
    </div>`;
    }
}

class ProductChart extends HTMLElement {
    set product(product){
        this.innerHTML=`
        <div class="blocoCarrinho">
            <img src="${product.imgSrc}"></img>
            <h4>${product.name}</h4>
            <h4>R$${product.price}</h4>
            <button class="removeButton" onclick="shoppingCartRemove('${product.name}')">Remover do carrinho</button>
        </div>`;
    }
}

class userPage extends HTMLElement {
    set user(user){
        this.innerHTML = `
        <div id="blocoCadastro">
        <form class="formCadastro" id="formEditarUsuario" method="none">
            <h3 class="titulo"> <i class="fa fa-paw"></i> Usu&aacute;rio <i class="fa fa-paw"></i></h3>
            <input type="email" name="email" placeholder="Insira seu Email" value="${user.email}" required>
            <br>
            <input type="text" name="name" placeholder="Insira seu nome completo" value="${user.name}" required>
            <br>
            <input type="text" name="adress" placeholder="Insira seu endere&ccedil;o" value="${user.adress}" required>
            <br> 
            <input type="text" name="phone" placeholder="Insira seu n&uacute;mero de telefone (Formato (xx) xxxxx-xxxx)" value="${user.phone}" required>
            <br>
            <h3 class="titulo">Foto :</h3> 
            <img src="${user.img}">
            <br>
        </form>
        <button class="loginButton" onclick="logout()">Sair</button>
    </div>
        `;
    }
}

class adminProduct extends HTMLElement {
    set product(product){
        this.innerHTML=`
        <div class="BlocoItem" id="${product._id}">
            <img src="${product.img}"></img>
            <h4>${product.name}</h4>
            <h4>R$ ${product.price}</h4>
            <div class="adminCatalogo">
                <button class="removeButtonAdmin" onclick="deletarItemAdmin('${product._id}','${product._rev}')">Remover do catálogo</button>
            </div>
        </div>`
    };
};

class adminUser extends HTMLElement {
    set user(user){
        this.innerHTML = `
        <div class="BlocoUsuario" id="${user._id}">
						<img src="${user.img}"></img>
						<h4>${user.name}</h4>
						<h4>${user.email}</h4>
                        <div class="adminCatalogo">
                            <button class="removeButtonAdmin" onclick="deletarUserAdmin('${user._id}','${user._rev}')">Remover usuário</button>
                        </div>
		</div>`;
    };
};

class adminService extends HTMLElement {
    set service(service){
        this.innerHTML = `
        <div class="BlocoServico" id="${service._id}">
            <p>${service.data},${service.horario}</p>
            <p>Servi&ccedil;o: ${service.servico} <br/>
            Animal: ${service.animal} </p>
            <div class="adminCatalogo">
                <button class="removeButtonAdmin" onclick="deletarServicoAdmin('${service._id}','${service._rev}')" >Remover servi&ccedil;o</button>
            </div>
        </div>`
            ;
    };
};

customElements.define('product-card',ProductCard);
customElements.define('product-page',ProductPage);
customElements.define('product-chart',ProductChart);
customElements.define('user-page',userPage);
customElements.define('admin-product',adminProduct);
customElements.define('admin-user',adminUser);
customElements.define('admin-service',adminService);