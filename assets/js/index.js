const url = "https://api.adviceslip.com/advice";
const adviseId = document.querySelector(".advice-id > .number");
const quote = document.querySelector(".quote");
const changeBtn = document.querySelector(".change");
const dice = document.querySelector(".change img");

window.onload = function () {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      adviseId.innerHTML = `${data.slip.id}`;
      quote.innerHTML = `${data.slip.advice}`;
    });
};
changeBtn.onclick = () => {
  dice.classList.add("animate");
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      adviseId.innerHTML = `${data.slip.id}`;
      quote.innerHTML = `${data.slip.advice}`;
      dice.classList.remove("animate");
    });
};
