Teste Nexdom

Projeto elaborado para cumprir o desafio proposto pela Nexdom. Onde foram realizadas automações
tanto em frontend como no backend através de consultas a API, projeto feito em Cypress.

🚀 Tecnologias

✅ Node.js – Se o projeto usa JavaScript/TypeScript

✅ Cypress – Para testes automatizados

✅ Git/GitHub – Para controle de versão

✅ Express.js – Se for uma API backend

📂 Estrutura do Projeto

📦 NEXDOM
┣ 📂 cypress                        
   ┣ 📂 downloads                          
    ┃ ┣ 📂 e2e                       
    ┃ ┃ ┣ 📜 .gitignore                        
    ┃ ┃ ┣ 📜 api-git.cy.js                          
    ┃ ┃ ┣ 📜 tela-carreiras.cy.js                           
    ┃ ┃ ┗ 📜 tela-contato.cy.js                           
    ┃ ┣ 📂 fixtures                             
    ┃ ┣ 📂 results                             
    ┃ ┣ 📂 screenshots                             
    ┃ ┗ 📂 support                             
    ┃ ┃ ┣ 📜 teste1.cy.js                                
    ┃ ┃ ┗ 📜 teste2.cy.js                                
  ┣ 📂 node_modules                                    
  ┣ 📜 cypress.config.js                                          
  ┣ 📜 package-lock.json                                   
  ┗ 📜 package.json                                    

📦 Instalação e Uso
# Clone este repositório
git clone https://github.com/Araujinhoo/Teste-Nexdom.git

# Acesse a pasta do projeto
cd Teste-Nexdom

# Instale as dependências
npm install  # ou yarn install

# Execute o projeto
Abra do terminal do próprio cypress (ctrl + j)                               
Se quiser rodar os teste no próprio terminal, basta digitar no terminal  "npx cypress run"                                      
Se quiser, também pode abrir o navegador do cypress para visualizar a automação sendo executada, basta digitar no terminal  "npx cypress run"                                      

# Execução dos testes de API
Para executar os testes de API é necessário utilizar a chave token "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". Basta acessar a pasta api-git,cy.js e no comando "const token = ' '; " adicionar o token entre as chaves ' ' 

🔗 Links Úteis                       
Documentação Cypress                                   
Documentação Node.js                              
GitHub do Projeto