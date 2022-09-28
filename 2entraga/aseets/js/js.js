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

localStorage.setItem("personas", JSON.stringify(personas));

const agregarStorage = (nombre, apellido, tipoUsuario) => {
  let personas = JSON.parse(localStorage.getItem("personas"));
  let persona = {
    id: personas.length + 1,
    nombre: nombre,
    apellido: apellido,
    tipoUsuario: tipoUsuario,
  };

  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
};

let contenedor = document.getElementById("contenedor");
let btnRegistro = document.getElementById("btnRegistro");
let btnBuscar = document.getElementById("btnBuscar");
let btnModificar = document.getElementById("btnModificar");
let btnBorrar = document.getElementById("btnBorrar");

//Ingreso de Datos
const ingresoDatos = () => {
  contenedor.innerHTML = "";
  let nombre = prompt("Ingrese el nombre del empleado");
  let apellido = prompt("Ingrese el apellido del empleado");
  let tipoUsuario = prompt("Ingrese Piloto o Mecanico");

  agregarStorage(nombre, apellido, tipoUsuario);

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

/*
const cambiarTipoUsuario = (nombre, _apellido, tipoUsuario) => {
  contenedor.innerHTML = "";


  let personas = JSON.parse(localStorage.getItem("personas"));

  personas.find(item => item.nombre === nombre).tipoUsuario = tipoUsuario;

  // personas.find((item) => item.nombre === nombre);
  // persona.tipoUsuario = tipoUsuario;

  localStorage.setItem("personas", JSON.stringify(personas));
};

cambiarTipoUsuario(nombre, apellido, tipoUsuario);

*/

//Borrado de Pantala
const borrarPantalla = () => {
  contenedor.innerHTML = "";
};

//buscar datos
const buscarDatos = () => {
  let buscar = prompt("Ingrese nombre a buscar");
  personas.find((item) => item.personas === buscar);

  localStorage.setItem("personas", JSON.stringify(personas));

  let h3 = document.createElement("div");
  h3.innerHTML = `<h4>Empleado : ${id}</h4>
                    <h3>Nombre : ${nombre} ${apellido}</h3>
                    <h3> Empleado : ${tipoUsuario}</h3>
                    ------------------------------------------`; 
  contenedor.append(div);
};

//Eventos
let evento = "click";
btnRegistro.addEventListener(evento, ingresoDatos);
btnBorrar.addEventListener(evento, borrarPantalla);
//btnModificar.addEventListener(evento, cambiarTipoUsuario);
btnBuscar.addEventListener(evento, buscarDatos);
