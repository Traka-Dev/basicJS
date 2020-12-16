function auto(marca = "audi", modelo = "r8", annio = 2020) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.texto = function() {
        console.log(`Se agrego al garage un auto de la marca ${this.marca} modelo ${this.modelo} año ${this.annio}`);
    }
}
var marca = ["Nissan", "Volkswagen"];
var modelos = ["tsuru", "bocho"];
var annio = [2000, 1978]; // xD no se porque se me vinieron a la mente estos modelos
var garage = [];
for (i = 0; i < marca.length; i++) {
    var marcaTemp = marca[i];
    var modeloTemp = modelos[i];
    var annioTemp = annio[i];
    var temp = new auto(marcaTemp, modeloTemp, annioTemp);
    garage.push(temp);
    temp.texto();

}