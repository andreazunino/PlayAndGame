// tateti.js

const CELDAS = 9;
const X = 'X';
const O = 'O';
let jugadorActual = X;

const celdas = document.querySelectorAll('.cell');

celdas.forEach(celda => {
    celda.addEventListener('click', manejarClic, { once: true });
});

function manejarClic(evento) {
    const celdaSeleccionada = evento.target;
    marcarCelda(celdaSeleccionada, jugadorActual);

    if (verificarGanador(jugadorActual)) {
        mostrarMensaje(`¡El jugador ${jugadorActual} gana!`);
    } else if (esTableroCompleto()) {
        mostrarMensaje('¡Empate!');
    } else {
        cambiarJugador();
        if (jugadorActual === O) {
            realizarMovimientoComputadora();
        }
    }
}

function marcarCelda(celda, jugador) {
    celda.textContent = jugador;
}

function cambiarJugador() {
    jugadorActual = jugadorActual === X ? O : X;
}

function verificarGanador(jugador) {
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return combinacionesGanadoras.some(comb => {
        return comb.every(index => celdas[index].textContent === jugador);
    });
}

function esTableroCompleto() {
    return [...celdas].every(celda => celda.textContent !== '');
}

function mostrarMensaje(mensaje) {
    setTimeout(() => {
        alert(mensaje);
        reiniciarJuego();
    }, 100);
}

function reiniciarJuego() {
    celdas.forEach(celda => {
        celda.textContent = '';
    });
    jugadorActual = X;
    if (jugadorActual === O) {
        realizarMovimientoComputadora();
    }
}

function realizarMovimientoComputadora() {
    const mejorMovimiento = minimax(celdas, O).indice;
    marcarCelda(celdas[mejorMovimiento], O);
    if (verificarGanador(O)) {
        mostrarMensaje('¡La computadora gana!');
    } else if (esTableroCompleto()) {
        mostrarMensaje('¡Empate!');
    } else {
        cambiarJugador();
    }
}

function minimax(celdas, jugador) {
    const jugadores = [O, X];
    const oponente = jugadores.find(j => j !== jugador);
    
    if (verificarGanador(oponente)) {
        return { puntaje: -1 };
    } else if (esTableroCompleto()) {
        return { puntaje: 0 };
    }

    const movimientos = [];
    celdas.forEach((celda, indice) => {
        if (celda.textContent === '') {
            const movimiento = {};
            movimiento.indice = indice;
            celda.textContent = jugador;
            if (jugador === O) {
                movimiento.puntaje = minimax(celdas, X).puntaje;
            } else {
                movimiento.puntaje = minimax(celdas, O).puntaje;
            }
            celda.textContent = '';
            movimientos.push(movimiento);
        }
    });

    const mejorMovimiento = (jugador === O ? 
        movimientos.reduce((mejor, actual) => (actual.puntaje > mejor.puntaje ? actual : mejor), movimientos[0]) :
        movimientos.reduce((mejor, actual) => (actual.puntaje < mejor.puntaje ? actual : mejor), movimientos[0]));

    return mejorMovimiento;
}

