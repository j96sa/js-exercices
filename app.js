/*******************************************************************************************  SUMAR max-min */
// 1 -- crear una funcion que se le pasen como parametros dos arreglos y que devuelva la suma del menor y el mayor numero de cada array

const arr1 = [20,56,80,100],
arr2 = [1,1,1,2,10];

//SOLUCION EN ENTREVISTA
function maxmin(number){
    const result = number.reduce((acc,number)=>{
        if(acc.max < number) acc.max = number;
        if(acc.min > number) acc.min = number;
        return acc;
    },{min:Infinity,max:0});
    console.log(result.min + result.max);
}   
maxmin(arr1);

//OPCION-1
/* const sumar = (max,min)=>{  
    let result = Math.min(...min) + Math.max(...max);
    return console.log(result);
};
sumar(arr1,arr2); */


//OPCION 2
/* let max = Math.max(...arr1);
let min = Math.min(...arr2);

const sumar = (max,min)=>{
    let result = max + min;
    return console.log(result);
}
sumar(max,min); */





/*   */






