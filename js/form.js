(function(){
    var formulario = document.formulario;
    var elementos = formulario.elements;
    //Eventos
    var enviar = function(e){
        if(!validarInput() ){
            console.log("Validar input")
            e.preventDefault();
        }else if(!validarRadios()){
            console.log("Validar Radio")
            e.preventDefault();
        }
        else if(!validarCheck()){
            console.log("Validar check")
            e.preventDefault();
        }else{
            console.log("Enviar datos")
        }
    }

    var blurInput = function(){
        el = this.parentNode.childNodes[3];
        if(this.value.length > 0){
            el.innerHTML = "";
        }else{
            el.className = "label";
        }        
    };
    var focusInput = function(){
        this.parentNode.childNodes[3].className = "label active";
    };
    for(x =0 ;  x < elementos.length; x++){
        if(elementos[x].type == "text" || elementos[x].type == "email" || elementos[x].type == "password" ){
        elementos[x].addEventListener("focus",focusInput);
        elementos[x].addEventListener("blur",blurInput);
        }
    }

    formulario.addEventListener("submit", enviar,false);
}());