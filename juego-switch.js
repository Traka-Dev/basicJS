/*
 * Funcion acepta solo números del 1 al 3
 * 1 = piedra
 * 2 = papel
 * 3 = tijera
 * el valor del cpu se calcula de manera aleatoria con la funcion Math.random()
 */
function juego(param1) {
    var opciones = { 1: "piedra", 2: "papel", 3: "tijera" };
    usaurio = opciones[param1];
    cpu = opciones[Math.round(Math.random() * (3 - 1) + 1)];
    switch (param1) {
        case 1:
        case 2:
        case 3:
            switch (true) {
                case usaurio === cpu:
                    console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
                    console.log("EMPATE");
                    break;
                case usaurio === opciones[1] && cpu === opciones[2]:
                    console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
                    console.log("Gano CPU");
                    break;
                case usaurio === opciones[2] && cpu === opciones[3]:
                    console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
                    console.log("Gano CPU");
                    break;
                case usaurio === opciones[3] && cpu === opciones[1]:
                    console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
                    console.log("Gano CPU");
                    break;
                default:
                    console.log(`Usaste ${usaurio} y CPU uso ${cpu}`);
                    console.log("Ganaste!!!");
            }
            break;
        default:
            console.log("PARAMETRO INVALIDO");
    }
}