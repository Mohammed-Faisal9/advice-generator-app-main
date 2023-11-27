let url = "https://api.adviceslip.com/advice";
// select items
const idNumber = document.querySelector(".id-number");
const adviceText = document.querySelector(".text");
const rendomAdvice = document.querySelector(".btn");

let getAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { id, advice } = data.slip;
      idNumber.textContent = `Advice #${id}`;
      adviceText.textContent = advice;
      console.log(id);
      console.log(advice);
    });
};

document.addEventListener('DOMContentLoaded', getAdvice)

rendomAdvice.addEventListener("click", getAdvice);
