const start = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const totalScore = document.getElementById('score');
const scoreElement = document.getElementById('score-txt');


let shuffledQuestions, currentQuestionIndex
let score = 0;


start.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
} );

function startQuiz(){
    start.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    totalScore.innerText = 0;
    
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
       const button = document.createElement('button');
       button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
         (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === "true";
    if(correct) {
        score = score + 1;
        totalScore.innerText = score;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
    } else {
        start.innerText = 'restart'
        start.classList.remove('hide');
        
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
        
        
    } else {
        element.classList.add('wrong');
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}



const questions = [
    {
        question: 'Which one of these dinosaurs is capable of flight?',
        answers: [
            
            {text:'Pteranodon', correct: true},
            {text: 'Limusaurus', correct: false},
            {text: 'Magnapaulia', correct: false},
            {text: 'Planicoxa', correct: false}
        ],
        
    },
    {
        question: 'What period is known as the "Age of Dinosaurs"?',
        answers: [
            { text: 'Jurassic', correct: false },
            { text: 'Triassic', correct: false },
            { text: 'Cretaceous', correct: false },
            { text: 'Mesozoic', correct: true }
        ]
    },
    {
        question: 'Which dinosaur is known for having a long neck and tail and was one of the largest creatures to walk the earth?',
        answers: [
            { text: 'Tyrannosaurus rex', correct: false },
            { text: 'Brachiosaurus', correct: true },
            { text: 'Triceratops', correct: false },
            { text: 'Velociraptor', correct: false }
        ]
    },
    {
        question: 'What is the name of the dinosaur with three horns on its face?',
        answers: [
            { text: 'Stegosaurus', correct: false },
            { text: 'Triceratops', correct: true },
            { text: 'Ankylosaurus', correct: false },
            { text: 'Allosaurus', correct: false }
        ]
    },
    {
        question: 'Which carnivorous dinosaur was known as the "tyrant lizard king"?',
        answers: [
            { text: 'Spinosaurus', correct: false },
            { text: 'Tyrannosaurus rex', correct: true },
            { text: 'Giganotosaurus', correct: false },
            { text: 'Carnotaurus', correct: false }
        ]
    },
    {
        question: 'What type of diet did the Stegosaurus have?',
        answers: [
            { text: 'Carnivorous', correct: false },
            { text: 'Herbivorous', correct: true },
            { text: 'Omnivorous', correct: false },
            { text: 'Insectivorous', correct: false }
        ]
    },
    {
        question: 'Which dinosaur is famous for the large, bony plates along its back?',
        answers: [
            { text: 'Stegosaurus', correct: true },
            { text: 'Diplodocus', correct: false },
            { text: 'Apatosaurus', correct: false },
            { text: 'Iguanodon', correct: false }
        ]
    },
    {
        question: 'What does the name "Velociraptor" mean?',
        answers: [
            { text: 'Quick thief', correct: true },
            { text: 'Swift runner', correct: false },
            { text: 'Fast predator', correct: false },
            { text: 'Speedy hunter', correct: false }
        ]
    },
    {
        question: 'Which dinosaur had a large, sail-like structure on its back, thought to be used for temperature regulation?',
        answers: [
            { text: 'Spinosaurus', correct: true },
            { text: 'Baryonyx', correct: false },
            { text: 'Suchomimus', correct: false },
            { text: 'Carcharodontosaurus', correct: false }
        ]
    },
    {
        question: 'In which continent have most Tyrannosaurus rex fossils been found?',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: false },
            { text: 'North America', correct: true },
            { text: 'South America', correct: false }
        ]
    }
]