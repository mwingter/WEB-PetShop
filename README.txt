Grupo:
Luís Filipe Vasconcelos Peres NUSP: 10310641
Marcelo Duchene NUSP: 8596351
Michelle Wingter da Silva NUSP: 10783243

****************************************************************************************************
ENTREGA 1:

Como executar:

Inicie um servidor com a página "Pet Shop.html".
Como opção para tal execução, temos a extensão "Live Server" (Autor: Ritwick Dey) para o Visual Studio Code. 
Basta instalar a extensão, abrir essa pasta toda no VSCode, selecionar o arquivo "Pet Shop.html", clicar em algum lugar do arquivo com o botão direito e selecionar
a opção "Open with Live Server".

Funcionalidades:

O projeto usa AJAX para transitar entre as páginas, que têm seu conteúdo na pasta "html" (e contém apenas o conteúdo que será apresentado na section "content", e mais 
nada), mantendo o formato de single-page application.
O principal arquivo é o Pet Shop.html, que contém o header e o footer da página, e uma section com id "content". Essa section originalmente contém a "home", presente
também em home_content.html.
Contamos com páginas para exibição de produtos, que são, acessorios_content.html, caes_content.html, gatos_content.html, outros_content.html e racoes_content.html.
Ao selecionar qualquer produto em qualquer página, o usuário receberá o conteúdo de produto_content.html, em uma página específica para cada produto.
Os produtos poderão ser colocados em um carrinho, onde o usuário poderá remover produtos ou finalizar a compra com cartão de crédito no form de pagamento
(pagamento_content.html). Como o usuário precisará estar logado para realizar compras, o formulário recebe apenas dados do cartão de crédito.
Temos também a página servicos_content.html, que tem um form para agendamento de serviços e após confirmação redireciona o usuário imediatamente para a página de 
pagamento.
O usuário tem uma página de login (login_content.html), uma de cadastro(cadastro_content.html), e, após logado, poderá editar suas informações em uma página similar a
de cadastro (usuario_content.html). Como este é apenas um mockup, sem login funcional, a página pode ser visualizada abrindo o arquivo usuario.html presente
na pasta raiz.

Informação salva no servidor:

O servidor salvará os dados de cadastro de cada usuário, os dados de cada produto e um histórico das compras realizadas no site.

Acesso entre páginas:

Diagrama disponível no arquivo na pasta raiz "Acesso entre páginas.png"

Página de administrador:

O projeto possui uma página para o administrador, onde o mesmo pode vizualizar todos os itens disponíveis na loja, podendo cadastrar mais itens, editar ou excluí-los 
conforme necessário, o administrador também pode visualizar os usuários do site, e excluí-los caso haja necessidade. 
Para ter acesso a essa página, loga-se pela mesma página que o usuário comum (login_content.html) com o nome de usuário admin e senha admin, entrando logo em 
seguida na página principal do administrador (admin_content.html) onde o mesmo pode ver duas tabelas, uma com a descrição breve dos itens, com a sua foto, nome 
e preço e outra com os usuários do site, podendo ver o nome de usuário, email, foto caso tenha colocado. Podendo a partir dessas tabelas escolher o item/usuário 
desejado para ver mais informações do mesmo (itemEdit_content.html/verUser_content.html), clicando no botão Ver Item/Ver usuário. Nessa página, possui o botão 
para editar o item/usuário, que redireciona para a página de edição (editarItem_content.html/editarUsuario_content.html).
Pode-se também criar itens ou usuários a mais, clicando no botão de mais em cada uma das tabelas cadastradas, que redireciona para uma página de cadastro: 
cadastro_content.html para usuário e criarItem_content.html para itens, podendo também remover itens das tabelas ao clicar no botão remover, existente em cada elemento, 
no qual foi criado uma função em javascript para simular o evento, com um pedido de confirmação do usuário para garantir que o elemento certo seja removido.
****************************************************************************************************

****************************************************************************************************
ENTREGA 2:

IMPORTANTE! 
A indexedDB tem problemas para inicializar. Pode ser necessário recarregar a página algumas vezes para ela ser inicializada.
Quando for corretamente inicializada, a mensagem "Infelizmente, ainda não há produtos na loja." será exibida na seção de produtos mais vendidos
O cadastro de imagens não é funcional ainda. Qualquer arquivo é aceito como uma "imagem".

