/*
Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).
Cada 7 segundos, los leds cambian de estado de esta forma:
Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
Si el led está encendido, se mantiene siempre encendido.
Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. 
*/
function countTime(leds = []) {

}

console.clear();
// console.log(countTime([0, 1, 1, 0, 1])); // 7
// console.log(countTime([0, 0, 0, 1])); // 21
console.log(countTime([0, 0, 1, 0, 0])); // 28

/*
  1st. version
  let orig = 0;
  return leds.reduce(
    (data, curr) => {
      [prev, turnOn, zeros] = data;
      if (curr === 0) {
        zeros++;
        if (prev === 1) turnOn++;
        else orig++;
      }
      console.log(
        `  ${prev}    ${curr}     ${turnOn}     ${zeros}     ${orig}`
      );
      return [curr, turnOn, zeros, orig];
    },
    [leds[leds.length - 1], 0, 0]
  )[1]; //* 7
*/

/*
  2nd. version
  console.log("prev curr leds[i]  i  turnedOn");
  let iterations = 0,
    turnedOn = 0,
    prev,
    curr;
  for (let i = 0; i < leds.length; i++) {
    if (i === 0) prev = leds[leds.length - 1];
    else prev = leds[i - 1];
    curr = leds[i];
    if (prev === 1 && curr === 0) leds[i] = 1;
    if (leds[i] === 1) turnedOn++;
    console.log(`  ${prev}    ${curr}     ${leds[i]}     ${i}     ${turnedOn}`);
    if (i === leds.length - 1 && turnedOn <= i) {
      i = -1;
      turnedOn = 0;
      iterations++;
      console.log("\n");
    }
    // if (iterations === 2) break;
    // if (i === leds.length - 1) console.log(turnedOn, i);
  }
  console.log(leds);
  return iterations;
*/