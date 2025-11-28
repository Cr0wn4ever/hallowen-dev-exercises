//ejercicio 4 "BUSQUEDA BINARIA CON MYERS"

function createArray(){
  let start = 1000
  const Arr = []
  for(let i = 1; i<=1000; i++){
    Arr.push(String(start+i))
  }
  return Arr;
}

console.log(createArray().length)


// const sortedArray = createArray.toSorted()

// console.log(arrayTest)

// console.log(sortedArray)

// test de busqueda binario endogena

function binarySearch(target, array){
  let inicio = 0

  let final = array.length -1
  
  while (inicio <= final){
    
    let medio = Math.floor(inicio + (final - inicio) / 2);

    if(array[medio] === target){
      return "Este era el que estabas buscando! " + array[medio]
    } else if(target < array[medio]){
      final = medio -1
    } else{
      inicio = medio +1
    }

  }
  return "No se ha encontrado en la lista"
}

function binarySearchRecursive(arr, target, start = 0, stop = arr.length - 1) {
    // Edge case: range has been exhausted
    if (start > stop) {
        return false;
    }

    let midPoint = Math.floor(start + (stop - start) / 2);

    // Case 1: Target found
    if (arr[midPoint] === target) {
        return "Este era el que estabas buscando!" + arr[midPoint]
    }
    
    // Case 2: Target is in the lower half
    if (target < arr[midPoint]) {
        // Recurse on the lower half, excluding midPoint
        return binarySearchRecursive(arr, target, start, midPoint - 1);
    } 
    
    // Case 3: Target is in the upper half
    else {
        // Recurse on the upper half, excluding midPoint
        return binarySearchRecursive(arr, target, midPoint + 1, stop);
    }
}

console.log(binarySearch("1111", createArray()));

console.log(binarySearchRecursive(createArray(), "1111"))
