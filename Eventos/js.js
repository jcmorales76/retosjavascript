const personas = [
    { id: 1, nombre: "Juan", apellido: "Morales", tipoUsuario: "Piloto" },
    // { id: 2, nombre: "Andres", apellido: "Castro", tipoUsuario: "Mecanico" },
    // { id: 3, nombre: "Paul", apellido: "Morales", tipoUsuario: "Piloto" },
    // { id: 4, nombre: "Ignacio", apellido: "Del Gato", tipoUsuario: "Mecanico" },
    // { id: 5, nombre: "Sara", apellido: "Molino", tipoUsuario: "Mecanico" },
    // { id: 6, nombre: "Jocy", apellido: "Ferreyra", tipoUsuario: "Piloto" },
    // { id: 7, nombre: "Percy", apellido: "Alvites", tipoUsuario: "Piloto" },
    // { id: 8, nombre: "Carlos", apellido: "Casasola", tipoUsuario: "Mecanico" },
  ];

const ingresoDatos=()=>{
    let nombre = prompt("Ingrese el nombre del empleado");
    let apellido = prompt("Ingrese el apellido del empleado");
    let tipoUsuario = prompt("Ingrese Piloto o Mecanico");
  
  
    let registroPersonas = {
        id: personas.length +1,
        nombre: nombre,
        apellido: apellido,
        tipoUsuario: tipoUsuario,
    };
    personas.push(registroPersonas);


personas.forEach((item, index) => {
    const h3 = document.createElement("div");
    h3.id = `registro_${index + 1}`;
    h3.innerHTML = `<h4>Empleado : ${item.id}</h4>
                    <h3>Nombre : ${item.nombre} ${item.apellido}</h3>
                    <h3> Empleado : ${item.tipoUsuario}</h3>
                    ------------------------------------------`;
    document.body.appendChild(h3);
  })};

let btnRegistro = document.getElementById('btnRegistro');

let evento ="click";
btnRegistro.addEventListener(evento,ingresoDatos);