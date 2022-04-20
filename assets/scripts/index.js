

const text = document.getElementById("wordsToCount")
const output = document.getElementById("countedWords")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const inputString = text.value.toString()
    const wordsArr = inputString.split(" ")
    output.innerHTML = `You typed ${wordsArr.length} words`
    })




