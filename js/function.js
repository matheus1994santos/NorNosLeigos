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

// ------------------------- Calculos Fisicos --------------------- //

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

// ------------------------- Calculos Fisicos --------------------- //

