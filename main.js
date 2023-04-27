const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
let remainingCounterEl = document.getElementById("remaining-counter");
textAreaEl.addEventListener("keyup", () => {
    updateCounter();
})



let updateCounter = () => {
    totalCounterEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;

}


updateCounter()