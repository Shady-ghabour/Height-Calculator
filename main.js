const sex = document.getElementById("sex");
const fatherH = document.querySelector(".fatherH");
const motherH = document.querySelector(".motherH");
const result = document.querySelector(".result");
let height = document.querySelector(".result span");
const questionsmark = document.querySelector(".info");
const inofBox = document.querySelector(".how");
const btn = document.querySelector(".final")

btn.addEventListener("click", ()=>{
    const motherHeight = parseFloat(motherH.value);
    const fatherHeight = parseFloat(fatherH.value);
    let calcH;

    if (sex.value === "Male") {
        calcH = ((motherHeight + 13) + fatherHeight) / 2;
    } else if (sex.value === "Female") {
        calcH = ((fatherHeight - 13) + motherHeight) / 2;
    }

    height.textContent = calcH.toFixed(0);
    result.style.display = "block";
})


questionsmark.addEventListener("click", () => {
    if (inofBox.style.display === "block") {
        inofBox.style.display = "none";
    } else {
        inofBox.style.display = "block";
    }
});
