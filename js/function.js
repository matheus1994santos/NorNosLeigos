var tela = [
    document.getElementById('print0'),
    function(){ 
    return { 
        Ohm0:parseFloat(document.getElementById('r-ohm0').value), 
        Amp0:parseFloat(document.getElementById('a-amp0').value),
        Volt0:parseFloat(document.getElementById('r-volts0').value),
        Ohm1:parseFloat(document.getElementById('r-ohm1').value), 
        Amp1:parseFloat(document.getElementById('a-amp1').value),
        Volt1:parseFloat(document.getElementById('r-volts1').value) } },
    document.getElementById('print1'),
    document.getElementById('print2')
]; // array que colhem e printam informações na tela;

var btnComando = [
    document.getElementById('btn-res0'),
    document.getElementById('btn-res1'),
    document.getElementById('btn-res2'),
    document.getElementById('btn-tensao'),
    document.getElementById('btn-corrente'),
    document.getElementById('btn-Resistencia'),
    document.getElementById('btn-Pot-tot'),
    document.getElementById('btn-Impedancia'),
    document.getElementById('btn-Transistor'),
    document.getElementById('btn-Capacitancia'),
    document.getElementById('btn-Res-materiais')
]; // array com botoes;

var calcFisica = { 

    Tensao: function() {
        
            x = tela[1]().Ohm0 * tela[1]().Amp0;

            if(x <= 1 ){
                console.log( x + ' volt');
                return tela[0].innerHTML = x + ' Volt ';
            }
    
            console.log( x + ' volts');

            return tela[0].innerHTML = x + ' Volts ';
       
    },

    Potencia: function() {
        x = y * z;

        return tela[0].innerHTML = x;
    },

    Corrente: function() {

        x = tela[1]().Volt0 / tela[1]().Ohm1;

        if(x <= 1 ){
            console.log( x + ' Ampere');
            return tela[2].innerHTML = x + ' Ampere ';
        }

        console.log( x + ' Amperes');
        return tela[2].innerHTML = x + ' Amperes';
    },

    Resistencia: function() {
        x = tela[1]().Volt1 / tela[1]().Amp1 ;

        if(x <= 1 ){
            console.log( x + ' Ohms ');
            return tela[3].innerHTML = x + ' Ohms ';
        }
        
        console.log( x + ' Ohm ');
        return tela[3].innerHTML = x + ' Ohm';
    },

    Impedancia: function() {
        x = y * z;
        return tela[0].innerHTML = x;
    },

    Transistores: function() {
        x = y * z;

        return tela[0].innerHTML = x;
    },

    capacitancia: function() {
        x = y * z;

        return tela[0].innerHTML = x;
    },

    Materiais: function() {
        x = y * z;

        return tela[0].innerHTML = x;
    }

} // Objeto com Metodos de Formulas eletricas;

btnComando[0].addEventListener('click', function(){
    return calcFisica.Tensao();
}) // Botão com metodo Tensão;

btnComando[1].addEventListener('click', function(){
    return calcFisica.Corrente();
}); // Botão com metodo Corrente;

btnComando[2].addEventListener('click', function(){
    return calcFisica.Resistencia();
}); // Botão com metodo Corrente;

btnComando[3].addEventListener('click', function(){ 
    document.getElementById('tela').setAttribute('style', 'display: flex');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
});// Botão da formula tensão;

btnComando[4].addEventListener('click', function(){
    document.getElementById('tela1').setAttribute('style', 'display: flex');
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none'); 
});// Botão da formula Corrente;

btnComando[5].addEventListener('click', function(){
    document.getElementById('tela2').setAttribute('style', 'display: flex');
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;










/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(a, b) {
    return a + b;
}
/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log("A soma de "+ 2 +" e " + 3 + " é igual a " + sum(2,3) + "."); // A soma de 2 e 3 é igual a 5.

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("O nome da função que faz a soma é " + sum.name + ".")

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
    return showName.name;
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName();

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?





//// array propriedades e metodos! length > conta a aquantidade de itens

// arr.length; retorna quantos elementos.
// arr.push(); adiciona elementos no arrays






