console.log("hola mundo ")

function multiplicar(val1, val2) {
    total  = 0
    for (let index = 0; index < Math.abs(val1); index++) {
        total = val2+total;
    }
    return Math.abs(val1)==val1? total:-total;    
}

console.log( multiplicar(50,50))


function obternerMayor(arrayValue) {
    return arrayValue.reduce((pre,cur)=> { return pre > cur?pre:cur})
}

console.log( obternerMayor([88,3,2,12,1,50,50]))

function  limpiarArray(params) {
    return params.reduce((acc,el)=> {
        if(el)
        {
            acc.push(el)
        }
        return acc
     },[])
}
const val =  limpiarArray([0,1,undefined,88,undefined,2,12,undefined,50,50]);
console.log(val)


function  aplanar(params) {
    return params.reduce((acc,el) => acc.concat(el) ,[])
}
 
console.log(aplanar([[1,1],[2,3],[[3,2],1]]))


function palabraRepetidas(params) {
    elementClean = params.toLowerCase()
    const words = elementClean.split(" ");
    reduceVal = words.reduce((acc,el)=> {
        acc[el]?acc[el]++:acc[el]=1;
        return acc
    },{})
    return Object.entries(reduceVal).reduce((acc,el)=> acc[1] > el[1]?acc:el)
}
console.log(palabraRepetidas("hola a todos Como haola hola cOmo todos salve ls a "))

function palindromo(params) {
    cleanParam = params.toLowerCase(params);
    cleanParam = cleanParam.replace(/\s/g,"");
    secondParam = cleanParam.split("").reverse().join("");
    return cleanParam == secondParam
}


console.log(palindromo("Do geese sese God    "))


function solution(A) {
    valDiff = []
    for (let index = 1; index < A.length; index++) {
        part1 = A.slice(0,index).reduce((acc,el) => acc+el,0);
        part2 = A.slice(index,A.length).reduce((acc,el) => acc+el,0);
        valDiff.push(Math.abs(part1-part2))
    }
    return valDiff.reduce((acc,el)=> acc < el? acc:el);   
}

console.log(solution([-1000, 1000]));

function solutionc(X, A) {

    way = Array(X+1)
    allValues = 0
    for (let index = 0; index < A.length; index++) {
         if(way[A[index]] == undefined){
            way[ A[index]]=A[index];
             allValues++;
         }
         if(allValues == X){
             return index;
         }
    }
    return -1;
}


console.log( solutionc(2, [1, 1, 1, 1]))


function solutiond(N, A) {
    arraySolution = Array(N);
    maxValue = 0;
    update = 0;
    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        if(element > N){
            update = maxValue;
        }else{
            arraySolution[element-1] > update ? arraySolution[element-1] ++: arraySolution[element-1] = update + 1;
            console.log(arraySolution)
        }
        maxValue = maxValue > arraySolution[element-1] ? maxValue: arraySolution[element-1] ? arraySolution[element-1]:maxValue;        
    } 

    for (let index = 0; index < arraySolution.length; index++) {
        const element = arraySolution[index];
        if(element < update || !element)
        {
            arraySolution[index] = update;
        }
    }
    return arraySolution;
}
console.log("solucion d")

console.log(solutiond(5,[3, 4, 4, 6, 1, 4, 4]))
//[3, 4, 4, 6, 1, 4, 4]