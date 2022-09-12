const empleado = parseInt(prompt("¿Cuántos empleados deseas Registrar? "));

class persona {
  constructor({ nombre, apellido, correo, tipoUsuario, horasv, licencia }) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.correo = correo),
      (this.tipoUsuario = tipoUsuario);

  }
  
}

const registro = [];
for (let index = 0; index < empleado; index++) {
  const nombre = prompt("Ingresa nombre de empleado: ").toUpperCase();
  const apellido = prompt("Ingrese su apellido: ").toUpperCase();
  const correo = prompt("Ingrese tu correo: ");
  const tipoUsuario = parseInt(prompt( `Elige un tipo de Usuario: "1. Piloto" - "2. Mecanico"`));


    if (tipoUsuario === 1){
        alert(`Registro ingresado: ${nombre} ${apellido}, correo electronico ${correo} Usted es PILOTO`)
        
    }else if(tipoUsuario === 2){
        alert(`Registro ingresado: ${nombre} ${apellido}, correo electronico ${correo} Usted es MECANICO`) 
        
    }else{
        alert("Usted ingreso dato incorrecto")
    }; 



  registro.push(new persona({ nombre, apellido, correo, tipoUsuario }));
 
}

console.log(registro);

alert(`Buscaremos empleados`);

let caso = prompt("Condicion de busqueda: 1-Por Nombres y 2-Por Apellidos ")

switch (caso) {
    case "1":
        let nombre = prompt("Buscar - Ingrese nombre del la persona").toUpperCase();
        let busqueda = registro.find(item => item.nombre === nombre);
        console.log(busqueda);
        break;
    case "2":
        let apellido = prompt("Buscar - Ingrese Apellido del la persona").toUpperCase();
        let busqueda2 = registro.find(item => item.apellido === apellido);
        console.log(busqueda2);
        break;
    default:
        console.log(`Ingrese una opcion correcta`)
}

const personas = [
  { id: 1, nombre: "Juan", apellido: "Morales", tipoUsuario: "Piloto" },
  { id: 2, nombre: "Andres", apellido: "Castro", tipoUsuario: "Mecanico" },
  { id: 3, nombre: "Paul", apellido: "Morales", tipoUsuario: "Piloto" },
  { id: 4, nombre: "Ignacio", apellido: "Del Gato", tipoUsuario: "Mecanico" },
  { id: 5, nombre: "Sara", apellido: "Molino", tipoUsuario: "Mecanico" },
  { id: 6, nombre: "Jocy", apellido: "Ferreyra", tipoUsuario: "Piloto" },
  { id: 7, nombre: "Percy", apellido: "Alvites", tipoUsuario: "Piloto" },
  { id: 8, nombre: "Carlos", apellido: "Casasola", tipoUsuario: "Mecanico" },
];
//filter filtra bajo al condicion indicada
let tipoUsuario = prompt("Tipo de Usuario - Piloto o Mecanico");
let filtrados = personas.filter(item => item.tipoUsuario == tipoUsuario);
filtrados.forEach(item => {
  let reporte = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Apellido: ${item.apellido}
    Precio: $${item.tipoUsuario}
  `;
  alert(reporte);
}) 




