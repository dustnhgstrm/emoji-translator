const submitButton = document.querySelector("#submit-button");

const inputBox = document.querySelector("#translator-input");

const resultVar = document.querySelector("#results");

submitButton.addEventListener("click", () => {
  const radios = document.querySelectorAll('[type="radio"]');
  for (const radio of radios) {
    if (radio.value === "encode" && radio.checked) {
      resultVar.innerText = encode(inputBox.value);
    }
    if (radio.value === "translate" && radio.checked) {
      resultVar.innerText = translate(inputBox.value);
    }
    if (radio.value === "madlib" && radio.checked) {
      resultVar.innerText = madlib(inputBox.value);
    }
    if (radio.value === "search" && radio.checked) {
      resultVar.innerText = "";
      const resultArray = search(inputBox.value);
      if (resultArray.length > 0) {
        for (const object of resultArray) {
          const newElement = document.createElement("p");
          newElement.innerText = object.symbol;
          resultVar.appendChild(newElement);
        }
      } else {
        resultVar.innerText = "No emojis were found matching your input!";
      }
    }
    if (radio.value === "random" && radio.checked) {
      const rand = Math.random();
      const range = rand * 4;
      const result = Math.floor(range);

      if (result === 0) {
        resultVar.innerText = encode(inputBox.value);
      }
      if (result === 1) {
        resultVar.innerText = translate(inputBox.value);
      }
      if (result === 2) {
        resultVar.innerText = madlib(inputBox.value);
      }
      if (result === 3) {
        resultVar.innerText = "";
        const resultArray = search(inputBox.value);
        if (resultArray.length > 0) {
          for (const object of resultArray) {
            const newElement = document.createElement("p");
            newElement.innerText = object.symbol;
            resultVar.appendChild(newElement);
          }
        } else {
          resultVar.innerText = "No emojis were found matching your input!";
        }
      }
    }
  }
});
