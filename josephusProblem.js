// EJERCICIO 6 EL PROBLEMA DE JOSEFO

function surviveRoulette(n, k) {
  const survivor = [...Array(n).keys()];
  while (survivor.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      const salvados = survivor.shift();
      survivor.push(salvados);
    }
    const eliminado = survivor.shift();
  }
  return survivor;
}

function surviveRouletteRecursive(n, k) {
  if (n == 1) {
    return 0;
  }

  return (surviveRouletteRecursive(n - 1, k) + k) % n;
}

console.log(`Sin recursividad: EL SOBREVIVIENTE ES ${surviveRoulette(4, 2)}`)
console.log(`Con recursividad: EL SOBREVIVIENTE ES ${surviveRouletteRecursive(4,2)}`)
