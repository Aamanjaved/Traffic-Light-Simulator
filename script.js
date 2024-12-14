const lights = ["red", "yellow", "green"];
let activeIndex = 0;

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    document.getElementById(lights[activeIndex]).classList.remove("active");
    activeIndex = (activeIndex + 1) % lights.length;
    document.getElementById(lights[activeIndex]).classList.add("active");
});