// piedraPapelTijera.js
function iniciarPiedraPapelTijera() {
    // Arreglo de opciones del juego
    const opciones = ['piedra', 'papel', 'tijera'];

    // Generar una opción aleatoria para la computadora
    const computadora = opciones[Math.floor(Math.random() * 3)];

    // Obtener la opción del jugador haciendo clic en el botón
    const jugador = prompt('¿Elegis piedra, papel o tijera?:').toLowerCase();

    // Verificar el resultado del juego
    let resultado = '';
    if (opciones.includes(jugador)) {
        if (jugador === computadora) {
            resultado = '¡Empatamos!';
        } else if ((jugador === 'piedra' && computadora === 'tijera') ||
                   (jugador === 'papel' && computadora === 'piedra') ||
                   (jugador === 'tijera' && computadora === 'papel')) {
            resultado = '¡Que bien, ganaste!';
        } else {
            resultado = '¡Perdiste! La próxima será.';
        }
    } else {
        resultado = 'Opción inválida. Por favor, elija piedra, papel o tijera.';
    }

    // Mostrar el resultado en el contenedor del resultado en el HTML
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}
