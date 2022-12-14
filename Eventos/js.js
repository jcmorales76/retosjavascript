//Arreglo de Datos Existentes
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

let contenedor = document.getElementById("contenedor");
let btnRegistro = document.getElementById("btnRegistro");
let btnBorrar = document.getElementById("btnBorrar");

//Ingreso de Datos
const ingresoDatos = () => {
  contenedor.innerHTML = "";
  let nombre = prompt("Ingrese el nombre del empleado");
  let apellido = prompt("Ingrese el apellido del empleado");
  let tipoUsuario = prompt("Ingrese Piloto o Mecanico");

  let registroPersonas = {
    id: personas.length + 1,
    nombre: nombre,
    apellido: apellido,
    tipoUsuario: tipoUsuario,
  };
  personas.push(registroPersonas);

  personas.forEach((item, index) => {
    let h3 = document.createElement("div");
    h3.id = `registro_${index + 1}`;
    h3.innerHTML = `<h4>Empleado : ${item.id}</h4>
                    <h3>Nombre : ${item.nombre} ${item.apellido}</h3>
                    <h3> Empleado : ${item.tipoUsuario}</h3>
                      ------------------------------------------`;

    contenedor.append(h3);
  });
  alert("Registro ingresado");
};

//Borrado de Pantala
const borrarPantalla = () => {
  contenedor.innerHTML = "";
};

//buscar datos
const buscarDatos = () => {
  let buscar = prompt("Ingrese nombre a buscar");
  let encontrado = personas.find((item) => item.personas === buscar);

  let div = document.createElement("div");
  div.innerHTML = `<h4>Empleado : ${id}</h4>
                    <h3>Nombre : ${nombre} ${apellido}</h3>
                    <h3> Empleado : ${tipoUsuario}</h3>
                    ------------------------------------------`;
  contenedor.append(div);
};

//Eventos
let evento = "click";
btnRegistro.addEventListener(evento, ingresoDatos);
btnBorrar.addEventListener(evento, borrarPantalla);
btnBuscar.addEventListener(evento, buscarDatos);
