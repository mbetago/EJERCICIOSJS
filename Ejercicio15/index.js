//seleccionar usuarios no premium

class Factura {
    constructor (cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseimponible : 0,
            iva : 21,
            total : 0,
            formapago:'efectivo'
        }
        this.calaculototal = function () {
            for (var i = 0 ; i< this.elementos.lenght; i++) {
                this.informacion.baseimponible += this.elementos[i].cantidad * this.elementos[i].precio
                this.informacion.total = this.informacion.baseimponible * (1+(this.informacion.iva/100));
            }
        }
        this.mostrareltotal = function () {
            this.calaculototal();
            alert ('El total de los productos es ' + this.informacion.total)
        }

    }
    
}

class clasecliente {
    constructor (nombre, dirección, telefono, nit){
        this.nombre = nombre
        this.dirección = dirección;
        this.teléfono = telefono;
        this.nit = nit;
    }
}

class Elemento  {
    constructor (descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
const primercliente = new clasecliente ('pepa', 'madrid', '3103756938' , '31354654' );
const arrayelementos = [new Elemento ('objeto1' , 2 , 5), new Elemento ('Objeto2' , 3 , 4)]
const facturadeltotal = new Factura (primercliente , arrayelementos)
facturadeltotal.mostrareltotal ();