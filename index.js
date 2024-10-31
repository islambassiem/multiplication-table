function random() {
  num1.innerHTML = Math.ceil(Math.random() * 10);
  num2.innerHTML = Math.ceil(Math.random() * 10);
}

function markCorrect() {
  correctAnswers++;
  localStorage.setItem("correctAnswers", correctAnswers);
  correct.innerHTML = localStorage.getItem("correctAnswers");
  result.innerHTML =
    "<span class='text-2xl text-green-700'>Correct 🤗 🎉 🥳</span>";

  next.classList.remove("bg-red-700");
  next.classList.remove("hover:bg-red-80");
  next.classList.remove("dark:bg-red-600");
  next.classList.remove("dark:hover:bg-red-700");
  next.classList.remove("dark:focus:ring-red-900");

  next.classList.add("bg-green-700");
  next.classList.add("hover:bg-green-80");
  next.classList.add("dark:bg-green-600");
  next.classList.add("dark:hover:bg-green-700");
  next.classList.add("dark:focus:ring-green-900");
  mark();
}

function markWrong() {
  wrongAnswers++;
  localStorage.setItem("wrongAnswers", wrongAnswers);
  wrong.innerHTML = localStorage.getItem("wrongAnswers");
  result.innerHTML =
    "<span class='text-2xl text-red-700'>Wrong 😭 😢 😔</span>";

  next.classList.remove("bg-green-700");
  next.classList.remove("hover:bg-green-80");
  next.classList.remove("dark:bg-green-600");
  next.classList.remove("dark:hover:bg-green-700");
  next.classList.remove("dark:focus:ring-green-900");

  next.classList.add("bg-red-700");
  next.classList.add("hover:bg-red-80");
  next.classList.add("dark:bg-red-600");
  next.classList.add("dark:hover:bg-red-700");
  next.classList.add("dark:focus:ring-red-900");
  mark();
}

function mark() {
  marks.innerHTML =
    localStorage.getItem("correctAnswers") +
    " / " +
    n(localStorage.getItem("answered"));
}

function n(number) {
  return Number(number);
}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
let next = document.getElementById("next");
let reset = document.getElementById("reset");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let marks = document.getElementById("marks");

let answered = n(localStorage.getItem("answered"));
let correctAnswers = n(localStorage.getItem("correctAnswers"));
let wrongAnswers = n(localStorage.getItem("wrongAnswers"));

correct.innerHTML = correctAnswers;
wrong.innerHTML = wrongAnswers;
marks.innerHTML = n(correctAnswers) + " / " + answered;

random();

submit.addEventListener("click", () => {
  next.classList.add("hidden");
  if (answer.value != "") {
    localStorage.setItem("answered", n(localStorage.getItem("answered")) + 1);
    if (n(answer.value) == n(num1.innerHTML) * n(num2.innerHTML)) {
      markCorrect();
    } else {
      markWrong();
    }
    next.classList.remove("hidden");
    submit.classList.add("hidden");
  } else {
    result.innerHTML = "Please Submit an answer";
  }
  answer.value = "";
	answer.classList.add('hidden');
});

next.addEventListener("click", () => {
  result.innerHTML = "";
  next.classList.add("hidden");
  submit.classList.remove("hidden");
  random();
	answer.classList.remove('hidden');
	answer.focus();
});

reset.addEventListener("click", () => {
  localStorage.setItem("answered", "0");
  localStorage.setItem("correctAnswers", "0");
  localStorage.setItem("wrongAnswers", "0");
  window.location.reload();
});
