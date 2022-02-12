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









// 15 - Programa una función para convertir números de base binaria a decimal y viceversa.
/* const transformBases = (num,base)=>{
    return base===2 
        ?console.log(parseInt(num,2)) 
        :console.log(num.toString(2));
};
transformBases(1010111,2); */









// 16 - Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
/* const discount = (number,disc)=>{
    return console.log(number - (number * disc) / 100);
};
discount(799,15); */









// 17 - Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
/* const getYears = (date)=>{
    let final = Date.now() - date.getTime();
    return console.log(Math.floor(final/1000/60/60/24/365));
};
getYears(new Date(1996,11,10)); */









// 18 - Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
/* const countLetters = (text)=>{
    const vocal = (/[aeiou]/i),
    consonant = /[bcdfghjklmnñpqrstvwxyz]/i;
    
    const counter = {vocals:0,consonants:0};

    for(let i=0; i<text.length; i++){
        if(vocal.test(text[i])){
            counter.vocals = counter.vocals + 1;
        }else if(consonant.test(text[i])){
            counter.consonants = counter.consonants + 1;
        }
    };

    return console.log(counter);
};
countLetters("hola mundo"); */









// 19 - Programa una founcion que valide que un texto sea un nombre valido, pe. miFuncion("Josue Paulo")devolvera verdadero
/* const validName = (name)=>{
    const regExp = /^[a-z\s]+$/i;
    return regExp.test(name) ?console.log(`${name} es un nombre valido`) :console.log(`${name} no es un nombre valido`)
};
validName("Asercio Zamora") */









// 20 - Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
/* const validGmail = (email)=>{
    const validMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})+$/i;
    return validMail.test(email) ?console.log("valid") :console.log("invalid");
};
validGmail("asvalidgmail@gmail.com"); */









// 21 - Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
/* const potenciarNumeros = (arr)=>{
    const newArr = arr.map(e=>Math.pow(e,2));
    return console.log(newArr);
};
potenciarNumeros([1,2,4,6]); */









// 22 - Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
/* const maxMin = (arr)=>{
    const values = {max:null,min:null};

    values.min = Math.min(...arr);
    values.max = Math.max(...arr);

    return console.log(values);
};
maxMin([22,-1,2,80,0,4]); */









// 23 - Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
/* const objNumbers = (arr)=>{
    const obj = {pares:[],impares:[]};

    arr.forEach(e => {
        (e%2) ?obj.impares.push(e) :obj.pares.push(e)
    });

    return console.log(obj);;
};
objNumbers([1,2,3,4,5,6,7,8,9]); */









// 24 - Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
/* const newOrder = (arr)=>{
    const obj = {asc:[],desc:[]};

    obj.asc = arr.map(e=>e).sort((a,b)=>a - b);
    obj.desc = arr.map(e=>e).sort((a,b)=>b - a);
 
    return console.log(obj);
}
newOrder([4,1,6,8,3,2,7,9,0,5]); */









// 25 - Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
/* const removeDuplicates = (arr)=>{
    const clearArr = [...new Set(arr)];
    return console.log(clearArr);
};
removeDuplicates([1,3,false,"ok",true,false,1]); */









// 26 - Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5
/* const getPromedy = (arr)=>{
    const promedy = arr.reduce((acc,val)=>acc+val)/arr.length;
    return console.log(promedy);
};
getPromedy([8.5,9,10,10,10,9.5]); */









// 27 - dado un texto transforma todas sus letras a mayuscula;
/* const transform = (text)=>{
    return console.log(text.toUpperCase());
};
transform("text"); */









// 29 - dado un texto transforma la primera letra de cada palabra a mayuscula;
/* const capitalize = (text)=>{
    let capitalized = text.split(" ");    
    capitalized = capitalized.map(e=>e.replace(e[0],e[0].toUpperCase()));
    return console.log(capitalized.join(" "));
};
capitalize("this is the text"); */









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

/* const objSearch = (arr,search)=>{
    const SK = Object.keys(search);
    const SV = Object.values(search);
    let FinalArr = [];
    let BD = [...arr];

    for(let i=0; i<SK.length; i++){        
        BD.forEach(obj => {
            Object.keys(obj).find(e=>e===SK[i] ?FinalArr.push(obj) :false);            
        });
        BD = [...FinalArr];
        FinalArr = [];
    }
    //console.log(BD);
        
    for(let i=0; i<SV.length; i++){    
        BD.forEach(obj => {
            Object.values(obj).find(e=>e===SV[i] ?FinalArr.push(obj) :false);            
        });
        BD = [...FinalArr];
        FinalArr = [];
    }
    //console.log(BD);
    
    return console.log(BD);
};
objSearch([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); */



