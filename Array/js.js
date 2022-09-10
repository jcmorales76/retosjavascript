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
  const nombre = prompt("Ingresa nombre de empleado: ");
  const apellido = prompt("Ingrese su apellido: ");
  const correo = prompt("Ingrese tu correo: ");
  const tipoUsuario = parseInt(prompt( `Elige un tipo de Usuario: "1. Piloto" - "2. Mecanico"`));


    if (tipoUsuario === 1){
        alert(`Registro ingresado de ${nombre} ${apellido} ${correo} Usted es PILOTO`)
        
    }else if(tipoUsuario === 2){
        alert(`Registro ingresado de ${nombre} ${apellido} ${correo} Usted es MECANICO`) 
        
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
        let nombre = prompt("Buscar - Ingrese nombre del la persona");
        let busqueda = registro.find(item => item.nombre === nombre);
        console.log(busqueda);
        break;
    case "2":
        let apellido = prompt("Buscar - Ingrese Apellido del la persona");
        let busqueda2 = registro.find(item => item.apellido === apellido);
        console.log(busqueda2);
        break;
    default:
        console.log(`Ingrese una opcion correcta`)
}






