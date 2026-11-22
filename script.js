const welcomeBtn = document.getElementById("welcomeBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const closeBtn = document.getElementById("closeBtn");

welcomeBtn.addEventListener("click", function () {
    surpriseMessage.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
    surpriseMessage.classList.add("hidden");
});