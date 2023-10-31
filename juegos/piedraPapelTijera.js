document.addEventListener("DOMContentLoaded", function() {
    const opciones = ["piedra", "papel", "tijera"];

    const piedraButton = document.getElementById("piedra");
    const papelButton = document.getElementById("papel");
    const tijeraButton = document.getElementById("tijera");
    const resultadoDiv = document.getElementById("resultadoDiv");

    piedraButton.addEventListener("click", () => jugar("piedra"));
    papelButton.addEventListener("click", () => jugar("papel"));
    tijeraButton.addEventListener("click", () => jugar("tijera"));

    function jugar(opcionUsuario) {
        const opcionComputadora = opciones[Math.floor(Math.random() * 3)];
        const resultado = obtenerResultado(opcionUsuario, opcionComputadora);
        mostrarResultado(`Elegiste ${opcionUsuario} y Play And Game eligió ${opcionComputadora}. ${resultado}`);
    }

    function obtenerResultado(usuario, computadora) {
        if (usuario === computadora) {
            return "¡Es un empate!";
        } else if (
            (usuario === "piedra" && computadora === "tijera") ||
            (usuario === "papel" && computadora === "piedra") ||
            (usuario === "tijera" && computadora === "papel")
        ) {
            return "¡Ganaste!";
        } else {
            return "¡La computadora gana!";
        }
    }
    
    function mostrarResultado(mensaje) {
        resultadoDiv.textContent = mensaje;
    }
}
    
   
);
