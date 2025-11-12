const botonesPago = document.querySelectorAll('.metodo');
const seccionTarjeta = document.querySelector('.pago-tarjeta');

botonesPago.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesPago.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        if (boton.dataset.metodo === 'tarjeta') {
            seccionTarjeta.style.display = 'block';
        } else {
            seccionTarjeta.style.display = 'none';
        }
    });
});

function simularEnvio(event) {
    event.preventDefault();
    document.getElementById('resultadoSimulacion').textContent =
        "Formulario enviado correctamente, eventualmente se le responderá en su correo";
    document.getElementById('formSimulacion').reset();
    botonesPago.forEach(b => b.classList.remove('activo'));
    seccionTarjeta.style.display = 'none';
}

