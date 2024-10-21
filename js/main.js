// Productos organizados por categorías, agregando la ruta de la imagen a cada uno
    const productos = [
        { id: 1, categoria: 'Cervezas', nombre: 'CERVEZA ARTESANAL TOROBAYO KUNSTMANN 330 ML', precio: 1800, imagen: 'images/cerveza-torobayo-330ml.jpg' },
        { id: 2, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL CALAFATE BOTELLA 330 ML', precio: 1900, imagen: 'images/cerveza-austral-calafate-330ml.jpg' },
        { id: 3, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL CALAFATE BOTELLA 500 ML', precio: 2200, imagen: 'images/cerveza-austral-calafate-500ml.jpg' },
        { id: 4, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL CALAFATE BOTELLA PACK 4 X 330 ML', precio: 7500, imagen: 'images/cerveza-austral-calafate-pack.jpg' },
        { id: 5, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL LAGER BOTELLA 330 ML', precio: 1800, imagen: 'images/cerveza-austral-lager-330ml.jpg' },
        { id: 6, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL LONG NECK PACK X4 330 ML', precio: 7500, imagen: 'images/cerveza-austral-longneck-pack.jpg' },
        { id: 7, categoria: 'Cervezas', nombre: 'CERVEZA AUSTRAL TORRES DEL PAINE 5.0° - BOTELLA 500 ML', precio: 2200, imagen: 'images/cerveza-austral-torres.jpg' },
        { id: 8, categoria: 'Cervezas', nombre: 'CERVEZA BECKER CLASSIC LAGER LATA 473 ML', precio: 900, imagen: 'images/cerveza-becker-classic.jpg' },
        { id: 9, categoria: 'Cervezas', nombre: 'CERVEZA BECKER GOLDEN LATA 473 ML', precio: 1000, imagen: 'images/cerveza-becker-golden.jpg' },
        { id: 10, categoria: 'Cervezas', nombre: 'CERVEZA BUDWEISER BOTELLA 330 CC', precio: 1200, imagen: 'images/cerveza-budweiser-botella.jpg' },
        { id: 11, categoria: 'Cervezas', nombre: 'CERVEZA BUDWEISER LATON 710 ML', precio: 1200, imagen: 'images/cerveza-budweiser-laton.jpg' },
        { id: 12, categoria: 'Cervezas', nombre: 'CERVEZA COORS BOTELLA 355CC', precio: 1200, imagen: 'images/cerveza-coors-botella.jpg' },
        { id: 13, categoria: 'Cervezas', nombre: 'CERVEZA COORS BOTELLA PACK 6 X 355 ML', precio: 6500, imagen: 'images/cerveza-coors-pack.jpg' },
        { id: 14, categoria: 'Cervezas', nombre: 'CERVEZA COORS MALETA 12 LATAS 350ML', precio: 12000, imagen: 'images/cerveza-coors-maleta.jpg' },
        { id: 15, categoria: 'Cervezas', nombre: 'CERVEZA COORS ORIGINAL LATA 710CC', precio: 1300, imagen: 'images/cerveza-coors-original.jpg' },
        { id: 16, categoria: 'Cervezas', nombre: 'CERVEZA CORONA BOTELLIN 330 ML', precio: 1200, imagen: 'images/cerveza-corona-botellin.jpg' },
        { id: 17, categoria: 'Cervezas', nombre: 'CERVEZA CORONA PACK 6 UN 330 ML', precio: 6200, imagen: 'images/cerveza-corona-pack.jpg' },
        { id: 18, categoria: 'Cervezas', nombre: 'CERVEZA CRISTAL LATA PACK 6 X 470 ML', precio: 5700, imagen: 'images/cerveza-cristal-pack.jpg' },
        { id: 19, categoria: 'Cervezas', nombre: 'CERVEZA CRISTAL RADLER SIN ALCOHOL, 350 ML', precio: 1000, imagen: 'images/cerveza-cristal-radler.jpg' },
        { id: 20, categoria: 'Cervezas', nombre: 'CERVEZA CRISTAL RETORNABLE 1,2 LT', precio: 1500, imagen: 'images/cerveza-cristal-retornable.jpg' },
        { id: 21, categoria: 'Cervezas', nombre: 'CERVEZA CRISTAL, LATA 470CC SUELTA', precio: 1000, imagen: 'images/cerveza-cristal-lata.jpg' },
        { id: 22, categoria: 'Cervezas', nombre: 'CERVEZA ESCUDO LAGER 470 ML', precio: 1000, imagen: 'images/cerveza-escudo-lager.jpg' },
        { id: 23, categoria: 'Cervezas', nombre: 'CERVEZA ESCUDO LAGER RETORNABLE 1,2 LT', precio: 1500, imagen: 'images/cerveza-escudo-retornable.jpg' },
        { id: 24, categoria: 'Cervezas', nombre: 'CERVEZA ESCUDO LATA PACK 6 X 470 ML', precio: 5700, imagen: 'images/cerveza-escudo-pack.jpg' },
        { id: 25, categoria: 'Cervezas', nombre: 'CERVEZA ESCUDO SILVER LATON 710 ML', precio: 1000, imagen: 'images/cerveza-escudo-silver.jpg' },
        { id: 26, categoria: 'Cervezas', nombre: 'CERVEZA HEINEKEN BOTELLA PACK 6 X 330 ML', precio: 6900, imagen: 'images/cerveza-heineken-pack.jpg' },
        { id: 27, categoria: 'Cervezas', nombre: 'CERVEZA HEINEKEN LAGER 470 ML', precio: 1200, imagen: 'images/cerveza-heineken-lager.jpg' },
        { id: 28, categoria: 'Cervezas', nombre: 'CERVEZA HEINEKEN LATA 470 ML X 6', precio: 6600, imagen: 'images/cerveza-heineken-lata-pack.jpg' },
        { id: 29, categoria: 'Cervezas', nombre: 'CERVEZA HEINEKEN, 330 ML', precio: 1200, imagen: 'images/cerveza-heineken.jpg' },
        { id: 30, categoria: 'Cervezas', nombre: 'CERVEZA KUNSTMANN TOROBAYO 330 ML X 12 U', precio: 12500, imagen: 'images/cerveza-kunstmann-torobayo-12u.jpg' },
        { id: 31, categoria: 'Cervezas', nombre: 'CERVEZA KUNSTMANN TOROBAYO BOTELLA 500ML', precio: 2200, imagen: 'images/cerveza-kunstmann-torobayo-500ml.jpg' },
        { id: 32, categoria: 'Cervezas', nombre: 'CERVEZA KUNSTMANN TOROBAYO BOTELLA PACK 6 X 330 ML', precio: 9300, imagen: 'images/cerveza-kunstmann-torobayo-pack.jpg' },
        { id: 33, categoria: 'Cervezas', nombre: 'CERVEZA KUNSTMANN TOROBAYO LATA 470CC', precio: 1000, imagen: 'images/cerveza-kunstmann-torobayo-lata.jpg' },
        { id: 34, categoria: 'Cervezas', nombre: 'CERVEZA LEMON STONES LATA 470 ML', precio: 1200, imagen: 'images/cerveza-lemon-stones-lata.jpg' },
        { id: 35, categoria: 'Cervezas', nombre: 'CERVEZA LEMON STONES, BOTELLA 1.5 L', precio: 2600, imagen: 'images/cerveza-lemon-stones-botella.jpg' },
        { id: 36, categoria: 'Cervezas', nombre: 'CERVEZA MARACUYÁ STONES 2.5º 6 PK LATA 350ML', precio: 6300, imagen: 'images/cerveza-maracuya-stones-pack.jpg' },
        { id: 37, categoria: 'Cervezas', nombre: 'CERVEZA MILLER BOTELLIN 355ML', precio: 1300, imagen: 'images/cerveza-miller-botellin.jpg' },
        { id: 38, categoria: 'Cervezas', nombre: 'CERVEZA PATAGONIA RED LAGER 470 ML', precio: 1000, imagen: 'images/cerveza-patagonia-red.jpg' },
        { id: 39, categoria: 'Cervezas', nombre: 'CERVEZA QUILMES UNIDAD 473CC', precio: 1100, imagen: 'images/cerveza-quilmes.jpg' },
        { id: 40, categoria: 'Cervezas', nombre: 'CERVEZA ROYAL GUARD 650CC', precio: 1300, imagen: 'images/cerveza-royal-guard-650.jpg' },
        { id: 41, categoria: 'Cervezas', nombre: 'CERVEZA ROYAL GUARD LATA 470ML CCU', precio: 1100, imagen: 'images/cerveza-royal-guard-lata.jpg' },
        { id: 42, categoria: 'Cervezas', nombre: 'CERVEZA ROYAL GUARD LATA PACK 6 X 470 ML', precio: 6900, imagen: 'images/cerveza-royal-guard-pack.jpg' },
        { id: 43, categoria: 'Cervezas', nombre: 'CERVEZA ROYAL GUARD PREMIUN LAGER BOTELLA PACK 6 X 355 ML', precio: 6300, imagen: 'images/cerveza-royal-guard-premium.jpg' },
        { id: 44, categoria: 'Cervezas', nombre: 'CERVEZA ROYAL GUARD, 355 ML', precio: 1200, imagen: 'images/cerveza-royal-guard-botella.jpg' },
        { id: 45, categoria: 'Cervezas', nombre: 'CERVEZA RUBIA CUSQUEÑA GOLDEN LAGER 330 CC', precio: 1200, imagen: 'images/cerveza-cusquena-golden.jpg' },
        { id: 46, categoria: 'Cervezas', nombre: 'CERVEZA SOL BOTELLA 355 ML', precio: 1200, imagen: 'images/cerveza-sol-botella.jpg' },
        { id: 47, categoria: 'Cervezas', nombre: 'CERVEZA SOL BOTELLA 710CC', precio: 1300, imagen: 'images/cerveza-sol-lata.jpg' },
        { id: 48, categoria: 'Cervezas', nombre: 'CERVEZA SOL SIX PACK 330ML', precio: 1300, imagen: 'images/cerveza-sol-sixpack.jpg' },
        { id: 49, categoria: 'Cervezas', nombre: 'CERVEZA STELLA ARTOIS 335ML', precio: 6600, imagen: 'images/cerveza-stella-artois.jpg' },
        { id: 50, categoria: 'Cervezas', nombre: 'CERVEZA STELLA ARTOIS BOTELLA PACK 6 X 330 ML', precio: 1200, imagen: 'images/cerveza-stella-artois-pack.jpg' },
        { id: 51, categoria: 'Cervezas', nombre: 'CERVEZA VOLCANES CHOCOLATE NARANJA 650 ML', precio: 6600, imagen: 'images/cerveza-volcanes-chocolate.jpg' },
        { id: 52, categoria: 'Cervezas', nombre: 'CERVEZA VOLCANES STRONGLAGER', precio: 1300, imagen: 'images/cerveza-volcanes-stronglager.jpg' }
    ];
    // Más productos...


// Gestión de usuarios
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo')) || null;

// Carrito de compras: Solo se accede si el usuario ha iniciado sesión
let carrito = usuarioActivo ? usuarioActivo.carrito : [];

// Función para mostrar el formulario de registro
function mostrarRegistro() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none'; // Ocultar el formulario de login
}

// Función para mostrar el formulario de inicio de sesión
function mostrarLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none'; // Ocultar el formulario de registro
}

// Función para cerrar formularios emergentes
function cerrarFormulario() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
}

// Función para registrar un nuevo usuario
function registrarUsuario(nombreUsuario, clave) {
    const usuarioExistente = usuarios.find(user => user.nombreUsuario === nombreUsuario);

    if (usuarioExistente) {
        alert('El nombre de usuario ya está en uso. Elige otro.');
    } else {
        const nuevoUsuario = {
            nombreUsuario,
            clave,
            carrito: [] // Carrito inicial vacío para cada usuario nuevo
        };
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
        cerrarFormulario();
    }
}

// Función para iniciar sesión
function iniciarSesion(nombreUsuario, clave) {
    const usuario = usuarios.find(user => user.nombreUsuario === nombreUsuario && user.clave === clave);

    if (usuario) {
        usuarioActivo = usuario;
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));
        carrito = usuarioActivo.carrito;
        actualizarCarrito();
        alert(`¡Bienvenido, ${nombreUsuario}!`);
        cerrarFormulario();
    } else {
        alert('Nombre de usuario o clave incorrectos.');
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    usuarioActivo = null;
    carrito = [];
    localStorage.removeItem('usuarioActivo');
    actualizarCarrito();
    alert('Has cerrado sesión.');
}


// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    if (!usuarioActivo) {
        alert('Debes iniciar sesión para agregar productos al carrito.');
        return;
    }
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    usuarioActivo.carrito = carrito;
    actualizarCarrito();
}

