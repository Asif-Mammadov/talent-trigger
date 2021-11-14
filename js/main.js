const questions = document.querySelectorAll("[data-question]");
let count = 0;

questions.forEach((question) => {
  count++;
  question.dataset.question = count;
});
