
const checkButton = document.getElementById("check-btn");
const showResult = document.getElementById("result");

const isPalindrome = (string) => {
  let str = cleanInputStr(string);
  str = str.toLowerCase();
  let j = str.length - 1;
  for(let i=0; i<str.length/2; i++, j--) {
    if(str[i] !== str[j]){
      return false;
    }
  }
  return true;
}

const cleanInputStr = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
  if (cleanStr === "") {
    alert("Please input a value");
  } else if (cleanStr.length === 1) {
    return cleanStr;
  } else {
    return cleanStr;
  }
}

checkButton.addEventListener("click", () => {
  const textInput = document.getElementById("text-input");
  const result = isPalindrome(textInput.value);
  setResults(result, textInput.value);
});

const setResults = (value, str) => {
  const text = value ? `${str} is a palindrome` : `${str} is not a palindrome`;
  showResult.innerHTML = `
  <p>${text}</p>
  `;
}