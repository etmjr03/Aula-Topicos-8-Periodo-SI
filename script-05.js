var caneta = {
    cor: 'azul',
    tinta: 3,
    tampada: true,

    escrever: function(){
        if(this.tampada === false && this.tinta > 0){
            console.log("Está escrevendo" );
            this.tinta--;
        } 
        else {
            console.log("Está sem tinta ou tampada" );
        }
    },

    tampar: function(){
        if (this.tampada === false){
            this.tampada = true;
            console.log('A caneta foi tampada. ');
        } else {
            console.log('A caneta já foi destampada. ');
        }
    },

    destampar: function(){
        if (this.tampada === true){
            this.tampada = false;
            console.log('A caneta já está destampada. ');
        } else {
            console.log('A caneta foi destampada. ');
        }
    }
    
}