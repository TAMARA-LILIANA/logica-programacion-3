function calcularFactorial(){
    let numero = document.getElementById("obtenerDatos").value ;
    
    if(Number.isInteger(Number (numero))){
        let resultado = 1;
        for (let i = 1; i <= Number (numero); i++) {
            resultado = resultado * i;
            
        }
        document.getElementById("error").innerText = resultado ;

    }else{
        document.getElementById("error").innerText = "Dato Invalido" ;
    }
}



