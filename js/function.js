var tela = [
    document.getElementById('print0'),
    function(){ 
    return { 
        Ohm0:parseFloat(document.getElementById('r-ohm0').value), 
        Amp0:parseFloat(document.getElementById('a-amp0').value),
        Volt0:parseFloat(document.getElementById('r-volts0').value),
        Ohm1:parseFloat(document.getElementById('r-ohm1').value), 
        Amp1:parseFloat(document.getElementById('a-amp1').value),
        Volt1:parseFloat(document.getElementById('r-volts1').value),
        Volt2:parseFloat(document.getElementById('r-volts2').value),
        Volt3:parseFloat(document.getElementById('r-volts3').value),
        Volt4:parseFloat(document.getElementById('r-volts4').value),
        con0:parseFloat(document.getElementById('a-con0').value),
        sen0:parseFloat(document.getElementById('a-sen0').value),
        Amp2:parseFloat(document.getElementById('a-amp2').value),
        Amp3:parseFloat(document.getElementById('a-amp3').value),
        Amp4:parseFloat(document.getElementById('a-amp4').value),
        Amp5:parseFloat(document.getElementById('a-amp5').value) } },
    document.getElementById('print1'),
    document.getElementById('print2'),
    document.getElementById('print3'),
    document.getElementById('print4'),
    document.getElementById('print5'),
    document.getElementById('print6'),
    document.getElementById('print7'),
    document.getElementById('print8'),
    document.getElementById('print9')
]; // array que colhem e printam informações na tela;

var btnComando = [
    document.getElementById('btn-res0'),
    document.getElementById('btn-res1'),
    document.getElementById('btn-res2'),
    document.getElementById('btn-tensao'),
    document.getElementById('btn-corrente'),
    document.getElementById('btn-Resistencia'),
    document.getElementById('btn-Pot-atv'),
    document.getElementById('btn-Pot-rtv'),
    document.getElementById('btn-Pot-apt'),
    document.getElementById('btn-Transistor'),
    document.getElementById('btn-Capacitancia'),
    document.getElementById('btn-Impedancia'),
    document.getElementById('btn-Res-materiais'),
    document.getElementById('btn-res3'),
    document.getElementById('btn-res4'),
    document.getElementById('btn-res5'),
    document.getElementById('btn-res6'),
    document.getElementById('btn-res7'),
    document.getElementById('btn-res8'),
    document.getElementById('btn-res9')
]; // array com botoes;

// ------------------------- Calculos Fisicos --------------------- //

// ------------------------- Formulas FISICAS --------------------- //

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

var cinematica = { 
    // Grandezas básicas
    VelMedia: function(m,s){ 

        if( typeof m != "number" || typeof s != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
        Vm = m/s;

        return ' A velocidade média é de ' + Vm + 'm/s. '
    },

    aceleracao: function(m,s){ 

        if( typeof m != "number" || typeof s != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
        a = m/s;

        return ' A aceleração é de ' + a + 'm/s². '
    },
    // M.U.
    MU: function(v,t){ 

        if( typeof v != "number" || typeof t != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
        Ax = v*t;

        return ' A aceleração é de ' + Ax + 'm.s. '
    },
    // M.U.V.
    MUV: function(v,t,a){ 

        if( typeof v != "number" || typeof t != "number" || typeof a != "number" ){
            return " É necessario três numeros para realizar equação ";
        }
        muv = (v*t)+((a*t*t)/2);

        return ' A aceleração é de ' + muv + 'm/s. '
    },
    /* ----------------------- */
    // Queda Livre
    QuedaLivre: function(v,t,g){ 

        if( typeof v != "number" || typeof t != "number" || typeof g != "number" ){
            return " É necessario três numeros para realizar equação ";
        }
        Ah = (v*t)+((g*t*t)/2);

        return ' A Altura é de ' + Ah + 'm. '
    },

    AlturaMax: function(v, g){ 

        if( typeof v != "number" || typeof g != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

        h = (v*v)/2*g;

        return ' A Altura maxima é de ' + h + 'm. '
    },

    TempoMax: function(v, g){ 

        if( typeof v != "number" || typeof g != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

        h = v/g;

        return ' A Tempo Maximo é de ' + h + 's. '
    },
    /* ----------------------- */
    // M.C.U.
    VelMCU: function(w, R){ 

        if( typeof w != "number" || typeof R != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

         v = w*R;

        return ' A Velocidade é de ' + v + 'm/s. '
    },

    VelAngT: function(T){ 

        if( typeof T != "number"){
            return " É necessario pelo m numeros para realizar equação ";
        }

        w = (2 * Math.round((Math.PI)))/T;

        return ' A Velocidade angular é de ' + w + 'rad/s. '
    },

    VelAngF: function(f){ 

        if( typeof f != "number" ){
            return " É necessario pelo m numeros para realizar equação ";
        }

        w = 2 * Math.round((Math.PI)) * f; 

        return ' A Velocidade angular é de ' + w + 'rad/s. '
    },

    aceleracaoAngW: function(w, R){ 

        if( typeof w != "number" || typeof R != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

         a = w*w*R;

        return ' A Velocidade é de ' + a + 'm/s². '
    },

    aceleracaoAngV: function(v, R){ 

        if( typeof v != "number" || typeof R != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

         a = (v*v)/R;

        return ' A Velocidade é de ' + a + 'm/s². '
    },

    frequencia: function(nv, t){ 

        if( typeof nv != "number" || typeof t != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

         f = nv/t;

        return ' A Velocidade é de ' + f + 'Hz.'
    },

    periodoF: function(T, nv){ 

        if( typeof v != "number" || typeof R != "number" ){
            return " É necessario três numeros para realizar equação ";
        }

         t = T/nv;

        return ' A Velocidade é de ' + t + 's. '
    },
    /* ----------------------- */
    // M.H.S
    PeriodoPendoloS: function(L, g){ 

        if( typeof L != "number" || typeof g != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }

         t =  Math.round( 2 * Math.PI * Math.sqrt(L/g));

        return ' A Período é de ' + t + 's. '
    },

    PeriodoPendoloE: function(m, k){ 

        if( typeof m != "number" || typeof k != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }

         t = Math.round( 2 * Math.PI * Math.sqrt(m/k));

        return ' A Período é de ' + t + 's. '
    }
} // Objeto com Metodos de Formulas cinematica;

var dinamica = { 
    // 2ª Lei de Newton
    forcaR: function(m,a){
        if( typeof m != "number" || typeof a != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
        F = m*a;
        return ' A velocidade média é de ' + F + 'N  ou ' + F + 'kg.m/s2.'
    },

    forcaP: function(m,g){
        if( typeof m != "number" || typeof g != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
       P = m*g; 
       return ' A velocidade média é de ' + P + 'N  ou ' + P + 'kg.m/s2.'
       //Math.pow(base, expoente)
    },

    forcaGravitacional: function(M , m, d){
        if( typeof M != "number" || typeof m != "number" || typeof d != "number"){
            return " É necessario dois numeros para realizar equação ";
        }
       
       var G = Math.pow(10, -11);

       F = (6.67*G) * ((M*m)/(d*d));
       return ' A velocidade média é de ' + F + 'N  ou ' + F + 'kg.m/s2.'
       //Math.pow(base, expoente)
    },

    constanteGravitacional: function(){
        
       return ' 6,67.10-¹¹N.m²/kg² '
       //Math.pow(base, expoente)
    }
} // Objeto com Metodos de Formulas Dinamicas;

var fluidos = { 
    MassaEspecifica: function(m,v){
        if( typeof m != "number" || typeof v != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
       U = m/v; 
       return ' A Massa específica é de ' + U + 'kg/m3.' 
       //Math.pow(base, expoente)
    },

    pressao: function(F,A){
        if( typeof F != "number" || typeof A != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
       p = F/A; 
       return ' A Massa específica é de ' + p + 'kg/m3.' 
       //Math.pow(base, expoente)
    },

    // Empuxo (Arquimedes)

    Empuxo: function(Ul , g, V){
        if( typeof Ul != "number" || typeof g != "number" || typeof V != "number"){
            return " É necessario três numeros para realizar equação ";
        }
       
       E = Ul * g * V;
       return ' A Empuxo é de ' + E + 'N.'
       //Math.pow(base, expoente)
    },

    PesoAparente: function(P,E){
        if( typeof P != "number" || typeof E != "number" ){
            return " É necessario dois numeros para realizar equação ";
        }
       Pap =  P - E; 
       return ' A Massa específica é de ' + Pap + 'N.' 
       //Math.pow(base, expoente)
    },
    
    // fim Empuxo (Arquimedes)

    PressaoAbsoluta: function(Patm, U, g, h){
        if( typeof Patm != "number" || typeof U != "number" || typeof g != "number" || typeof h != "number"){
            return " É necessario Quatro numeros para realizar equação ";
        }
       
       Pabs = Patm + (U * g * h);
       return ' A Empuxo é de ' + Pabs + 'N.'
       //Math.pow(base, expoente)
    },

    // Pascal

    PrensaoHidraulica: function(F1, A1, F2, A2){

        if ((typeof F1 != "number" || typeof A1 != "number") && (typeof F2 != "number" || typeof A2 != "number")) {
            return " É necessario quatro numeros para realizar equação destes cilindros. "
        }

        if( typeof F2 != "number" || typeof A2 != "number"){
            P1 = F1 / A1;
            return ' A Prensa hidráulica no cilidro 1 é de ' + P1 + 'N';
        }

        if (typeof F1 != "number" || typeof A1 != "number") {
            P2 = F2 / A2;
            return ' A Prensa hidráulica no cilidro 2 é de ' + P2 + 'N';    
        }

        
        P1 = F1 / A1;
        P2 = F2 / A2;
            
       return ' A Prensa hidráulica no cilidro 1 é de ' + P1 + 'N e no cilidro 2 é de ' + P2 + 'N.'
       //Math.pow(base, expoente)
    }
} // Objeto com Metodos de Formulas fluidos;

var termica = { 

}

var opticaGeo = { 

}

var ondulatoriaAcustica = { 

}

var eletrostatica = { 

}

var eletrodinamica = { 

}

var eletromagnetismo = { 

}
// ------------------------- Formulas FISICAS --------------------- //

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
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula tensão;

btnComando[4].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: flex');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Corrente;

btnComando[5].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: flex');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

btnComando[6].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: flex');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

btnComando[7].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: flex');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

btnComando[8].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: flex');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

btnComando[9].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: flex');
    document.getElementById('tela7').setAttribute('style', 'display: none');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

btnComando[10].addEventListener('click', function(){
    document.getElementById('tela').setAttribute('style', 'display: none');
    document.getElementById('tela1').setAttribute('style', 'display: none');
    document.getElementById('tela2').setAttribute('style', 'display: none');
    document.getElementById('tela3').setAttribute('style', 'display: none');
    document.getElementById('tela4').setAttribute('style', 'display: none');
    document.getElementById('tela5').setAttribute('style', 'display: none');
    document.getElementById('tela6').setAttribute('style', 'display: none');
    document.getElementById('tela7').setAttribute('style', 'display: flex');
    document.getElementById('tela8').setAttribute('style', 'display: none');
    document.getElementById('tela9').setAttribute('style', 'display: none');
});// Botão da formula Resistencia;

// btnComando[11].addEventListener('click', function(){
//     document.getElementById('tela').setAttribute('style', 'display: none');
//     document.getElementById('tela1').setAttribute('style', 'display: none');
//     document.getElementById('tela2').setAttribute('style', 'display: none');
//     document.getElementById('tela3').setAttribute('style', 'display: none');
//     document.getElementById('tela4').setAttribute('style', 'display: none');
//     document.getElementById('tela5').setAttribute('style', 'display: none');
//     document.getElementById('tela6').setAttribute('style', 'display: none');
//     document.getElementById('tela7').setAttribute('style', 'display: none');
//     document.getElementById('tela8').setAttribute('style', 'display: flex');
//     document.getElementById('tela9').setAttribute('style', 'display: none');
// });// Botão da formula Resistencia;

// btnComando[12].addEventListener('click', function(){
//     document.getElementById('tela').setAttribute('style', 'display: none');
//     document.getElementById('tela1').setAttribute('style', 'display: none');
//     document.getElementById('tela2').setAttribute('style', 'display: none');
//     document.getElementById('tela3').setAttribute('style', 'display: none');
//     document.getElementById('tela4').setAttribute('style', 'display: none');
//     document.getElementById('tela5').setAttribute('style', 'display: none');
//     document.getElementById('tela6').setAttribute('style', 'display: none');
//     document.getElementById('tela7').setAttribute('style', 'display: none');
//     document.getElementById('tela8').setAttribute('style', 'display: none');
//     document.getElementById('tela9').setAttribute('style', 'display: flex');
// });// Botão da formula Resistencia;

// ------------------------- Calculos Fisicos ---------------------- //


