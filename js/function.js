//array simples
var cars = ['BMW', 'FIAT', 'FORD'];
let text , text2 = '';


for (let x of cars) {
  text += x + '<br>';
}

document.getElementById('a1').style.backgroundColor = 'black';
document.getElementById('a1').style.color = 'white';
document.getElementById('a1').innerHTML = text;
//array simples

//Loop for/of JavaScript
    const language = 'JavaScript';
    // const text2 = '';

    for (let y of language) {
        text2 += y + ' - ';
    }

document.getElementById('a2').style.backgroundColor = 'blue';
document.getElementById('a2').style.color = 'white';
document.getElementById('a2').innerHTML = text2;
//Loop for/of JavaScript

//Class 
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }

    myCar = new Car('FORD', 2014);//Cria um objeto da class para usar a logica!

document.getElementById('a3').style.backgroundColor = 'pink';
document.getElementById('a3').style.color = 'black';
document.getElementById('a3').innerHTML = myCar.name + ' ' + myCar.year;
//Class OBS class não é objeto; mais podemos criar objetos apartir de uma class!
  
    let myCar1 = new Car('Ferrari', 2020);//Oserve que novo objeto foi criado da class Car!

document.getElementById('a4').style.backgroundColor = 'Green';
document.getElementById('a4').style.color = 'white';
document.getElementById('a4').innerHTML = myCar1.name + ' ' + myCar1.year;
//Class

// JavaScript Promises 
// Uma promessa é um objeto JavaScript que vincula "Código de produção" e "Código de consumo".
// "Código de produção" pode levar algum tempo e "Código de consumo" deve aguardar o resultado.
document.getElementById('a5').style.backgroundColor = 'black';
    document.getElementById('a5').style.color = 'white';
    document.getElementById('a5').innerHTML = 'Quero te dizer uma coisa!';

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("Eu te amo"); }, 3000);
  });

myPromise.then(function(value) {
    document.getElementById('a6').style.backgroundColor = 'red';
    document.getElementById('a6').style.color = 'white';
    document.getElementById('a6').innerHTML = value;
})

// JavaScript Promises 

// JS Symboll

/* Um símbolo JavaScript é um tipo de dados primitivo, assim como Number, String ou Boolean.
Ele representa um identificador "oculto" exclusivo que nenhum outro código pode acessar acidentalmente.
Por exemplo, se diferentes codificadores quiserem adicionar uma propriedade person.id a um objeto pessoa pertencente a um código de terceiros, eles podem misturar os valores uns dos outros.
Usar Symbol () para criar identificadores exclusivos resolve este problema.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person.id = 1.1000;

document.getElementById('a7').style.backgroundColor = 'yellow';
document.getElementById('a7').innerHTML = person.id;
// JS Symboll

// Default Parameter Values / Valores de parametro padrão!
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined / y é 10 se não for aprovado ou indefinido
    return x + y;
  }

document.getElementById('a8').style.backgroundColor = 'skyblue';
document.getElementById('a8').style.color = 'white';
document.getElementById("a8").innerHTML = myFunction(-5);
// Default Parameter Values / Valores de parametro padrão!

// Function Rest Parameter / Parâmetro de descanso de função

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

document.getElementById('a9').style.backgroundColor = 'purple';
document.getElementById('a9').style.color = 'white';
document.getElementById('a9').innerHTML = x;

// Function Rest Parameter / Parâmetro de descanso de função

// Array.find () O find()método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction2);


document.getElementById('a10').style.backgroundColor = 'gray';
document.getElementById("a10").innerHTML = "First number over 18 is " + first;

function myFunction2(value, index, array) {
  return value > 18;
}

// Array.find () O find()método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.

// Array.findIndex () método retorna o índice do primeiro elemento da matriz que passa em uma função de teste.

var numbers1 = [4, 9, 16, 25, 29];
var first = numbers1.findIndex(myFunction3);


document.getElementById('a11').style.backgroundColor = 'blue';
document.getElementById('a11').style.color = 'white';
document.getElementById('a11').innerHTML = "First number over 18 has index " + first;

function myFunction3(value, index, array) {
  return value > 18;
}
// Array.findIndex () método retorna o índice do primeiro elemento da matriz que passa em uma função de teste.

// New Number Properties / Novas propriedades de número EPSILON, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER 

var  a1 = Number.EPSILON;

document.getElementById('a12').style.backgroundColor = 'orange';
document.getElementById('a12').style.color = 'black';
document.getElementById('a12').innerHTML = a1;


var  a2 = Number.MIN_SAFE_INTEGER;

document.getElementById('a13').style.backgroundColor = 'red';
document.getElementById('a13').style.color = 'white';
document.getElementById('a13').innerHTML = a2;


var  a3 = Number.MAX_SAFE_INTEGER;

document.getElementById('a14').style.backgroundColor = 'green';
document.getElementById('a14').style.color = 'white';
document.getElementById('a14').innerHTML = a3;

// New Number Properties / Novas propriedades de número EPSILON, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER

// The Constructor Method / O Método do Construtor

class aCar {
  constructor(name0,year0) {
    this.name0 = name0;
    this.year0 = year0;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year0;
  }

  age1(x) {
    return x - this.year0;
  }
}

let myaCar = new aCar('Atlas', 1994);
document.getElementById('a15').innerHTML = "My car is " + myaCar.age() + " years old.";

// The Constructor Method / O Método do Construtor 

