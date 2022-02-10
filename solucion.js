// 1 - Programa una función que cuente el número de caracteres de una cadena de texto.
/* const count = (text)=>{
    //opcion 1
    const numberOfCaracters = text.length;
    console.log(numberOfCaracters);
    return numberOfCaracters;

    //opcion 2 : sin usar el length
    const arr = Array.from(text);
    let numberOfCaracters = 0;

    for (let i = 0; i < arr.length; i++) {
        numberOfCaracters++;
    }

    console.log(numberOfCaracters);
    return numberOfCaracters;
};

count("hola mundo"); */









// 2 - Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
/* const cutText = (text,index)=>{
    //opcion 1
    const newText = text.substring(0,index);
    console.log(newText);
    return newText;

    //opcion 2
    const newText = text.slice(0,index);
    console.log(newText);
    return newText;
};

cutText("Hola Mundo",4); */









// 3 - Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
/* const splitText = (text,val)=>{
    const newText = text.split(val)
    console.log(newText);
    return newText;
}

splitText("hola que tal"," "); */









// 4 - Programa una función que repita un texto X veces.
/* const repeatText = (text,interval)=>{
    let count = text.repeat(interval);
    console.log(count);
};
repeatText("hola mundo ",3); */









// 5 - Programa una función que invierta las letras de una cadena de texto.
/* const invert = (text)=>{
    const textInverted = text.split("").reverse().join("");
    console.log(textInverted);
    return textInverted;
};
invert("hola mundo"); */









// 6 - Programa una función para contar el número de veces que se repite una palabra en un texto largo.
const wordCounter = (text,search)=>{
    const textArr = text.split(" ");

    let iterator = 0;
    let index = textArr.indexOf(search);
    
    while(index !== -1) {        
        iterator++;
        index = textArr.indexOf(search,index + 1);
    }

    console.log(iterator);
};
wordCounter("que hola tal estas hola man hola","hola");








/* SUMAR max-min */
// 30 -- crear una funcion que se le pasen como parametros dos arreglos y que devuelva la suma del menor y el mayor numero de cada array

/* const arr1 = [20,56,80,100],
arr2 = [1,1,1,2,10]; */

//SOLUCION EN ENTREVISTA
/* function maxmin(number){
    const result = number.reduce((acc,number)=>{
        if(acc.max < number) acc.max = number;
        if(acc.min > number) acc.min = number;
        return acc;
    },{min:Infinity,max:0});
    console.log(result.min + result.max);
}   
maxmin(arr1); */


//MI SOLUCION
//OPCION-1
/* const sumar = (min,max)=>{  
    let result = Math.min(...min) + Math.max(...max);
    return console.log(result);
};
sumar(arr1,arr2); */


//OPCION 2
/* let max = Math.max(...arr1);
let min = Math.min(...arr2);

const sumar = (min,max)=>{
    let result = max + min;
    return console.log(result);
}
sumar(max,min); */









/*(Free Code Camp) SUMAR NUMEROS EN UN ARRAY  */
// 31 -- Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre vendrá primero.

//sumAll([1, 4]) debe devolver 10.
//sumAll([4, 1]) debe devolver 10.
//sumAll([5, 10]) debe devolver 45.
//sumAll([10, 5]) debe devolver 45.

/* const sumAll = (arr)=>{    
    const min = Math.min(...arr),
    max = Math.max(...arr),
    
    newNumbers = [];

    for(let i = min+1; i<max; i++){
        newNumbers.push(i);
    };

    const newArr = newNumbers.concat(arr)
    return console.log(newArr.reduce((acc ,num) => acc + num));
};
sumAll([1,4]);
sumAll([4,1]);
sumAll([5,10]);
sumAll([10,5]); */









/*(Free Code Camp) COMPARAR MATRICES */
// 32 - Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo se encuentre en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelva la diferencia simétrica de las dos matrices.
//Nota: puede devolver la matriz con sus elementos en cualquier orden.

/* const compareArr = (arr1,arr2)=>{
    const newArr = [];

    arr1.forEach(element => {
        arr2.find(e=>e===element) ?false :newArr.push(element);
    });

    arr2.forEach(element => {
        arr1.find(e=>e===element) ?false :newArr.push(element);
    });

    return newArr;
};

console.log(compareArr([1,2,3,55],[0,1,2,3,22])); */









/*(Free Code Camp) REMOVER VALORES DE UN ARRAY */
// 33 - Se le proporcionará una matriz inicial (el primer argumento de la destroyerfunción), seguida de uno o más argumentos. Elimina todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

/* const removeElements = (arr,...val)=>{
    let newArr = []
    
    arr.forEach(element => {
        val.find(e=>e===element) ?false :newArr.push(element)
    });

    console.log(newArr);
    return newArr;
};

removeElements([1, 2, 3, 5, 1, 2, 3], 2, 3); */