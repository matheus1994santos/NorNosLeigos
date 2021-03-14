var resp = document.getElementById('btn-res');
var tela = document.getElementById('print');


resp.addEventListener('click', function(){
   return calcFisica.Tensao();
})

var calcFisica = { 


    Tensao: function() {
        var Ohm = parseFloat(document.getElementById('r-ohm').value); 
        var Amp = parseFloat(document.getElementById('a-amp').value);
        
        if (Ohm != undefined && Amp != undefined) {
            x = Ohm * Amp;
            console.log(x + ' volts');
            return tela.innerHTML = x + ' Volts ';
            
        } 
       
    },

    Potencia: function() {
        x = y * z;

        return tela = x;
    },

    Corrente: function() {
        x = y * z;

        return tela = x;
    },

    Impedancia: function() {
        x = y * z;

        return tela = x;
    },

    Transistores: function() {
        x = y * z;

        return tela = x;
    },

    capacitancia: function() {
        x = y * z;

        return tela = x;
    },

    Materiais: function() {
        x = y * z;

        return tela = x;
    }

}