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

// Cria um elemento de parágrafo
const message = document.createElement('p');

// Define o texto do parágrafo
message.textContent = 'Olá, bem-vindo ao meu site!';

// Estiliza o parágrafo
message.style.fontSize = '24px';
message.style.color = 'blue';
message.style.textAlign = 'center';
message.style.marginTop = '50px';

// Adiciona o parágrafo ao corpo do documento
document.body.appendChild(message);
