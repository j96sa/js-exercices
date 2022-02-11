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
/* const wordCounter = (text,search)=>{
    const textArr = text.split(" ");

    let iterator = 0;
    let index = textArr.indexOf(search);
    
    while(index !== -1) {        
        iterator++;
        index = textArr.indexOf(search,index + 1);
    }

    console.log(iterator);
};
wordCounter("que hola tal estas hola man hola","hola"); */









// 7-Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro).
/* const palindromo = (text)=>{
    const textReverse = text.split("").reverse().join("");

    console.log(textReverse === text);
};
palindromo("palindromo"); */









// 8-Programa una función que elimine cierto patrón de caracteres de un texto dado.
/* const removeLeters = (text,value)=>{
    let newText = text.replace(new RegExp(value,"ig"),"");
    console.log(newText);
};
removeLeters("xyz1, xyz2, xyz3 & xyz4","xyz"); */









// 9-Programa una función que obtenga un numero aleatorio entre 501 y 600.
/* const randomNumber = ()=>{
    const number = Math.ceil(Math.random()*100) + 500
    console.log(number);
};
randomNumber() */









// 10-Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro).
/* const capicua = (number)=>{
    const newNumber = number.toString().split("").reverse().join("");
    console.log(parseInt(newNumber) === number);
};
capicua(121); */









// 11-Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n);
/* const factorial = (number)=>{
    let fact = 1;

    for(let i=1; i<number+1; i++){
        fact = fact * i;
    }

    console.log(fact);
};
factorial(5); */









// 12-Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no;
/* const numeroPrimo = (number)=>{
    const sqrtNumber = Math.round(Math.sqrt(number));

    for(let i=2; i<=sqrtNumber; i++){
        if(number%i === 0){            
            return console.log("no primo");
        };
    };
    return console.log("PRIMO");
}
numeroPrimo(1711123); */









// 13-Programa una función que determine si un número es par o impar.
/* const verifyParNumber = (number)=>{
    number%2 ?console.log("IMPAR") :console.log("PAR");
};
verifyParNumber(62); */









// 14-Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
/* const gradesConverter = (grades,type)=>{
    let converted;

    if(type==="c"){
        converted = {grades:(grades * 9/5) + 32, type:"Fahrenheit"};
    }else if(type === "f"){ 
        converted = {grades:(grades - 32) * 5/9, type:"Celsius"}
    };

    return console.log(converted);
}
gradesConverter(2,"c"); */




















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








/*(Free Code Camp) BUSCAR EN UN OBJETO */
// 34 - Cree una función que mire a través de una matriz de objetos (primer argumento) y devuelva una matriz de todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección si se va a incluir en la matriz devuelta.

const objSearch = (arr,search)=>{

    const SK = Object.keys(search);

    arr.forEach(obj => {
        Object.entries(obj).forEach(([key,value])=>{
            //console.log(key);
            SK.find(sk=>sk===key ?console.log(obj) :false)
        });


    });
};
objSearch([
    {age:21,ocupation:"dev"},
    {age:31,ocupation:"athlet"},
    {ocupation:"medic"},
    {age:20,ocupation:"lawyer"},
    {age:21,ocupation:"cook"}],
    
    {age:23,ocupation:""});



