# blog

CRUD COM EXPRESS E PRISMA 

DISPONÍVEL
- CREATE USER
- READ USER
- CREATE POST
- READ ALL POSTS
- READ PUBLISHED POSTS
- READ NOTPUBLISHED POSTS
- UPDATE PUBLISHED POST
- DELETE POST

PASSOS
- Clonar repositório
- Na pasta raiz do projeto utilizar o comando 
$npm install 
- Criar um arquivo .env na raiz do projeto e adicionar a configuaração do banco de dados mysql 
DATABASE_URL="mysql://user:password@localhost:port/blog?schema=public"
- Rodar a migration no prisma para gerar o sql e criar tabelas no banco de dados automaticamente 
$npx prisma migrate dev --name init
- Rodar o seguinte comando para subir o servidor express
$npm run dev 

As chamadas das requisições podem ser feitas utilizando o Insominia
