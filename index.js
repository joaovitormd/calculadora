function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num;
}

function clear(){
    document.getElementById('resultado').innerHTML = "";
}

function backspace(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    
}

function calculo(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
        document.getElementById('resultado').innerHTML = eval(resultado)
}


const listaDeTeclas = document.querySelectorAll('.conteudo__num')

for(let cont=0; cont<listaDeTeclas.length; cont++){
    
    const tecla = listaDeTeclas[cont]

    listaDeTeclas[cont].onclick = function(){
        if(tecla.textContent == "C")
            clear();
        else if(tecla.textContent == "<")
            backspace();
        else if(tecla.textContent == "=")
            calculo();
        else
            insert(tecla.textContent);
    }
}




