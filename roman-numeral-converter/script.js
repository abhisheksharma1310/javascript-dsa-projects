const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

inputNumber.addEventListener("input", () => {
  output.classList.remove("result");
  output.style.display = "none";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputNumber();
});

const checkInputNumber = () => {
  const number = parseInt(inputNumber.value);
  if (!number) {
    displayResult("Please enter a valid number");
    return;
  } else if (number < 1) {
    displayResult("Please enter a number greater than or equal to 1");
    return;
  } else if (number > 3999) {
    displayResult("Please enter a number less than or equal to 3999");
    return;
  } else {
    displayResult(convertToRoman(number));
  }
};

const convertToRoman = (num) => {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      result += roman[i].toUpperCase();
      num -= decimal[i];
    }
  }
  return result;
};

const displayResult = (res) => {
  output.style.display = "block";
  output.classList.add("result");
  output.innerHTML = `
    <h2>${res}</h2>
  `;
};
