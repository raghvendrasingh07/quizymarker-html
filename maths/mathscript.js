window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "What is value of tan 45<sup>&deg</sup>?",
        answer: "1",
        options: [
            "0",
            "1",
            "1/&#8730 3",
            "&#8730 3"
        ]
    },
    {
        id: 2,
        question: "If |a| = &#8730 2, |b| = &#8730 3 and |a+b| = &#8730 6, then what is |a-b| equal to?",
        answer: "2",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        id: 3,
        question: "If A = { 1,3,5,7 }, then what is cardinality of the power set P(A)?",
        answer: "16",
        options: [
            "8",
            "15",
            "16",
            "17"
        ]
    },
    {
        id: 4,
        question: "Which of the following is a measure of dispersion?",
        answer: "Standard deviation",
        options: [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ]
    },
    {
        id: 5,
        question: "What is log<sub>81</sub> 243 equal to?",
        answer: "1.25",
        options: [
            "0.25",
            "1.25",
            "1.5",
            "3"
        ]
    },
    {
        id: 6,
        question: "If A is a square matrix of order 3 with |A| &#8800 0, then which one of the following is correct?",
        answer: "|adj A| = |A|<sup>2</sup>",
        options: [
            "|adj A| = |A|",
            "|adj A| = |A|<sup>2</sup>",
            "|adj A| = |A|&sup3",
            "|adj A|&sup2 = |A|"
        ]
    },
    {
        id: 7,
        question: "Let A = { a,b,c,d } and B = { x,y,z }. What is the number of element in A &times B?",
        answer: "12",
        options: [
            "6",
            "7",
            "12",
            "64"
        ]
    },
    {
        id: 8,
        question: "If C(28, 2r) = C(28, 2r-4), then what is r equal to?",
        answer: "8",
        options: [
            "7",
            "8",
            "12",
            "16"
        ]
    },
    {
        id: 9,
        question: "What is seventh term of the sequence 0,3,8,15,24,....?",
        answer: "48",
        options: [
            "63",
            "48",
            "35",
            "33"
        ]
    },
    {
        id: 10,
        question: "What is derivative of sin(sin x)?",
        answer: "cos(sin x).cos x",
        options: [
            "cos(cos x)",
            "cos(sin x)",
            "cos(sin x).cos x",
            "cos(cos x).cos x"
        ]
    },
    {
        id: 11,
        question: "The number 83 is written in the binary system as",
        answer: "1010011",
        options: [
            "100110",
            "101101",
            "1010011",
            "110110"
        ]
    },
    {
        id: 12,
        question: "What is &#8721 C(n, r) equal to?",
        answer: "2<sup>n</sup>",
        options: [
            "2<sup>n</sup> - 1",
            "n",
            "n!",
            "2<sup>n</sup>"
        ]
    },
    {
        id: 13,
        question: "How many real roots does the quadratic equation &#402 (x) = x<sup>2</sup> + 3|x| + 2 = 0 have?",
        answer: "No real root",
        options: [
            "One",
            "Two",
            "Four",
            "No real root"
        ]
    },
    {
        id: 14,
        question: "The variance of 20 observations is 5. If each observation is multiplied by 2, then what is the new variance of resulting observations?",
        answer: "20",
        options: [
            "5",
            "10",
            "20",
            "40"
        ]
    },
    {
        id: 15,
        question: "How many 4 digit number can be formed by using the digit 1 to 9, if repeation of digits is not allowed?",
        answer: "3024",
        options: [
            "2287",
            "3024",
            "554",
            "1403"
        ]
    },
    {
        id: 16,
        question: "How many words can be formed using the word DAUGHTER, if all the vowels occur together?",
        answer: "4320",
        options: [
            "3902",
            "4319",
            "4320",
            "2987"
        ]
    }
];

var question_count = 0;
var point = 0;
var wrong = 0;

function next() {
    var user_answer = document.querySelector('li.activeOption').innerHTML;
    
    //check answer is correct or not?
    if (user_answer == questions[question_count].answer) {
        point += 4;
        sessionStorage.setItem("points", point);
        sessionStorage.setItem("wrong", wrong);
    } else {
        point -= 1;
        sessionStorage.setItem("points", point);
        wrong += 1;
        sessionStorage.setItem("wrong", wrong);
    }

    if (question_count == questions.length - 1) {
        location.href = "score.html";
        return;
    }

    question_count++;
    show(question_count);
}

function show(count) {
    var question = document.getElementById('questions');

    question.innerHTML = '<h5 class="h5-responsive mb-3">' + "Q " +(question_count+1) + ". " + questions[count].question + '</h5>' +
        '<ul class="list-group">' +
        '<li class="list-group-item mb-3">' + questions[count].options[0] + '</li>' +
        '<li class="list-group-item mb-3">' + questions[count].options[1] + '</li>' +
        '<li class="list-group-item mb-3">' + questions[count].options[2] + '</li>' +
        '<li class="list-group-item">' + questions[count].options[3] + '</li>' +
        '</ul>';
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll('li.list-group-item');

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("activeOption")) {
                    option[j].classList.remove("activeOption");
                }
            }
            option[i].classList.add("activeOption");
        }
    }
}

