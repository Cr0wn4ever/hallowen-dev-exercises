//ejercicio 1 "LA POSECION DEL CODIGO"

/*Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.*/

function translatePossessed (message: string): string {
  const translatedMessage = !message.trim() ? "" : message.split(" ").reverse().map(x => x.split("").reverse().join("")).reverse().join(" ");
  return translatedMessage;
}
