console.log("HOLA MUNDO");

//CUANDO SON CONSTANTES ES POR QUE EL VALOR NO VA A CAMBIAR
const nombre = 'MAXI';
const apellido = 'BOGGIO';

//SIEMPRE USAR LET NO "VAR", ESTAS SI VAN A CAMBIAR DE VALOR
let valorDado = 5;
valorDado = 6;

console.log(nombre, apellido, valorDado);

//CUANDO ENTRAS DENTRO DE LAS LLAVES SE PUEDE DEFINIR LA MISMA VARIABLE CON EL NOMBRE PERO SOLO VA A SERVIR PARA ESA INSTANCIA, Y NO VA A AFERCTAR AL SICLO 
if(true){
    let valorDado = 4;

    console.log(valorDado);
}

console.log(valorDado);