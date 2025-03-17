# 🎭 Fakename - Gerador de Nomes Aleatórios  

Fakename é um simples gerador de nomes aleatórios, combinando nomes e sobrenomes de uma lista pré-definida. Ideal para testes, placeholders e simulações.  

## 🚀 Tecnologias Utilizadas  
- JavaScript  
- Node.js  
- npm  

---

## 📦 Instalação  

### 1️⃣ **Clone o Repositório**  - caso queira, pode realizar o download ou clonar para o próprio git
Abra o terminal e digite:  
```sh
git clone [https://github.com/seu-usuario/fakename.git](https://github.com/Gimenessz/fakename.git)
```
Depois, entre na pasta do projeto:  
```sh
cd fakename
```

### 2️⃣ **Instale as Dependências (Se Houver)**  
```sh
npm install
```

---

## ▶️ Como Usar  

Se o módulo foi publicado no npm, você pode instalá-lo diretamente:  
```sh
npm install @seu-usuario/fakename
```

Se estiver rodando localmente:  
```js
const fakename = require('./index'); 

console.log(fakename()); // Retorna um nome aleatório
```

Se estiver utilizando **ES Modules (ESM)**, importe assim:  
```js
import fakename from './index.js';

console.log(fakename()); // Retorna um nome aleatório
```

---

## 🛠 Como Testar o Módulo Após Publicação  

Caso tenha publicado no **npm**, você pode testar seu pacote criando um novo projeto:  

```sh
mkdir teste-fakename && cd teste-fakename
npm init -y
npm install @seu-usuario/fakename
```

Depois, crie um arquivo `test.js` e adicione:  

```js
const fakename = require('@seu-usuario/fakename');

console.log(fakename()); // Exibe um nome aleatório
```

Execute:  
```sh
node test.js
```

RM99799 - Felipe Gimenes 
RM559444 - Musashi Mabuti
RM559809 - Marcos Gabriel
RM560796 -Joel Barra
