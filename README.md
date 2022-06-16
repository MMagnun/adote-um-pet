# Projeto "Adote um Pet" 
(Alguns pushes foram feitos como master e main nesta aplicação, por esse motivo é neccessário alternar aqui no GitHub para ver todo o código e pastas do projeto.)

Workshop de programação disponibilizado pela TreinaWeb, que vai desde a preparação do ambiente trabalho ao desenvolvimento da aplicação. 
O projeto adote um pet, tem como ideia a adoção virtual de animais, onde é possível contribuir com valores mensais para poder ajudar com os gastos de animais sem lares, 
oferecendo aos mesmos, alimentação e os cuidados necessários para uma boa saúde. 


Desenvolver uma API ligada ao Banco de Dados para o armazenamento das informações. A parte Front-end tem o desenvolvimento com react e next, ligada à API. 
Através dela será possível consultar os pets, relatórios e realizar os cadastros.  

## Aula 1 
#### Desenvolvimento da aplicação Front-End, utilizando react e Next.js. 
Na primeira aula foi apresentada a arquitetura geral do projeto, iniciando o desenvolvimento e a criação dos componentes da interface web. 
Para o ambiente de trabalho foram instalados o Node.js e VSCode. Foi instalada no VSCode a extensão "Styled Components" para ajudar na identação. 
O projeto foi iniciado com o comando: "npx create-next-app pets --ts" sem aspas, no terminal PowerShell. 
Em seguida foi iniciado o servidor no package.json através do NPM SCRIPTS "run -> "dev next dev". 
Foram feitas ainda algumas organizações do projeto, como jogar imagens na pasta "public", apagar pastas desnecessarias ao projeto, criar a pasta "src" 
e pasta "ui" dentro de "src", mover a pasta "styles" para a pasta"ui", corrigir caminhos da importação no arquivo "index.tsx" e em "_app.tsx".
Para as configurações do projeto foi instalada biblioteca do Material UI, com o comando: "npm i @mui/material @emotion/react @emotion/styled". 
Para o projeto foi criado um tema, onde para o mesmo foi criada a pasta "themes" em "ui" e o arquivo "tema.ts" para aplicar os padrões do tema. 
O ThemeProvider foi importado para o arquivo "_app.tsx" para a estilização de padrões de tamanhos de fontes e cores para todo o projeto.


## Aula 2  
#### Iniciar o desenvolvimento da API utilizando python com django. 
Nesta segunda parte, foi preparado o ambiente de desenvolvimento para dar continuidade ao projeto, onde foram instalados, o python 3.10.4 como lingaugem de programação, 
e utilizado o VSCode, que é uma IDE ou Ambiente de Desenvolvimento Integrado, para editar o código fonte da nossa aplicação. 
Para testes de requisição da API foi utilizado o Insomnia 2022.3.0. 
Foi utilizado ainda o DBeaver 21.2.3 para visualizar e manipular as tabelas que estão sendo trabalhadas. 
Para a criação da segunda parte do projeto foi criada a pasta "adote-um-pet" dentro da pasta "m-s" e executada no VSCode. 
Foi iniciado o terminal dentro do VSCode e criada a virtual env com o comando: "python -m venv .venv" sem aspas e ativada com o comando: ".venv/Scripts/Activate", também sem aspas. 
No ambiente virtual foram instaladas as bibliotecas: django com o comando: "pip install django", em seguida criado o projeto com o comando: "django-admin startproject adote_um_pet .", 
dando inicio ao desenvolvimento Back-End da API.
Foi iniciado o servidor com o comando: "python manage.py runserver", modificados idioma e time zone no arquivo "settings.py".
Criado o app pet com o comando: "python manage.py startapp pet" 
Em models.py foi criada a classe Pet, com os atributos: nome, historia e foto. 
Em seguida foram realizadas as migrações com o comando: "python manage.py makemigrations" e posteriormente "python manage.py migrate" para gerar as tabelas no banco de dados db.sqlite3. 
Na pasta "pet" foi criada a pasta "templates" e dentro dela uma nova pasta chamada "pet" e criado o arquivo "home.html" para exibir no navegador, configurado em "views.py" e "urls.py"
Instalado o Django rest framework e inserido "rest_framework" em installed_apps no arquivo "settings.py"
Criar serializer de Pet, traduzir classes em python para json e json para python e vice-versa.
A pasta "templates" criada para exeplificar funcionalidades em html foi removida. 
Em Pet foi criado o arquivo "serializers.py" e em Seguida criada a APIView de Pet.  
Criado APIView (classes) de Pet, no arquivo "views.py". 
Criado Lista de Pets, realizada a conexão com o banco sqlite, utilizando o DBeaver e criada ação de listagem de pets para exibir pets cadastrados no banco sqlite, pelo brownser.
Em seguida foi criada a APP "adocao", após criada, ela foi adicionada em settings.py INSTALLED_APPS 'adocao.apps.AdocaoConfig'. 
Criado modelo de adoção como classe em models.py dentro do app "adocao". "class Adocao(models.Model):" definindo as regras de cada pet, como remover adoções atreladas a um pet não mais presente, 
para isso foi utilizada a regra "on_delete=models.CASCADE", associada ao pet através de uma "models.ForeignKey", linha completa da regra: pet = models.ForeignKey(to='pet.Pet', null=False, on_delete=models.CASCADE)
Em seguida foram criadas as migrações com o comando: python manage.py makemigrations and python manage.py migrate. 
Foram apagados na app adocao os arquivos "admin.py" e "tests.py".
Criado "serializers.py" dentro da app "adocao". Criada a classe Adocaoserializer extendida do rest_framework serializers.
Criado o arquivo urls.py em adocao. 
Criado APIView de adocao e ações de cadastro de Adoção com as propriedades e regras de doações, valores mínimos e máximos. 
Em seguida instalado e configurado o CORS.  

 
##### *Nota: 
O comando "deactivate" sem aspas, serve para desativar o ambiente virtual (virtualenv).  
Comando "pip freeze" serve para mostrar as bibliotecas instaladas.
 
