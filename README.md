# tech_challenge - Fase 02 e 03

## Link do Vídeo gravado Fase 02: https://youtu.be/0dBV_YGOpIs?si=91LVPiik0ouJRItB
## Link do Vídeo gravado Fase 03: https://youtu.be/huplEo8oFiI?si=NVziCGozVMg4LsJ9

## FASE 02 --------------------------------------
## Link para documentação do postman: https://documenter.getpostman.com/view/11643776/2sA3kXCzpF

## Objetivo

O projeto consistiu em desenvolver um CRUD utilizando as tecnologias Node.js + Express para criação de uma API e um banco de dados NoSQL utilizando o banco de dados MongoDB através da platafomra Atlas. o Atlas permitiu criar, configurar e operar o banco de dados na nuvem.

## Ferramentas Utilizadas

- Visual Studio Code - Editor escolhido 
- Node.JS
- Express
- MongoDB - Banco de dados
- Atlas - Banco na nuvem
- dotenv

## Iniciar Projeto

# 1º Passo
É necessário a instalação do Node.js caso não esteja previamente instalado na máquina, atraves do comando: 

installs fnm (Fast Node Manager)
winget install Schniz.fnm

download and install Node.js
fnm use --install-if-missing 20

verifies the right Node.js version is in the environment
node -v # should print `v20.15.1`

verifies the right NPM version is in the environment
npm -v # should print `10.7.0`

Fonte: https://nodejs.org/en/download/package-manager

# 2º Passo 
Crie um arquivo de configuração utilizando o seguinte comando do CMD:

npm init

# 3º Passo
Instale a biblioteca do mongodb para manipular o banco de dados e API através do comando: 

npm install mongodb

# 4º Passo
Instale a biblioteca do express:

npm express

# 5º Passo 
Instale a biblioteca do mangoose para trabalharmos a conexão com o banco na nuvem: 

npm install mongoose --save


# 6º Passo 

Instale a biblioteca do dotenv 

npm install dotenv 


# Manipulação de dados

A porta utilizada no código é a 3000. 

No terminal do vs code, inicie o servidor atraves do comando: node run server.js - A mensagem "servidor on" e "conexão com o banco feita com sucesso" deve aparecer como resultado do comando.  

Com tudo instalado e com as pastas do código fonte, o CRUD deve ser feito através das seguintes requisições no postman: 

GET - localhost:3000/livros

GET by ID - localhost:3000/livros/(adicione o ID do livro)

POST - localhost:3000/livros/

PUT - localhost:3000/livros/(adicione o ID do livro)

DELETE - localhost:3000/livros/(adicione o ID do livro)

Documentação Postman:https://documenter.getpostman.com/view/11643776/2sA3kXCzpF


## FASE 03 --------------------------------------

## Objetivo
Frontend desenvolvido para aplicação e gerenciamento de livros. Criação de interface de usuário funcional e simples que comunique com Backend desenvolvido na Fase 02 

## Ferramentas Utilizadas
- HTML
- CSS
- Bootstrap
- React

## Iniciar projeto

# 1º Passo
Certifique-se que tenha criado o arquivo .env
No terminal do vs code, inicie a conexão com o servidor atraves do comando: npm start

# 2º Passo
Após conexão com sucesso, abra um novo termianl e acesse pasta do frontend com o comando:  cd frontend
E o execute utilizando o comando: npm start
Abrirá um navegador local para interagir com a interface criada.

# model .env
No .env, incluir: 
DB_CONNECTION_STRING=
