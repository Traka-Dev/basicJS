/*
 * Funcion acepta solo números del 1 al 3
 * 1 = piedra
 * 2 = papel
 * 3 = tijera
 * el valor del cpu se calcula de manera aleatoria con la funcion Math.random()
 */
function juego(param1) {
    if (param1 == 1 || param1 == 2 || param1 == 3) {
        var opciones = { 1: "piedra", 2: "papel", 3: "tijera" };
        usaurio = opciones[param1];
        cpu = opciones[Math.round(Math.random() * (3 - 1) + 1)];
        if (usaurio === cpu) {
            console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
            console.log("EMPATE");
        } else if (usaurio === opciones[1] && cpu === opciones[2]) {
            console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
            console.log("Gano CPU");
        } else if (usaurio === opciones[2] && cpu === opciones[3]) {
            console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
            console.log("Gano CPU");
        } else if (usaurio === opciones[3] && cpu === opciones[1]) {
            console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
            console.log("Gano CPU");
        } else {
            console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
            console.log("Ganaste!!!");
        }
    } else {
        console.log("PARAMETRO INVALIDO");
    }
}