//ejercicio #5 UN JUEGUITO

function changeLock(current, target) {
  let minMovesToUnlock = 0;

  for (let i = 0; i < 4; i++) {
    let directDistant = Math.abs(current[i] - target[i]);
    let circularDistant = 10 - directDistant;
    minMovesToUnlock += Math.min(directDistant, circularDistant);
  }

  return minMovesToUnlock;
}

console.log(changeLock("1234", "1310"));
console.log(changeLock("1234", "5678"));
console.log(changeLock("1357", "2468"));
