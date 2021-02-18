/* 
What is an Array?
An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:


Uma matriz é uma variável especial, 
que pode conter mais de um valor por vez.

Se você tiver uma lista de itens 
(uma lista de nomes de carros, por exemplo), 
armazenar os carros em variáveis ​​únicas poderia
ser assim:

No entanto, e se você quiser percorrer os carros 
e encontrar um específico? E se você não tivesse 
3 carros, mas 300?

A solução é um array!

Uma matriz pode conter muitos valores sob um único 
nome e você pode acessar os valores referindo-se a 
um número de índice.

Usar um literal de array é a maneira mais fácil de 
criar um Array JavaScript.

exemplo
var cars = ["Saab", "Volvo", "BMW"];

*/

// array simples

var cars = ["Saab", "Volvo", "BMW"];

document.getElementById('a1').style.border = '1px solid black';
document.getElementById('a1').innerHTML = cars;

var caneta = ['tp', 'js', 'kp'];

caneta[3] = 'Glades';
document.getElementById('a2').style.backgroundColor = 'red';
document.getElementById('a2').style.color = 'white';
document.getElementById('a2').innerHTML = caneta[2];

// Mudando um Elemento Array caneta[0] tinha value 'tp'
// e agora se torna 'ABB'

caneta[0] = 'ABB';
document.getElementById('a3').style.backgroundColor = 'blue';
document.getElementById('a3').innerHTML = caneta[0];
document.getElementById('a3').style.color = 'white';
// array simples

// Elementos da matriz podem ser objetos

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// Elementos da matriz podem ser objetos

// The length Property 
/* A lengthpropriedade de uma matriz retorna o 
comprimento de uma matriz (o número de elementos da 
matriz).*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[4] = 'Maça';

document.getElementById('a4').style.backgroundColor = 'green';
document.getElementById('a4').style.color = 'white';
document.getElementById('a4').innerHTML = fruits.length;

// Acessando o Último Elemento de Matriz

var last = fruits[fruits.length-1];
document.getElementById('a5').style.backgroundColor = 'yellow';
document.getElementById('a5').innerHTML = last;


// The length Property

// Looping Array Elements

// A maneira mais segura de fazer um loop em uma matriz 
// é usando um forloop:

fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById('a6').style.backgroundColor = 'black';
document.getElementById('a6').style.color = 'white';
document.getElementById('a6').style.height = 'auto';
document.getElementById('a6').innerHTML = text;


// Você também pode usar a Array.forEach()função:

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

document.getElementById('a7').style.backgroundColor = 'purple';
document.getElementById('a7').style.color = 'white';
document.getElementById('a7').style.height = 'auto';
document.getElementById('a7').innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

// Adicionando Elementos de Matriz

document.getElementById('a8').innerHTML = '<input type="submit" name="Enviar" onclick="myFunction2()">';
function myFunction2() {
  fruits.push("Lemon");

  document.getElementById('a8').style.backgroundColor = 'skyblue';
  document.getElementById('a8').style.color = 'black';
  document.getElementById('a8').style.width = '340px';
  document.getElementById("a8").innerHTML = '<h1 id="a8">' + fruits + '</h1>';
}

// Novo elemento também pode ser adicionado a uma 
// matriz usando a lengthpropriedade:
document.getElementById('a9').innerHTML = '<input type="submit" name="Enviar" onclick="myFunction1()">';
function myFunction1() {
  fruits[fruits.length] = "CherryBerry";
  document.getElementById('a9').innerHTML = fruits;
}

// Looping Array Elements


// Como reconhecer uma matriz / typeof lhe diz
document.getElementById('a10').style.backgroundColor = 'orange';
document.getElementById('a10').style.color = 'black';
document.getElementById('a10').innerHTML = typeof fruits;
// Como reconhecer uma matriz / typeof lhe diz


// Para resolver este problema, o ECMAScript 5 define
// um novo método Array.isArray():

document.getElementById('a11').style.backgroundColor = 'gray';
document.getElementById('a11').style.color = 'white';
document.getElementById('a11').innerHTML = Array.isArray(fruits);

// método Array.isArray()


//O problema com esta solução é que ECMAScript 5 não é 
//compatível com navegadores mais antigos 

document.getElementById('a12').style.backgroundColor = 'rgb(255,0,225)';
document.getElementById('a12').style.color = 'white';
document.getElementById('a12').innerHTML = isArray(fruits);

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

// isArray()

//O instanceofoperador retorna verdadeiro se um objeto é 
//criado por um determinado construtor:

document.getElementById('a13').style.backgroundColor = 'rgb(255,35,105)';
document.getElementById('a13').style.color = 'white';
document.getElementById('a13').innerHTML = fruits instanceof Array;

/////////////////////////////////////////////////////