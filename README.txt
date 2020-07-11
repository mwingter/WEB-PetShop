Grupo:
Lu�s Filipe Vasconcelos Peres NUSP: 10310641
Marcelo Duchene NUSP: 8596351
Michelle Wingter da Silva NUSP: 10783243

****************************************************************************************************
ENTREGA 1:

Como executar:

Inicie um servidor com a p�gina "Pet Shop.html".
Como op��o para tal execu��o, temos a extens�o "Live Server" (Autor: Ritwick Dey) para o Visual Studio Code. 
Basta instalar a extens�o, abrir essa pasta toda no VSCode, selecionar o arquivo "Pet Shop.html", clicar em algum lugar do arquivo com o bot�o direito e selecionar
a op��o "Open with Live Server".

Funcionalidades:

O projeto usa AJAX para transitar entre as p�ginas, que t�m seu conte�do na pasta "html" (e cont�m apenas o conte�do que ser� apresentado na section "content", e mais 
nada), mantendo o formato de single-page application.
O principal arquivo � o Pet Shop.html, que cont�m o header e o footer da p�gina, e uma section com id "content". Essa section originalmente cont�m a "home", presente
tamb�m em home_content.html.
Contamos com p�ginas para exibi��o de produtos, que s�o, acessorios_content.html, caes_content.html, gatos_content.html, outros_content.html e racoes_content.html.
Ao selecionar qualquer produto em qualquer p�gina, o usu�rio receber� o conte�do de produto_content.html, em uma p�gina espec�fica para cada produto.
Os produtos poder�o ser colocados em um carrinho, onde o usu�rio poder� remover produtos ou finalizar a compra com cart�o de cr�dito no form de pagamento
(pagamento_content.html). Como o usu�rio precisar� estar logado para realizar compras, o formul�rio recebe apenas dados do cart�o de cr�dito.
Temos tamb�m a p�gina servicos_content.html, que tem um form para agendamento de servi�os e ap�s confirma��o redireciona o usu�rio imediatamente para a p�gina de 
pagamento.
O usu�rio tem uma p�gina de login (login_content.html), uma de cadastro(cadastro_content.html), e, ap�s logado, poder� editar suas informa��es em uma p�gina similar a
de cadastro (usuario_content.html). Como este � apenas um mockup, sem login funcional, a p�gina pode ser visualizada abrindo o arquivo usuario.html presente
na pasta raiz.

Informa��o salva no servidor:

O servidor salvar� os dados de cadastro de cada usu�rio, os dados de cada produto e um hist�rico das compras realizadas no site.

Acesso entre p�ginas:

Diagrama dispon�vel no arquivo na pasta raiz "Acesso entre p�ginas.png"

P�gina de administrador:

O projeto possui uma p�gina para o administrador, onde o mesmo pode vizualizar todos os itens dispon�veis na loja, podendo cadastrar mais itens, editar ou exclu�-los 
conforme necess�rio, o administrador tamb�m pode visualizar os usu�rios do site, e exclu�-los caso haja necessidade. 
Para ter acesso a essa p�gina, loga-se pela mesma p�gina que o usu�rio comum (login_content.html) com o nome de usu�rio admin e senha admin, entrando logo em 
seguida na p�gina principal do administrador (admin_content.html) onde o mesmo pode ver duas tabelas, uma com a descri��o breve dos itens, com a sua foto, nome 
e pre�o e outra com os usu�rios do site, podendo ver o nome de usu�rio, email, foto caso tenha colocado. Podendo a partir dessas tabelas escolher o item/usu�rio 
desejado para ver mais informa��es do mesmo (itemEdit_content.html/verUser_content.html), clicando no bot�o Ver Item/Ver usu�rio. Nessa p�gina, possui o bot�o 
para editar o item/usu�rio, que redireciona para a p�gina de edi��o (editarItem_content.html/editarUsuario_content.html).
Pode-se tamb�m criar itens ou usu�rios a mais, clicando no bot�o de mais em cada uma das tabelas cadastradas, que redireciona para uma p�gina de cadastro: 
cadastro_content.html para usu�rio e criarItem_content.html para itens, podendo tamb�m remover itens das tabelas ao clicar no bot�o remover, existente em cada elemento, 
no qual foi criado uma fun��o em javascript para simular o evento, com um pedido de confirma��o do usu�rio para garantir que o elemento certo seja removido.
****************************************************************************************************

****************************************************************************************************
ENTREGA 2:

IMPORTANTE! 
A indexedDB tem problemas para inicializar. Pode ser necess�rio recarregar a p�gina algumas vezes para ela ser inicializada.
Quando for corretamente inicializada, a mensagem "Infelizmente, ainda n�o h� produtos na loja." ser� exibida na se��o de produtos mais vendidos
O cadastro de imagens n�o � funcional ainda. Qualquer arquivo � aceito como uma "imagem".

