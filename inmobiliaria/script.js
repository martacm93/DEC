// Creamos array para almacenar objetos para cada inmobiliaria
let conjinmobiliarias = [];
let nosalir = true;
let indexEncontrado;

// Creamos dos inmobiliarias una en merida y ota en badajoz, este proceso puede estar dentor de un bucle o ralizar una función para dicho
let inmo1 = new Inmobiliaria("INMOMERIDA");
inmo1.addInmueble("1", "piso", "150", "100000");
inmo1.addInmueble("2", "casa", "250", "25000");
inmo1.addInmueble("3", "terreno", "15000", "120000");
inmo1.addInmueble("4", "local", "1000", "300000");
conjinmobiliarias.push(inmo1);
let inmo2 = new Inmobiliaria("INMOBADAJOZ");
conjinmobiliarias.push(inmo2);

while (nosalir) {
  let opcion = prompt(
    "¿Que deseas hacer?\n" +
    "1.- Insertar nuevo inmueble.\n" +
    "2.- Filtrar inmuebles por tipo de inmuebles(locales, pisos...)\n" +
    "3.-Salir."
  );
  // Si pulsamos cancelar forzamos la salida
  if (opcion === null) opcion = "3";

  switch (opcion) {
    case "1":
      indexEncontrado = buscarInmo();
      // entra en el if solo si encontro la inmobiliaria y agrega el inmueble
      if (indexEncontrado >= 0) {
        let numero = prompt("Inserta el numero del inmueble");
        let tipo = prompt(
          "Inserta el tipo del inmueble. Puede ser vivenda, local, terreno..."
        );
        let metros = prompt("Inserta los metros cuadrados del inmueble");
        let precio = prompt("Inserta el precio de venta");
        conjinmobiliarias[indexEncontrado].addInmueble(
          numero,
          tipo,
          metros,
          precio
        );
      } else {
        alert("No existe ninguna inmobiliaria con ese nombre");
      }
      break;

    case "2":
      indexEncontrado = buscarInmo();
      if (indexEncontrado >= 0) {
        if (conjinmobiliarias[indexEncontrado].inmuebles.length > 0) {
          let tipoinmueble = prompt("Inserta el tipo del inmueble");
          /*creo un array datos para almacenar aquellos inmuebles que cumplan el criterio, para ello llamo al metodo mostrar muebles de la clase inmobiliaria*/
          let datos = [];
          datos = conjinmobiliarias[indexEncontrado].mostrarInmueblesTipo(tipoinmueble);
          // entra en el if si hay inmuebles en esa inmo del tipo indicado, es mejorable como otros

          if (datos.length > 0) {
            document.write(
              "   --------NUEVA CONSULTA PARA LA INMOBILIARIA-------    " +
              conjinmobiliarias[indexEncontrado].nombre +
              "   para lo locales de tipo    " +
              tipoinmueble +
              "<br> </b>"
            );
            for (let i = 0; i < datos.length; i++) {
              document.write(
                "<b> DATOS DEL INMUEBLE NUMERO: " +
                datos[i].numero +
                "<br> </b>"
              );
              document.write("TIPO DEL INMUEBLE: " + datos[i].tipo + "<br>");
              document.write(
                "SUPERFICIE: " + datos[i].metros + " metros cuadrados <br>"
              );
              document.write(
                "PRECIO DE VENTA: " + datos[i].precio + " euros <br>"
              );
              document.write(
                "------------------------------------------------------------------<br>"
              );
            }
            nosalir = false;
          } else {
            alert("No hay inmuebles en la inmobiliaria con estas características");
          }
        } else {
          alert("La inmo no tiene ningún inmueble agregado");
        }
      } else {
        alert("No existe ninguna inmobiliaria con ese nombre");
      }

      break;

    case "3":
      alert("Hemos acabado ...");
      nosalir = false;

      break;

    default:
      alert(`La opcion elegida no es correcta`);
      break;
  }
}

function buscarInmo() {

  nombreInmo = prompt(
    "Introduce el nombre de la empresa INMOMERIDA O INMOBADAJOZ"
  );
  let index = -1;
  for (i = 0; i < conjinmobiliarias.length; i++) {
    if (nombreInmo == conjinmobiliarias[i].nombre) {
      index = i;
      alert(`Se ha seleccionado la inmobiliara ${nombreInmo}`);
    }
  }
  return index;

}