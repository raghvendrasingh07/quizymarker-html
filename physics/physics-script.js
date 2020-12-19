window.onload = function () {
  show(0);
};

let questions = [
  {
    id: 1,
    question: "What is SI Unit of Power?",
    answer: "Watt",
    options: ["Watt", "Joule", "Maxwell", "Henry"],
  },
  {
    id: 2,
    question: "What is SI Unit of Velocity?",
    answer: "meter per second",
    options: [
      "meter per second square",
      "kilogram",
      "meter per second",
      "Pascal",
    ],
  },
  {
    id: 3,
    question: "When X-rays are produced",
    answer: "heat is generated at the target",
    options: [
      "heat is generated at the target",
      "heat is absorbed at the target",
      "the temperature of the target remains constant",
      "brilliant light is seen at the target",
    ],
  },
  {
    id: 4,
    question: "Cathode rays are",
    answer: "negatively charged",
    options: [
      "electromagnetic wave",
      "positively charged",
      "negatively charged",
      "neutral",
    ],
  },
  {
    id: 5,
    question: "Microwave oven consumes less power due to",
    answer: "short wavelength of radiation",
    options: [
      "small frequency of radiation",
      "large frequency as well as wavelength of radiation",
      "small frequency as well as wavelength of radiation",
      "short wavelength of radiation",
    ],
  },
  {
    id: 6,
    question: "The radius of curvature of plane mirror",
    answer: "is zero",
    options: [
      "is zero",
      "is infinity",
      "can be anywhere between zero to infinity",
      "None of the above",
    ],
  },
  {
    id: 7,
    question:
      "Bats can ascertain distances, nature and size of the obstacle at night. This is possible by reflection of the emitted",
    answer: "ultrasonic wave from bat",
    options: [
      "ultrasonic wave from bat",
      "ultrasonic wave from the distant objects",
      "supersonic wave from bat",
      "supersonic wave from the distant objects",
    ],
  },
  {
    id: 8,
    question: "The electric charge stored in a device called",
    answer: "capacitor",
    options: ["inductor", "capacitor", "resistor", "transformer"],
  },
  {
    id: 9,
    question: "Which one the following is not electromagnetic in nature?",
    answer: "Cathode rays",
    options: ["Cathode rays", "X-rays", "Gamma rays", "Infrared rays"],
  },
  {
    id: 10,
    question: "The audible frequency range of human ear is",
    answer: "20Hz to 20000Hz",
    options: [
      "20Hz to 200Hz",
      "2Hz to 20Hz",
      "200Hz to 2000Hz",
      "20Hz to 20000Hz",
    ],
  },
  {
    id: 11,
    question: "Internet communication uses optical fibre cables because of",
    answer: "faster than light communication signals",
    options: [
      "low cost",
      "free from virus threat",
      "high data carrying capacity",
      "faster than light communication signals",
    ],
  },
  {
    id: 12,
    question: "Speed of light",
    answer: "3 X 10<sup>8</sup> m/sec",
    options: [
      "4 X 10<sup>10</sup> m/sec",
      "3.80 X 10<sup>8</sup> m/sec",
      "3 X 10<sup>8</sup> m/sec",
      "1500 Km/sec",
    ],
  },
  {
    id: 13,
    question: "The largest planet in the solar system",
    answer: "Jupiter",
    options: ["Earth", "Pluto", "Jupiter", "Saturn"],
  },
  {
    id: 14,
    question: "Heating a magnet will",
    answer: "weaken it",
    options: [
      "weaken it",
      "strenghten it",
      "reverse its polarity",
      "have no effect",
    ],
  },
  {
    id: 15,
    question:
      "Weber is the unit of magnetic flux in the following system of unit",
    answer: "SI",
    options: ["FPS", "CGS", "SI", "None of these"],
  },
  {
    id: 16,
    question: "Light travels slower in glass than in air because",
    answer: "refractive index of air is less than that of glass",
    options: [
      "refractive index of air is less than that of glass",
      "refractive index of air is greater than that of glass",
      "density of glass is greater than that of air",
      "density of glass is less than that of air",
    ],
  },
];

var question_count = 0;
var point = 0;
var wrong = 0;

function next() {
  var user_answer = document.querySelector("li.activeOption").innerHTML;

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
  var question = document.getElementById("questions");

  question.innerHTML =
    '<h5 class="h5-responsive mb-3">' +
    "Q " +
    (question_count + 1) +
    ". " +
    questions[count].question +
    "</h5>" +
    '<ul class="list-group">' +
    '<li class="list-group-item mb-3">' +
    questions[count].options[0] +
    "</li>" +
    '<li class="list-group-item mb-3">' +
    questions[count].options[1] +
    "</li>" +
    '<li class="list-group-item mb-3">' +
    questions[count].options[2] +
    "</li>" +
    '<li class="list-group-item">' +
    questions[count].options[3] +
    "</li>" +
    "</ul>";
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.list-group-item");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("activeOption")) {
          option[j].classList.remove("activeOption");
        }
      }
      option[i].classList.add("activeOption");
    };
  }
}
