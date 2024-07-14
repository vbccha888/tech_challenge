# tech_challenge - Fase 02

Objetivo:
_________________
O projeto consistiu em desenvolver um CRUD utilizando as tecnologias Node.js + Express para criação de uma API e um banco de dados NoSQL utilizando o banco de dados MongoDB através da platafomra Atlas. o Atlas permitiu criar, configurar e operar o banco de dados na nuvem. 

Ferramentas Utilizadas:
_________________
- Visual Studio Code - Editor escolhido 
- Node.JS
- Express
- MongoDB - Banco de dados
- Atlas - Banco na nuvem 





Iniciar Projeto:
________________

1 - É necessário a instalação do Node.js caso não esteja previamente instalado na máquina, atraves do comando: 

# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.15.1`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`

Fonte: https://nodejs.org/en/download/package-manager

2 - Crie um arquivo de configuração utilizando o seguinte comando do CMD:
npm init

3 - Instale a biblioteca do mongodb para manipular o banco de dados e API através do comando: 
npm install mongodb

4 - Instale a biblioteca do mangoose para trabalharmos a conexão com o banco na nuvem: 
npm install mongoose --save

_________________
Manipulação de dados: 

A porta utilizada no código é a 3000. 

Com tudo instalado e com as pastas do código fonte, o CRUD deve ser feito através das seguintes requisições através do postman: 
GET - localhost:3000/livros
GET by ID - localhost:3000/livros/(adicione o ID do livro)
POST - localhost:3000/livros/
PUT - localhost:3000/livros/(adicione o ID do livro)
DELETE - localhost:3000/livros/(adicione o ID do livro)