Funcionalidades: 
Nesta etapa, foi feito um mockup com uso da indexedDB. As bases de dados (Uma simulando o servidor e uma simulando o cliente) s�o inicializadas com 
a inicializa��o do programa. A base de dados do servidor (PetshopDB) armazena produtos, usu�rios, vendas e servi�os cadastrados.

Login e cadastro de usu�rio:
O usu�rio/admin pode realizar seu login na p�gina "usu�rio". Na mesma p�gina, est� dispon�vel um bot�o de cadastro que abre um formul�rio de cadastro de usu�rio.
N�o podem haver usu�rios com o mesmo email.
***Durante a inicializa��o da DB, o admin � cadastrado, com email "admin" e senha "admin"***

Cadastro de servi�os:
Na p�gina de servi�os, um usu�rio pode agendar um novo servi�o. Um servi�o n�o pode ser agendado com a mesma data e hor�rio de outro servi�o.
Foi pressuposto que pelo fato do servi�o ser presencial, o pagamento tamb�m seria presencial.

Cadastro de produtos:
Pode ser feito na p�gina de Administrador, no "+" pr�ximo a "produtos".
N�o podem existir produtos com o mesmo nome.
O cadastro de produtos ainda n�o suporta imagens.

Exibi��o de produtos:
Os produtos s�o exibidos na p�gina principal (9 mais vendidos) e nas p�ginas de cada tag (C�es, gatos, etc.) automaticamente ap�s o cadastro.

Admin:
O login de adinistrador pode ser feito com o login admin e a enha admin.
S�o exibidos para o administrador todos os produtos, usu�rios e servi�os cadastrados, e o administrador pode remov�-los.
Os servi�os s�o listados por ordem de data.

****************************************************************************************************

****************************************************************************************************
ENTREGA 3:

IMPORTANTE! 
Antes de tentar executar o programa, leia o documento "Como executar.txt", dispon�vel nessa pasta e certifique-se de que todos os passos foram cumpridos 
corretamente.

Funcionalidades:
Nesta etapa, foi implementado um servidor com o Node.js e um banco de dados com CouchDB. Foi removida a pasta "html" e agora todas as p�ginas est�ticas 
est�o presentes no arquivo "index.html" (presente nessa pasta), distribu�das em tags section com a class "content". A mudan�a entre essas p�ginas � feita
por meio da modifica��o da propriedade CSS "display" dessas sections.
H� tamb�m sections e outras tags que se encontram vazias no html. Nesse caso, s�o p�ginas carregadas dinamicamente a partir de solicita��o do usu�rio por meio
de m�todos do protocolo HTTP enviados pelo cliente, como GET e POST. Esses m�todos s�o ativados por bot�es, forms ou mesmo pelo carregamento da p�gina (no caso
da renderiza��o dos produtos mais vendidos e das listas de produtos, servi�os, usu�rios e vendas da p�gina de administrador.
No lado do cliente, foi utilizado jQuery em alguns m�todos.

Arquivos:

	Diret�rio raiz:
		Arquivos do servidor.		

		-index.js: Arquivo do servidor feito com Node.js
		-index.html: Arquivo html da p�gina
		-package.json e package-lock.json: Gerados automaticamente pelo Node.js, especificam as depend�ncias do projeto.
		-Como executar.txt: Guia de instala��o e cria��o da DB. Leitura IMPRESCIND�VEL para a execu��o do projeto.

	Diret�rio node_modules:
		Todo gerado automaticamente pelo node.js, cont�m os m�dulos necess�rios ao projeto.

	Diret�rio public:
		Arquivos dispon�veis ao usu�rio, contendo todos os scripts, imagens e css do lado do cliente.

		Diret�rio css:
			Cont�m o arquivo css com todos os estilos do projeto

		Diret�rio img:
			Cont�m imagens, como a logo do petshop, a imagem padr�o de imagem n�o encontrada, o �cone da p�gina, etc.

		Diret�rio uploads:
			Conter� todos os uploads de imagem feitos pelo usu�rio ou admin (imagens de usu�rio ou de produto)

		Diret�rio js:
			Cont�m os scripts do lado do cliente da aplica��o.
			
			-components.js: Cont�m os componentes utilizados na aplica��o.
			-local-scripts.js: Cont�m scripts de utilidade, como a mudan�a de p�gina e a obten��o do usu�rio logado no momento.
			-get-methods.js: Scripts relacionados aos m�todos GET da aplica��o
			-post-methods-callbacks: Callbacks dos m�todos de POST da aplica��o (os quais s�o feitos diretamente pelos forms, ent�o 
			essa pasta s� armazena os callbacks mesmo)
			-delete-methods.js: Scripts dos m�todos DELETE da aplica��o