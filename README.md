antes de começar e recomendo que voce instale o nodejs, sera a runtime principal para rodar o javaScript/typeScript.

obs: o nodejs e equivalente a JVM do java, assim como o java precisa da JVM para compilar os arquivos.java, o javaScript/typeScript precisa do nodejs para compilar e rodar os arquivos .js/.ts.

para o uso de outras linguagens e recomendade instalar as dependecias e fazer as configurações, manter a padronização e organização do código, tente deve cada arquivo responsável por uma recra de negócios ou por uma funcionalidade apenas.

primeiro instale as dependcias.
- npm i ou npm install

segundo rode as migrations para criar as tabelas no banco.
- npx prisma generate
- npx prisma migrate dev --name init
- npx prisma studio - para visualizar o banco na web.

terceiro inicie o servidor 
- npm run dev
  
quarto, se precisa popular o banco de dados, altere o arquivo se nescessário de mais dados
- npm run seed

quinto, utilize o postMan ou o main.html para testa a aplicação, se nescessário modifique o main.html
