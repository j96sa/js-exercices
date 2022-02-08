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


