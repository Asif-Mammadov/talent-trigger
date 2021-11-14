const questions = document.querySelectorAll("[data-question]");
const skipBtns = document.querySelectorAll(".js-skip-question");
const allNum = document.querySelector(".all-num");
const currentNum = document.querySelector(".current-num");

let count = 0;
let current = 1;

const updateView = () => {
  if (current <= count) {
    // Hide all questions
    questions.forEach((question) => question.classList.add("d-none"));

    // Show active one
    document
      .querySelector(`[data-question="${current}"]`)
      .classList.remove("d-none");

    currentNum.innerHTML = current;
  }

  if (current == count) {
    document.querySelector(".skip-btn").classList.add("d-none");
  }
};

// Assign IDs to all questions
questions.forEach((question) => {
  count++;
  question.dataset.question = count;
});

allNum.innerHTML = count;

updateView();

skipBtns.forEach((skipBtn) => {
  skipBtn.addEventListener("click", (e) => {
    e.preventDefault();

    current++;
    updateView();
  });
});
