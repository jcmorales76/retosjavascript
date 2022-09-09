
const aircracft = [];

const nave = parseInt(prompt("Cantidad de aeronaves a ingresar? "));

class aeronaves {
  constructor(marca, modelo, tipo) {
    (this.marca = marca), (this.modelo = modelo), (this.tipo = tipo);
  }
}

for (let index = 0; index < nave; index++) {
  const marca = prompt("Ingresa un marca: BOEING o AIRBUS ");
  const modelo = prompt("Ingrese el modelo: ej: B737-200 , A320 ");
  const tipo = prompt("Ingrese el tipo: CARGO o PASAJEROS ");

  aircracft.push(new aeronaves(marca, modelo, `${tipo} de ${modelo}`));
}

for (const dato of aircracft) {
  alert(
    `marca: ${dato.marca},
     modelo: ${dato.modelo},
     tipo: ${dato.tipo}`
  );
}

console.log(aircracft);