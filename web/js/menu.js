const toggleButton = document.getElementById("menu-icon");
const menu = document.getElementById("main-btn");
const menuIconImg = document.getElementById("menu-icon-img");

toggleButton.addEventListener("click", () => {
    const isOpening = menu.classList.toggle("active");
    toggleButton.classList.toggle("active");

    if (isOpening) {
        menuIconImg.src = "images/closeicon.png";
        document.body.classList.add("no-scroll");
    } else {
        menuIconImg.src = "images/menuicon.png";
        document.body.classList.remove("no-scroll");
    }
});