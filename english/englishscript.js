window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "Synonyms(sentence in Capital letter) <br><br> One must live life with DIGNITY.",
        answer: "Honour",
        options: [
            "Nobility",
            "Eminence",
            "Honour",
            "Rank"
        ]
    },
    {
        id: 2,
        question: "Synonyms(sentence in Capital letter) <br><br> Our age is preeminently an AGE of Science",
        answer: "Era",
        options: [
            "Era",
            "Date",
            "Generation",
            "Moment"
        ]
    },
    {
        id: 3,
        question: "Antonyms(sentence in Capital letter) <br><br> The teacher INSERTED another picture to illustrate the point.",
        answer: "Added",
        options: [
            "Deducted",
            "Added",
            "Removed",
            "Reclined"
        ]
    },
    {
        id: 4,
        question: "Antonyms(sentence in Capital letter) <br><br> The baby has a very DELICATE body.",
        answer: "Strong",
        options: [
            "Crude",
            "Strong",
            "Hard",
            "Bony"
        ]
    },
    {
        id: 5,
        question: "he had (P) 'no' to him (Q) such a winning smile (R) that I could not say (S) <br><br> The correct sequence should be",
        answer: "P R S Q",
        options: [
            " Q P R S",
            "R P Q S",
            "S P Q R",
            "P R S Q"
        ]
    },
    {
        id: 6,
        question: "The child burned down (P) the house (Q) by playing (R) with matches (S) <br><br> The correct sequence should be",
        answer: "R S P Q",
        options: [
            "R S P Q",
            "Q S P R",
            "R P S Q",
            "Q P S R"
        ]
    },
    {
        id: 7,
        question: "to solve it (P) than (Q) it is easier (R) to talk about a problem (S) <br><br> The correct sequence should be",
        answer: "R S Q P",
        options: [
            "R P Q S",
            "Q P S R",
            "P Q S R",
            "R S Q P"
        ]
    },
    {
        id: 8,
        question: "Antonyms(sentence in Capital letter) <br><br> My mother has been working hard for the last two weeks and she feels RUN DOWN.",
        answer: "Energetic",
        options: [
            "Energetic",
            "Cold",
            "Emotional",
            "Morbid"
        ]
    },
    {
        id: 9,
        question: "Synonyms(sentence in Capital letter) <br><br> He is very OBLIGING by nature.",
        answer: "Nice",
        options: [
            "Helpful",
            "Nice",
            "Thankful",
            "Compelling"
        ]
    },
    {
        id: 10,
        question: "Find errors in which parts <br><br> He told (A) that his brother (B) was singer (C) No error (D).",
        answer: "C",
        options: [
            "A",
            "B",
            "C",
            "D"
        ]
    },
    {
        id: 11,
        question: "Find errors in which parts <br><br> I have met him (A) on Monday last (B) and had a long discussion (C) No error (D).",
        answer: "A",
        options: [
            "A",
            "B",
            "C",
            "D"
        ]
    },
    {
        id: 12,
        question: "Idioms and Phrase <br><br> A leopard can't change his spots.",
        answer: "You cannot change who you are.",
        options: [
            "A very mild punishment.",
            "You cannot change who you are.",
            "Anything that common and easy to get.",
            "Rushed and short on time."
        ]
    },
    {
        id: 13,
        question: "Idioms and Phrase <br><br> All in the same boat.",
        answer: "When everyone is facing the same problem.",
        options: [
            "Anything floating above water.",
            "Something that is not good.",
            "To have dispute with someone.",
            "When everyone is facing the same problem."
        ]
    },
    {
        id: 14,
        question: "Synonyms(sentence in Capital letter) <br><br> His information is AUTHENTIC.",
        answer: "Genuine",
        options: [
            "Real",
            "Reliable",
            "Genuine",
            "Believable"
        ]
    },
    {
        id: 15,
        question: "there is only one way (P) the world can be (Q) in which (R) made safe from the war (S) <br><br> The correct sequence should be",
        answer: "PRQS",
        options: [
            "RQSP",
            "PRQS",
            "PQSR",
            "SPRQ"
        ]
    },
    {
        id: 16,
        question: "Find errors in which parts <br><br> It is time (A) we decide not to play cricket (B) for the next two years (C) No errors (D).",
        answer: "B",
        options: [
            "A",
            "B",
            "C",
            "D"
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
