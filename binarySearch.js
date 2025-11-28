const arrayTest = [1111, 2233, 1579, 4444, 4568, 8798, 1313, 1211, 5599, 7851];

const sortedArray = arrayTest.toSorted()

// console.log(arrayTest)

// console.log(sortedArray)

// test de busqueda binario endogena

function binarySearch(target, array){
  let inicio = 0

  let final = array.length -1
  
  while (inicio <= final){
    
    let medio = Math.floor(inicio + (final - inicio) / 2);

    if(array[medio] === target){
      return "Este era el que estabas buscando!" + array[medio]
    } else if(target < array[medio]){
      final = medio -1
    } else{
      inicio = medio +1
    }

  }
  return "No se ha encontrado en la lista"
}

console.log(binarySearch(4568, sortedArray))
console.log(binarySearch(8888, sortedArray))
console.log(binarySearch(0, sortedArray))
console.log(binarySearch(1313, sortedArray))
