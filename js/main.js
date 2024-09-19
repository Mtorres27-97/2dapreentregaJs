// Definición de precios de productos en un array de objetos todo esto en CLP
const productosDisponibles = [
    { nombre: 'Cerveza', precio: 7990 },
    { nombre: 'Vino', precio: 10990 },
    { nombre: 'Whisky', precio: 18990 },
    { nombre: 'Ron', precio: 25890 },
    { nombre: 'Tequila', precio: 8700 },
    { nombre: 'Gin', precio: 6500 },
    { nombre: 'Pisco', precio: 7350 }
];

// Objeto del carrito para almacenar los productos agregados
const carrito = {
    productos: [],
    agregarProducto: function(nombre, cantidad) {
        const productoEncontrado = productosDisponibles.find(p => p.nombre === nombre);
        if (productoEncontrado && cantidad > 0) {
            const productoEnCarrito = this.productos.find(p => p.nombre === nombre);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += cantidad;
            } else {
                this.productos.push({ nombre: nombre, cantidad: cantidad, precio: productoEncontrado.precio });
            }
            alert(`Producto añadido: ${nombre} x ${cantidad}\nTotal actual: ${this.calcularTotal()} CLP`);
        } else {
            alert('Producto no válido o cantidad incorrecta.');
        }
    },
    borrarProducto: function(nombre, cantidad) {
        const productoEnCarrito = this.productos.find(p => p.nombre === nombre);
        if (productoEnCarrito) {
            if (cantidad > 0 && cantidad <= productoEnCarrito.cantidad) {
                productoEnCarrito.cantidad -= cantidad;
                if (productoEnCarrito.cantidad <= 0) {
                    this.productos = this.productos.filter(p => p.nombre !== nombre);
                }
                alert(`Producto borrado: ${nombre} x ${cantidad}\nTotal actual: ${this.calcularTotal()} CLP`);
            } else {
                alert('Cantidad incorrecta o mayor a la cantidad en el carrito.');
            }
        } else {
            alert('El producto no está en el carrito.');
        }
    },
    reiniciarCarrito: function() {
        this.productos = [];
        alert('Productos eliminados. Total del carrito es ahora 0 CLP.');
    },
    calcularTotal: function() {
        return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    },
    mostrarTotal: function() {
        alert(`Total del carrito: ${this.calcularTotal()} CLP`);
    }
};

// find:  para encontrar productos tanto en el array de productosDisponibles como en carrito.productos.
// filter: para eliminar productos del carrito si su cantidad llega a 0.
// reduce:  para calcular el total del carrito sumando el precio de cada producto multiplicado por la cantidad.

// Función principal para manejar la compra
function manejarCompra() {
    let continuar = true;
    while (continuar) {
        let accion = prompt("¿Qué deseas hacer? \n1. Agregar producto \n2. Borrar producto \n3. Ver total \n4. Reiniciar carrito \n5. Salir");

        if (accion === '1') {
            let producto = prompt("Introduce el nombre del producto (Cerveza, Vino, Whisky, Ron, Tequila, Gin, Pisco):");
            let cantidad = parseInt(prompt("Introduce la cantidad:"));
            carrito.agregarProducto(producto, cantidad);
        } else if (accion === '2') {
            let producto = prompt("Introduce el nombre del producto a borrar (Cerveza, Vino, Whisky, Ron, Tequila, Gin, Pisco):");
            let cantidad = parseInt(prompt("Introduce la cantidad a borrar:"));
            carrito.borrarProducto(producto, cantidad);
        } else if (accion === '3') {
            carrito.mostrarTotal();
        } else if (accion === '4') {
            carrito.reiniciarCarrito();
        } else if (accion === '5') {
            alert("Gracias por usar el sistema de carrito.");
            continuar = false;
        } else {
            alert("Opción no válida. Por favor elige una opción correcta.");
        }
    }
}
