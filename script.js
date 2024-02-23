const start_btn = document.querySelector(".start_btn");
const quiz_container = document.querySelector(".quiz_container");
const starting_the_quiz = document.querySelector(".starting_the_quiz");
const questionBox = document.querySelector(".question_box");
const answerBox = document.querySelectorAll(".btn");
const nextbtn = document.querySelector(".next_btn");
const option_container = document.querySelector(".option_container");
const question_number = document.querySelector(".score_box");
const game_over = document.querySelector(".game_over");
const volumeUp = document.querySelector(".fa-volume-up");
const volumeDown = document.querySelector(".fa-volume-off");
const firstpage_audio = new Audio("images/backgroundplayer.mp3");
let audio_play_or_not = true;
const win_audio = new Audio("images/rightanswer.mp3");
const lose_audio = new Audio("images/lose.mp3");
let question_one = 0;
let time = 45;
let id;
let sc;
let question_count = 0;
let real_score = 0;
const time_box = document.querySelector(".time_box");
const quiz_question = [
  {
    question: "JavaScript is which type of language ? ",
    options: [
      "Object - Oriented",
      "Object - Based",
      "Procedural",
      "None of the above",
    ],
    answer: 0,
  },

  {
    question: "What is the correct way to declare a variable in JavaScript? ",
    options: ["variable x = 10", "var x = 10 ", "x = 10", " int x = 10 "],
    answer: 1,
  },

  {
    question:
      "Which loop is guaranteed to execute the block of code at least once?",
    options: ["for loop", "do...while loop", "while loop", "None of the above"],
    answer: 1,
  },

  {
    question: "What is the purpose of break statement in a loop? ",
    options: [
      "It stop the execution of the loop immediately",
      "It restart the loop from the beginning",
      "It return a value from the loop",
      "None of the above",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following type of variable takes precedence over other if names are same? ",
    options: [
      "global variables",
      "local variables",
      "Both of the above",
      "None of the above",
    ],
    answer: 1,
  },

  {
    question:
      "Which of the following functions of array object represents the source code of an object? ",
    options: ["toSource()", "splice()", "toString()", "unshift()"],
    answer: 0,
  },

  {
    question:
      " Which of the following function of Number object returns the number's value?",
    options: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
    answer: 1,
  },
  {
    question:
      "Which of the following is a valid type of function javaScript supports? ",
    options: [
      "named function",
      "anonymous function",
      "Both of the above",
      "None of the above",
    ],
    answer: 2,
  },

  {
    question: "How do we write a comment in JavaScript? ",
    options: ["/* */", "//", "#", "$$"],
    answer: 0,
  },

  {
    question: "Which object in JavaScript doesn't have a protoType ?",
    options: [
      "Base Object",
      "All Object have a protoType",
      "None of the objects have a protoType",
      "None of the above",
    ],
    answer: 0,
  },
  {
    question: "What does ... operator do in JS? ",
    options: [
      "It is used to spread iterables to individual elements",
      "It is used to describe a dataType of undefined size",
      "No such operator exists",
      "None of the above",
    ],
    answer: 0,
  },

  {
    question:
      "How are objects compared when they are checked with the strict equality operator?",
    options: [
      "The contentsof the objects are compared",
      "Their references are compared",
      "Both A and B",
      "None of the above",
    ],
    answer: 1,
  },

  {
    question: "How to stop an interval timer in JavaScript? ",
    options: [
      "clearInterval",
      "clearTimer",
      "intervalOver",
      "None of the above",
    ],
    answer: 0,
  },

  {
    question:
      "What keyword is used to declare an asynchronous functionin JavaScript? ",
    options: ["async", "await", "setTimeout", "None of the above"],
    answer: 0,
  },

  {
    question: "Which of the following are closures in JavaScript? ",
    options: ["Variables", "Functions", "Objects", "All of the above"],
    answer: 3,
  },

  {
    question: "Which of the following is not a JavaScript framework? ",
    options: ["Node", "Vue", "React", "Cassandra"],
    answer: 3,
  },

  {
    question:
      "What keyword is used to check whether a given property is valid or not? ",
    options: ["in", "is in", "exists", "lies"],
    answer: 0,
  },

  {
    question: "How can a dataType be declared to be a constant type ? ",
    options: ["const", "var", "let", "constant"],
    answer: 0,
  },

  {
    question:
      "Which of the following methods can be used to display data in some form using JavaScript? ",
    options: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
    answer: 3,
  },

  {
    question:
      "Which of the following methods is used to access HTML element using JavaScript?",
    options: [
      "getElementById()",
      "getElementByClassName()",
      "Both A and B",
      "None of the above",
    ],
    answer: 2,
  },
];

start_btn.addEventListener("click", () => {
  firstpage_audio.play();
  quiz_container.classList.remove("inactive");
  starting_the_quiz.classList.add("effect");

  document.querySelectorAll(".btn").forEach((eachbtn) => {
    eachbtn.classList.add("custom_animation");
  });

  document.querySelector(".question_box").classList.add("custom_animation");

  showQuestion();
  checkAnswer();
  timer(time);
  showquestionCount();
});

// step 1 :)

function showQuestion() {
  questionBox.innerText = quiz_question[question_one].question;
  answerBox.forEach((elem, index) => {
    elem.innerText = quiz_question[question_one].options[index];
  });
}

nextbtn.addEventListener("click", () => {
  nextbtn.style.display = "none";
  time_box.innerText = 45;
  if (question_count == 20) {
    game_over.style.transform = "scale(1)";
    sc = real_score;
    document.querySelector(".score_data").href = `result.html?score=${sc}`;
    let game_over_inside = document.querySelector(".game_over h1");
    game_over_inside.innerHTML = "Quiz Completed";
  }
  if (question_one < quiz_question.length - 1) {
    document.querySelectorAll(".btn").forEach((eachbtn) => {
      eachbtn.classList.add("custom_animation");
    });
    document.querySelector(".question_box").classList.add("custom_animation");

    document.body.style.backgroundColor = "#CCE2C2";
    nextbtn.style.color = "#34B936";
    clearInterval(id);
    question_one++;
    showQuestion();
    removeStyle();
    timer(time);
    showquestionCount();
  }
});

function checkAnswer() {
  answerBox.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      if (index == quiz_question[question_one].answer) {
        elem.classList.add("correct");
        nextbtn.style.display = "block";
        option_container.classList.add("stop_pointer_event");
        real_score++;
        clearInterval(id);
        document.querySelectorAll(".btn").forEach((eachbtn) => {
          eachbtn.classList.remove("custom_animation");
        });
        document
          .querySelector(".question_box")
          .classList.remove("custom_animation");
        if (audio_play_or_not) {
          win_audio.play();
        }
      } else {
        elem.classList.add("incorrect");
        nextbtn.style.display = "block";
        showCorrectAnswer();
        option_container.classList.add("stop_pointer_event");
        clearInterval(id);
        document.querySelectorAll(".btn").forEach((eachbtn) => {
          eachbtn.classList.remove("custom_animation");
        });
        document
          .querySelector(".question_box")
          .classList.remove("custom_animation");
        if (audio_play_or_not) {
          lose_audio.play();
        }
      }
    });
  });
}

