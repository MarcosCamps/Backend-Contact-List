# Backend-Contact-List

Iniciando a aplicação

Clonar este repositório do back.

    git@github.com:MarcosCamps/Backend-Contact-List.git
    
    
Entrar na pasta.


     cd Backend-Contact-List/backend
    
 
 Abrir terminal e instalar as dependencias.
 
 
     npm install
     
     
Subir o container do Docker


     docker-compose up -d
     
     
Entrar no container usando o comando.
     
   
     
     docker exec -it contacts_manager bash
     
     
     
Para rodar a aplicação. 


     npm run start:dev 
     
ou
     
     npm run dev
     
     
     
# Rodando o banco de dados.


Copiar o conteúdo do arquivo ContactsManager.sql e executá-lo no Workbench, dbeaver ou similares.


# Agora é hora de executar o Frontend

Siga as instruções no link:

https://github.com/MarcosCamps/Frontend-Contact-List



# Tecnologias Utilizadas no Backend

1. Cors, para a aplicação ser rodada em outro ambiente.
2. Dotenv, para a criação das variaves de ambiente.
3. Express, para o desenvolvimento da aplicação no backend.
4. Joi, para criar schemas de validação.
5. Jsonwebtoken, para transmitir ou armazenar de forma compacta e segura objetos JSON entre diferentes aplicações.
6. Mysql2, para criar o banco de dados para armazenamento e manipulação de dados, definindo a relação de cada tabela.
7. Eslint, para a organização de código.
8. TypeScript, para potencializar a linguagem JavaScript permitindo maior desempenho e produtividade na hora de executar o código.
