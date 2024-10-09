// Productos organizados por categorías, agregando la ruta de la imagen a cada uno
const productos = [
    // Cervezas Nacionales
    { id: 1, categoria: 'Cervezas Nacionales', nombre: 'Cristal - Lata 355 ml', precio: 900, imagen: 'images/cerveza-cristal-lata.jpg' },
    { id: 2, categoria: 'Cervezas Nacionales', nombre: 'Cristal - Botella 1 litro', precio: 1500, imagen: 'images/cerveza-cristal-botella.jpg' },
    { id: 3, categoria: 'Cervezas Nacionales', nombre: 'Escudo - Lata 350 ml', precio: 950, imagen: 'images/cerveza-escudo-lata.jpg' },
    { id: 4, categoria: 'Cervezas Nacionales', nombre: 'Escudo - Botella 1 litro', precio: 1600, imagen: 'images/cerveza-escudo-botella.jpg' },
    { id: 5, categoria: 'Cervezas Nacionales', nombre: 'Kunstmann - Botella 330 ml', precio: 1400, imagen: 'images/cerveza-kunstmann-botella.jpg' },
    { id: 6, categoria: 'Cervezas Nacionales', nombre: 'Kunstmann - Growler 2 litros', precio: 6000, imagen: 'images/cerveza-kunstmann-growler.jpg' },
    { id: 7, categoria: 'Cervezas Nacionales', nombre: 'Becker - Lata 473 ml', precio: 800, imagen: 'images/cerveza-becker-lata.jpg' },
    { id: 8, categoria: 'Cervezas Nacionales', nombre: 'Becker - Pack 12 latas', precio: 8500, imagen: 'images/cerveza-becker-pack.jpg' },
    { id: 9, categoria: 'Cervezas Nacionales', nombre: 'Torobayo (Kunstmann) - Botella 500 ml', precio: 2000, imagen: 'images/cerveza-torobayo-botella.jpg' },
    { id: 10, categoria: 'Cervezas Nacionales', nombre: 'Cuello Negro - Botella 1 litro', precio: 1800, imagen: 'images/cerveza-cuello-negro-botella.jpg' },
    { id: 11, categoria: 'Cervezas Nacionales', nombre: 'Báltica - Lata 473 ml', precio: 850, imagen: 'images/cerveza-baltica-lata.jpg' },
    { id: 12, categoria: 'Cervezas Nacionales', nombre: 'Báltica - Pack 6 latas', precio: 4500, imagen: 'images/cerveza-baltica-pack.jpg' },
    { id: 13, categoria: 'Cervezas Nacionales', nombre: 'Austral - Botella 330 ml', precio: 1300, imagen: 'images/cerveza-austral-botella.jpg' },
    { id: 14, categoria: 'Cervezas Nacionales', nombre: 'Austral - Pack 6 botellas', precio: 7500, imagen: 'images/cerveza-austral-pack.jpg' },
    
    // Cervezas Importadas
    { id: 15, categoria: 'Cervezas Importadas', nombre: 'Corona - Botella 355 ml', precio: 1100, imagen: 'images/cerveza-corona-botella.jpg' },
    { id: 16, categoria: 'Cervezas Importadas', nombre: 'Corona - Caja de 24 botellas', precio: 26000, imagen: 'images/cerveza-corona-caja.jpg' },
    { id: 17, categoria: 'Cervezas Importadas', nombre: 'Heineken - Botella 330 ml', precio: 1200, imagen: 'images/cerveza-heineken-botella.jpg' },
    { id: 18, categoria: 'Cervezas Importadas', nombre: 'Heineken - Pack 6 botellas', precio: 6900, imagen: 'images/cerveza-heineken-pack.jpg' },
    { id: 19, categoria: 'Cervezas Importadas', nombre: 'Budweiser - Lata 473 ml', precio: 1000, imagen: 'images/cerveza-budweiser-lata.jpg' },
    { id: 20, categoria: 'Cervezas Importadas', nombre: 'Budweiser - Caja 24 latas', precio: 21000, imagen: 'images/cerveza-budweiser-caja.jpg' },
    { id: 21, categoria: 'Cervezas Importadas', nombre: 'Stella Artois - Botella 330 ml', precio: 1300, imagen: 'images/cerveza-stella-artois-botella.jpg' },
    { id: 22, categoria: 'Cervezas Importadas', nombre: 'Stella Artois - Pack 6 botellas', precio: 7200, imagen: 'images/cerveza-stella-artois-pack.jpg' },
    { id: 23, categoria: 'Cervezas Importadas', nombre: 'Quilmes - Botella 340 ml', precio: 900, imagen: 'images/cerveza-quilmes-botella.jpg' },
    { id: 24, categoria: 'Cervezas Importadas', nombre: 'Quilmes - Caja 12 botellas', precio: 9800, imagen: 'images/cerveza-quilmes-caja.jpg' },
    { id: 25, categoria: 'Cervezas Importadas', nombre: 'Cusqueña - Botella 330 ml', precio: 1500, imagen: 'images/cerveza-cusquena-botella.jpg' },
    { id: 26, categoria: 'Cervezas Importadas', nombre: 'Cusqueña - Caja 12 botellas', precio: 15000, imagen: 'images/cerveza-cusquena-caja.jpg' },
    { id: 27, categoria: 'Cervezas Importadas', nombre: 'Michelob Ultra - Lata 355 ml', precio: 1200, imagen: 'images/cerveza-michelob-ultra-lata.jpg' },
    { id: 28, categoria: 'Cervezas Importadas', nombre: 'Michelob Ultra - Caja 12 latas', precio: 13800, imagen: 'images/cerveza-michelob-ultra-caja.jpg' },

    // Destilados: Pisco
    { id: 29, categoria: 'Pisco', nombre: 'Pisco Mistral 35º - Botella 750 ml', precio: 6500, imagen: 'images/pisco-mistral.jpg' },
    { id: 30, categoria: 'Pisco', nombre: 'Pisco Capel 35º - Botella 1 litro', precio: 5200, imagen: 'images/pisco-capel.jpg' },
    { id: 31, categoria: 'Pisco', nombre: 'Pisco Alto del Carmen 40º - Botella 1 litro', precio: 6800, imagen: 'images/pisco-alto-del-carmen.jpg' },
    { id: 32, categoria: 'Pisco', nombre: 'Pisco Horcón Quemado - Botella 750 ml', precio: 9000, imagen: 'images/pisco-horcon-quemado.jpg' },
    
    // Destilados: Whisky
    { id: 33, categoria: 'Whisky', nombre: 'Whisky Johnnie Walker Red Label - Botella 750 ml', precio: 14000, imagen: 'images/whisky-johnnie-walker.jpg' },
    { id: 34, categoria: 'Whisky', nombre: 'Whisky Ballantine\'s Finest - Botella 750 ml', precio: 13000, imagen: 'images/whisky-ballantines.jpg' },
    { id: 35, categoria: 'Whisky', nombre: 'Whisky Chivas Regal 12 años - Botella 750 ml', precio: 25000, imagen: 'images/whisky-chivas.jpg' },
    { id: 36, categoria: 'Whisky', nombre: 'Whisky Jack Daniel\'s - Botella 700 ml', precio: 19000, imagen: 'images/whisky-jack-daniels.jpg' },
    { id: 37, categoria: 'Whisky', nombre: 'Whisky Glenfiddich 12 años - Botella 700 ml', precio: 40000, imagen: 'images/whisky-glenfiddich.jpg' },
    
    // Más productos...
];

// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para renderizar los productos en el HTML
function mostrarProductos() {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        
        productContainer.appendChild(card);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Función para eliminar un producto específico del carrito
function eliminarProducto(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

// Función para vaciar el carrito completo
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para simular el pago del carrito
function pagarCarrito() {
    if (carrito.length > 0) {
        alert(`Has pagado $${calcularTotalCarrito()} por los productos. ¡Gracias por tu compra!`);
        vaciarCarrito();
    } else {
        alert('El carrito está vacío.');
    }
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = carrito.length;

    // Mostrar los detalles del carrito en el modal o en un lugar visible
    const cartDetails = carrito.map(item => `
        ${item.nombre} - $${item.precio} 
        <button onclick="eliminarProducto(${item.id})">Eliminar</button>
    `).join('<br>');

    document.getElementById('cartModal').innerHTML = `
        <h3>Tu Carrito:</h3>
        <div>${cartDetails}</div>
        <p>Total: $${calcularTotalCarrito()}</p>
        <button onclick="vaciarCarrito()">Vaciar Carrito</button>
        <button onclick="pagarCarrito()">Pagar</button>
    `;

    guardarCarritoEnJSON();
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnJSON() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem('carrito', carritoJSON);
}

// Función para ver el carrito y mostrarlo en un modal
document.getElementById('viewCart').addEventListener('click', () => {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block'; // Mostrar el modal del carrito
});

// Inicialización
mostrarProductos();
actualizarCarrito();


