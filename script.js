// Selectors
const cssInfo = document.querySelector("h3");
const colour1 = document.querySelector(".colour1");
const colour2 = document.querySelector(".colour2");
const body = document.querySelector("body");

// Fetching Color input and displaying to background
setGradient = () => {
  body.style.background = "linear-gradient(to right, "
    + colour1.value
    + ", "
    + colour2.value
    + ")";
  
  cssInfo.textContent = body.style.background + ";";
}

// Event Listeners
colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);