Funcionalidades: 
Nesta etapa, foi feito um mockup com uso da indexedDB. As bases de dados (Uma simulando o servidor e uma simulando o cliente) são inicializadas com 
a inicialização do programa. A base de dados do servidor (PetshopDB) armazena produtos, usuários, vendas e serviços cadastrados.

Login e cadastro de usuário:
O usuário/admin pode realizar seu login na página "usuário". Na mesma página, está disponível um botão de cadastro que abre um formulário de cadastro de usuário.
Não podem haver usuários com o mesmo email.
***Durante a inicialização da DB, o admin é cadastrado, com email "admin" e senha "admin"***

Cadastro de serviços:
Na página de serviços, um usuário pode agendar um novo serviço. Um serviço não pode ser agendado com a mesma data e horário de outro serviço.
Foi pressuposto que pelo fato do serviço ser presencial, o pagamento também seria presencial.

Cadastro de produtos:
Pode ser feito na página de Administrador, no "+" próximo a "produtos".
Não podem existir produtos com o mesmo nome.
O cadastro de produtos ainda não suporta imagens.

Exibição de produtos:
Os produtos são exibidos na página principal (9 mais vendidos) e nas páginas de cada tag (Cães, gatos, etc.) automaticamente após o cadastro.

Admin:
O login de adinistrador pode ser feito com o login admin e a enha admin.
São exibidos para o administrador todos os produtos, usuários e serviços cadastrados, e o administrador pode removê-los.
Os serviços são listados por ordem de data.

****************************************************************************************************

****************************************************************************************************
ENTREGA 3:

IMPORTANTE! 
Antes de tentar executar o programa, leia o documento "Como executar.txt", disponível nessa pasta e certifique-se de que todos os passos foram cumpridos 
corretamente.

Funcionalidades:
Nesta etapa, foi implementado um servidor com o Node.js e um banco de dados com CouchDB. Foi removida a pasta "html" e agora todas as páginas estáticas 
estão presentes no arquivo "index.html" (presente nessa pasta), distribuídas em tags section com a class "content". A mudança entre essas páginas é feita
por meio da modificação da propriedade CSS "display" dessas sections.
Há também sections e outras tags que se encontram vazias no html. Nesse caso, são páginas carregadas dinamicamente a partir de solicitação do usuário por meio
de métodos do protocolo HTTP enviados pelo cliente, como GET e POST. Esses métodos são ativados por botões, forms ou mesmo pelo carregamento da página (no caso
da renderização dos produtos mais vendidos e das listas de produtos, serviços, usuários e vendas da página de administrador.
No lado do cliente, foi utilizado jQuery em alguns métodos.

Arquivos:

	Diretório raiz:
		Arquivos do servidor.		

		-index.js: Arquivo do servidor feito com Node.js
		-index.html: Arquivo html da página
		-package.json e package-lock.json: Gerados automaticamente pelo Node.js, especificam as dependências do projeto.
		-Como executar.txt: Guia de instalação e criação da DB. Leitura IMPRESCINDÍVEL para a execução do projeto.

	Diretório node_modules:
		Todo gerado automaticamente pelo node.js, contém os módulos necessários ao projeto.

	Diretório public:
		Arquivos disponíveis ao usuário, contendo todos os scripts, imagens e css do lado do cliente.

		Diretório css:
			Contém o arquivo css com todos os estilos do projeto

		Diretório img:
			Contém imagens, como a logo do petshop, a imagem padrão de imagem não encontrada, o ícone da página, etc.

		Diretório uploads:
			Conterá todos os uploads de imagem feitos pelo usuário ou admin (imagens de usuário ou de produto)

		Diretório js:
			Contém os scripts do lado do cliente da aplicação.
			
			-components.js: Contém os componentes utilizados na aplicação.
			-local-scripts.js: Contém scripts de utilidade, como a mudança de página e a obtenção do usuário logado no momento.
			-get-methods.js: Scripts relacionados aos métodos GET da aplicação
			-post-methods-callbacks: Callbacks dos métodos de POST da aplicação (os quais são feitos diretamente pelos forms, então 
			essa pasta só armazena os callbacks mesmo)
			-delete-methods.js: Scripts dos métodos DELETE da aplicação