function removeStyle() {
  answerBox.forEach((elem) => {
    elem.classList.remove("correct");
    elem.classList.remove("incorrect");
  });
  option_container.classList.remove("stop_pointer_event");
}

function timer(time) {
  id = setInterval(() => {
    time = time - 1;
    let show_real_time = time < 10 ? "0" + time : time;
    time_box.innerText = show_real_time;
    if (time == 0) {
      clearInterval(id);
      game_over.style.transform = "scale(1)";
      sc = real_score;
      document.querySelector(".score_data").href = `result.html?score=${sc}`;
    }
    if (time < 30 && time > 15) {
      document.body.style.backgroundColor = "#DBDDB1";
      nextbtn.style.color = "#D0B258";
    }
    if (time > 0 && time < 15) {
      document.body.style.backgroundColor = "#FF7A7A";
      nextbtn.style.color = "#C70B0B";
    }
  }, 1000);
}

function showquestionCount() {
  question_count++;
  let showhere =
    question_count < 10 ? "0" + question_count + "/20" : question_count + "/20";
  question_number.innerText = showhere;
}

function showCorrectAnswer() {
  answerBox.forEach((elem, index) => {
    if (index == quiz_question[question_one].answer) {
      elem.classList.add("correct");
    }
  });
}

volumeUp.addEventListener("click", () => {
  volumeUp.style.display = "none";
  volumeDown.style.display = "block";
  audio_play_or_not = false;
  firstpage_audio.pause();
});

volumeDown.addEventListener("click", () => {
  volumeDown.style.display = "none";
  volumeUp.style.display = "block";
  audio_play_or_not = true;
  firstpage_audio.play();
});
