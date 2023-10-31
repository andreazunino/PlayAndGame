// preguntados.js

const questions = [
    {
        question: "¿En qué año se lanzó el primer juego de Mario Bros?",
        options: ["1983", "1985", "1987", "1990"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el nombre del comecocos en inglés?",
        options: ["Pac-Man", "Ghost Eater", "Dots Eater", "Hungry Hero"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál de estos juegos fue lanzado primero?",
        options: ["Tetris", "Super Mario Bros", "The Legend of Zelda", "Donkey Kong"],
        correctAnswer: 0
    },
    {
        question: "¿Qué juego popular introdujo por primera vez a los hermanos Mario?",
        options: ["Donkey Kong", "Super Mario Bros", "Pac-Man", "Tetris"],
        correctAnswer: 0
    },
    {
        question: "¿Qué juego popular involucra controlar una serpiente que crece a medida que come comida?",
        options: ["Snake", "Slither.io", "Worms", "Serpent"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el objeto principal que el jugador debe recolectar en el juego Pac-Man?",
        options: ["Frutas", "Monedas", "Pildoras", "Fantasmas"],
        correctAnswer: 2
    },
];



let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const optionButtons = document.querySelectorAll('.option-button');
const nextButton = document.getElementById('next-button');

startGame();

function startGame() {
    resetGame();
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            resetGame(); // Reinicia el juego para la nueva pregunta
        } else {
            alert('Fin del juego');
        }
    });
}

function resetGame() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    feedbackElement.innerText = ''; // Limpiar el mensaje de retroalimentación
    enableButtons(); // Habilitar los botones de opción
    showOptions(currentQuestion.options);
}

function showOptions(options) {
    optionsElement.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', selectAnswer);
        optionsElement.appendChild(button);
    });
}

function enableButtons() {
    optionButtons.forEach(button => {
        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctAnswer];
    
    if (correct) {
        feedbackElement.innerText = '¡Que bien! La respuesta es Correcta';
    } else {
        feedbackElement.innerText = '¡Ay no! Tu respuesta no es correcta, tenias que contestar: ' + questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctAnswer];
    }

    disableButtons(); // Deshabilitar los botones después de seleccionar una respuesta
    nextButton.classList.remove('hide');
}

function disableButtons() {
    optionButtons.forEach(button => {
        button.removeEventListener('click', selectAnswer);
    });
}