##### API (Application Programming Interface)
Em palavras simples, é a forma de um programa disponibilizar suas funcionalidades para serem utilizadas por outros programas. 
Um dos modos mais comuns é através de requisições http, utilizadas em desenvolvimento web, onde um sistema é implantado em um servidor, e, para ter acesso às funcionalidades do sistema, 
precisa-se apenas do endereço web ligado à funcionalidade da aplicação. 

##### Django 
É um conjunto de componentes que auxilia no desenvolvimento web em python, de forma mais rápida e fácil. 
Ele é reconhecido como framework full-stack por conta de todas as funcionalidades nele presentes, que vai desde requisições e respostas http, segurança de implementação de autenticação e 
autorizações, como também proteger a aplicação contra diversos tipos de ataques, possibilitando ainda a integração com banco de dados e persistência de dados, para criar tabelas e 
realizar registros nos bancos de dados.

##### CORS 
Mecanismo de segurança para garantir que recursos de uma determinada aplicação não seja acessada por recursos em dominios diferentes sem autorização. 

 
## Aula 3  
#### Continuar o desenvolvimento da aplicação Front-End com react e Next.js, criando o restante dos componentes do front-end, realizando a instalação do Axios para fazer a integração com o back-end. 
Criação dos campos de inserir e-mail e valor para doação, que se conecta ao pet adotado.  
Importados os componentes { Dialog} from '@mui/material' para exibir na tela de adoção uma mensagem da adoção. 
Para os campos de e-mail e valor foram importados o { Textfield} também do material/ui. 
Foram importados ainda do from '@mui/material, { Grid, DialogActions, Button, Snackbar } para melhorar a visualização da descrição dos campos criados (E-mail e valor), 
foram criadas ainda as regras de validação para e-mail e em valor só recebe caracteres numéricos. 
Importado { useState} do react, para armazenar informações de contagens. 
Criada a pasta "hooks" em "src/data" para criar a lógica da aplicação separada das demais funcionalidades, foi criada dentro de hooks também a pasta "pages".
Dentro de "pages" em "hooks", foi criado o arquivo "useIndex.ts"
Iniciado o processo de integração do front-end com o back-end. 
Instalação do Axios, criado ApiService.ts para apontar o endereço do desenvelvimento back-end da aplicação para realizar as requisições. 
Importado de react o useEfect, para executar uma função depois de a tela ter sido renderizada. 

##### *Nota: 
O termo "use"antes de Index é derivado do useState.


## Aula 4  
#### Trabalhando em mais 2 endpoints da API, estudando conceitos e técnicas para melhorar o desenvolvimento Back-End. 

## Aula 5  
#### Finalizar a aplicação Front-End criando relatórios de adoção e o cadastro de Pets. 
