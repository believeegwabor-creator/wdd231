export function initNavigation() {

    const menuBtn = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#navMenu");

    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {

            menuBtn.innerHTML = "✕";
            menuBtn.setAttribute("aria-label", "Close Navigation");

        } else {

            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open Navigation");

        }

    });

}