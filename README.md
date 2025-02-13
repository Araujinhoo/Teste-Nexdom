# Teste Nexdom

Projeto com automações de frontend e backend feitas com Cypress para o teste da Nexdom.

## 🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

## 📋 Pré-requisitos
Antes de instalar, certifique-se de que possui as seguintes ferramentas:
- **Node.js** – Faça o download e instale a partir do [site oficial](https://nodejs.org/).
- **npm** (instalado com o Node.js) ou **yarn**.
- **Git** – Para clonar o repositório, instale pelo [site oficial](https://git-scm.com/).
- **Cypress** – Para testes automatizados.

Para verificar se já tem esses softwares instalados, utilize:
```
node -v  # Verifica a versão do Node.js
npm -v   # Verifica a versão do npm
git --version  # Verifica a versão do Git
npx cypress -v  # Verifica a versão do Cypress
```

## 🔧 Instalação
Siga os passos abaixo para configurar o ambiente:

1. **Clone este repositório:**
   ```
   git clone https://github.com/Araujinhoo/Teste-Nexdom.git
   ```

2. **Acesse a pasta do projeto:**
   ```
   cd Teste-Nexdom
   ```

3. **Instale as dependências:**
   ```
   npm install  # ou yarn install
   ```

4. **Instale o Cypress (caso ainda não esteja instalado):**
   ```
   npm install cypress --save-dev  # ou yarn add cypress --dev
   ```

5. **Execute o projeto:**
   ```
   npm start  # ou yarn start
   ```
   - Certifique-se de que todas as dependências foram instaladas corretamente antes de executar.
   - Caso encontre algum erro, tente rodar:
     ```
     npm run build
     ```
     e depois reinicie com:
     ```
     npm start
     ```

## ⚙️ Executando os testes com Cypress
1. **Abra a interface gráfica do Cypress:**
   ```
   npx cypress open  # ou yarn cypress open
   ```
   - Isso abrirá a interface do Cypress, onde você poderá rodar os testes manualmente.

2. **Execute os testes diretamente no terminal:**
   ```
   npx cypress run
   ```

3. **Rodar testes em um navegador específico:**
   ```
   npx cypress run --browser chrome  # ou firefox, edge, etc.
   ```

## 🔗 Links Úteis
- [Documentação Cypress](https://www.cypress.io/docs)
- [Documentação Node.js](https://nodejs.org/en/docs/)
- [GitHub do Projeto](https://github.com/Araujinhoo/Teste-Nexdom)