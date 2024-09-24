console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// main.js

// Exibe uma mensagem no console
console.log('Olá, bem-vindo ao meu site!');

// Cria um elemento de parágrafo e adiciona à tela
document.body.innerHTML = '<p>Olá, bem-vindo ao meu site!</p>';
<script src="main.js"></script>
