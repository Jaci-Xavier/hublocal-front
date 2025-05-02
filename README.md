
# Frontend de Gestão de Empresas e Locais

Este é o frontend da aplicação de gestão de empresas e locais, desenvolvido com **Next.js**. A aplicação permite que usuários façam login e realizem o cadastro e gerenciamento de empresas e seus respectivos endereços. A interface é integrada com a API protegida por JWT.

## Tecnologias Usadas

- **Next.js**: Framework React para construção de aplicações web modernas.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Material UI (MUI)**: Biblioteca de componentes visuais responsivos.
- **Styled Components**: Estilização de componentes com CSS-in-JS.
- **Zustand**: Gerenciamento de estado leve e reativo.
- **Axios**: Cliente HTTP para comunicação com a API.
- **React Input Mask**: Máscaras para campos de formulário.
- **TypeScript**: Tipagem estática para JavaScript.

## Funcionalidades

- **Autenticação com JWT**: Login e persistência de sessão via token.
- **Gestão de Empresas**: Criar, visualizar, atualizar e excluir empresas.
- **Gestão de Locais**: Criar, visualizar, atualizar e excluir endereços vinculados às empresas.
- **Interface Responsiva**: Layout adaptado para diversos dispositivos.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- **Node.js** (v20 ou superior)
- **npm** (ou **yarn**) como gerenciador de pacotes

## Instalação

### Passo 1: Clone o repositório

```bash
git clone git@github.com:Jaci-Xavier/hublocal-front.git
```

### Passo 2: Instale as dependências

```bash
cd hublocal-front
npm install
```

### Passo 3: Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_API_URL="url_da_api"
```

(Substitua a URL pela URL da sua API, se necessário)

### Passo 4: Inicie o projeto

```bash
npm run dev
```

O frontend estará disponível em: [http://localhost:3000](http://localhost:3000)

## Estrutura da Aplicação

- **Páginas**: Login, Dashboard, Empresas, Locais
- **Componentes**: Campos de entrada, layout, tabelas, modais
- **Gerenciamento de Estado**: Zustand
- **Estilização**: MUI + Styled Components

## Integração com a API

A aplicação consome a [API NestJS](https://github.com/Jaci-Xavier/hublocal-api), utilizando JWT para autenticação. O token é armazenado localmente e enviado nos headers das requisições protegidas.

## Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm run start`: Inicia a versão de produção
- `npm run lint`: Executa o linter do projeto
