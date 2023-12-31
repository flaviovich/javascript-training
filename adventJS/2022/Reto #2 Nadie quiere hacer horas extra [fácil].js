/*
Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.
Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.
Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.
Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:
*/
function countHours(year, holidays) {
  let diasExtra = 0;

  holidays.forEach((f) => {
    const fechaString = "".concat(f, "/", year);
    const feriado = new Date(fechaString);
    if (![0, 6].includes(feriado.getDay())) {
      diasExtra += 2;
    }
  });

  return diasExtra;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD
const extra = countHours(year, holidays); // 2 días -> 4 horas extra en el año
// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
console.clear();
console.log(extra);
