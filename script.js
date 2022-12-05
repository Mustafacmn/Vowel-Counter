const inputEl = document.getElementById("input")
const checkBtn = document.getElementById("check-btn");

const vowelRegex = /[aeiou]/gi // Check for vowels

checkBtn.addEventListener("click", () => {
  const input = inputEl.value

  if(input){
    alert(`There are ${input.match(vowelRegex).length} vowels!`)
  }
})

