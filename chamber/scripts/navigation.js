// ======================================
// NAVIGATION.JS
// WDD 231 - Chamber Site Navigation
// ======================================

// ===============================
// Select Elements
// ===============================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

// ===============================
// Toggle Navigation
// ===============================

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

});

// ===============================
// Reset Navigation on Resize
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth >= 768) {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";
    }

});