// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable keyboard shortcuts that might allow navigation away from the page
window.addEventListener('keydown', function (e) {
    Selection = null;
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'a' || e.key === 't'))
        e.preventDefault();
    if (e.key === 'F12' || e.key === 'Esc' || e.key === 'F11')
        e.preventDefault();
});

// When the user loses focus
let a = 0;
const tab = document.querySelector('.tab');
window.addEventListener("blur", () => {
    a++;
    if (a > 2) {
        submitTest();
    }
    let b = 2 - a;
    tab.innerHTML = `The tab switch count = ${a} \n The remaining tabs to close = ${b}`;
    // alert(`Tab switch count = ${a}`)
});

// Auto submit after tab switching
function submitTest() {
    alert("Your test is submitted now")
    window.location.href = "test_analysis.html";
}

const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        // If no answer is selected
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            window.location.href="test_analysis.html";
        }

    }
});

