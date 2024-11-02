//clase para generar inmuebles
class Inmueble {

	//clase para los datos de la inmobiliaria
	constructor (numero, tipo, metros, precio, localidad, año) {
		this.numero = numero;
	    this.tipo = tipo;
	    this.metros = metros;
	    this.precio = precio;
	}	
}

	
//clase para almacenar las inmobiliarias, simplemente almacena un nombre de la inmo y una lista de inmuebles
class Inmobiliaria {
	constructor (nombre) {
		this.nombre = nombre;
		this.inmuebles = [];
	    
	}
	// método agregar inmueble nuevo
	addInmueble (numero, tipo, metros, precio) {	
		let inmueble = new Inmueble (numero, tipo, metros, precio);
		this.inmuebles.push(inmueble);	
	}

	
   /* metodo mostrar los inmuebles que son de un tipo. por ejemplo nos puede mostrar viviendas, locales...Retorna un array con todos los inmuebles que cumplen el criterio*/

	mostrarInmueblesTipo(pide_tipo) {
		let datosInmuebles = [];
		if(this.inmuebles.length > 0){
			for (let i=0;i<this.inmuebles.length;i++){
				
				if (this.inmuebles[i].tipo == pide_tipo ) {
					datosInmuebles.push(this.inmuebles[i]);
				}
			}
			
		} 
		return datosInmuebles;
	}
}