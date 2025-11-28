//ejercicio 2 "EL CUENTA OVEJAS"

/*Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.*/

function countSheep(letters: string): number {
  const validLetters = {
    s: 0,
    h: 0,
    e: 0,
    p: 0,
  };

  for (const letter of letters) {
    if (Object.keys(validLetters)[0] === letter) validLetters.s++;
    if (Object.keys(validLetters)[1] === letter) validLetters.h++;
    if (Object.keys(validLetters)[2] === letter) validLetters.e++;
    if (Object.keys(validLetters)[3] === letter) validLetters.p++;
  }

  validLetters.e = validLetters.e / 2;

  return Math.floor(Math.min(validLetters.s, validLetters.h, validLetters.e, validLetters.p));
}
