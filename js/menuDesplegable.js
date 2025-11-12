const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abre o cierra el menú al hacer clic en el icono
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // evita que el clic cierre el menú inmediatamente
    menu.classList.toggle('active');
});

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});