// Función para eliminar un producto específico del carrito
function eliminarProducto(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    usuarioActivo.carrito = carrito;
    actualizarCarrito();
}

// Función para vaciar el carrito completo
function vaciarCarrito() {
    carrito = [];
    usuarioActivo.carrito = carrito;
    actualizarCarrito();
}

// Función para simular el pago del carrito
function pagarCarrito() {
    if (!usuarioActivo) {
        alert('Debes iniciar sesión para realizar el pago.');
        return;
    }
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

// Función para guardar el carrito del usuario activo en localStorage
function guardarCarritoEnJSON() {
    if (usuarioActivo) {
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioActivo));
    }
}
// Función para abrir el carrito
function abrirCarrito() {
    if (!usuarioActivo) {
        alert('Debes iniciar sesión para ver el carrito.');
        return;
    }
    document.getElementById('cartModal').style.display = 'block'; // Mostrar el modal del carrito
}

// Función para cerrar el carrito
function cerrarCarrito() {
    document.getElementById('cartModal').style.display = 'none'; // Ocultar el modal del carrito
}
// Añadimos el evento para abrir el carrito cuando se haga clic en "Ver Carrito"
document.getElementById('viewCart').addEventListener('click', abrirCarrito);

// Función para actualizar la vista del carrito (con botón para cerrar el modal)
function actualizarCarrito() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = carrito.length;

    // Mostrar los detalles del carrito en el modal
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
        <button onclick="cerrarCarrito()">Cerrar</button> <!-- Botón para cerrar -->
    `;

    guardarCarritoEnJSON();
}

// Inicialización
mostrarProductos();
actualizarCarrito();



// navbar
