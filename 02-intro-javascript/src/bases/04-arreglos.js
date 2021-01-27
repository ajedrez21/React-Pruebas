//No es recomendable hacerlo de esta forma, salvo que quieras definir un tamaño en especifico
//const arreglo =  new Array(100);

const arreglo = [1,2,3,4];
//No utilizarlo de esta forma
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

// Con el spread te copia el arreglo punto por punto
let arreglo2 = [...arreglo, 5];
// LA FUNCION MAP EN LOS ARRAY PERMITE DEVOLVER ELEMENTO POR ELEMENTO AL ARREGLO QUE SE LO ASIGNA CON EL MISMO VALOR O MODIFICADO DEPENDIENDO LO QUE SE REALICE ADENTRO.
const arreglo3  = arreglo2.map(function(x){ 
    //EN ESTE CASO MULTIPLICO LO QUE ESTA EN EL ARREGLO POR SI MISMO. POR QUE X ES EL VALOR QUE ESTA POSICIONADO AHORA EL ARRAY.
    return x*x;    
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );