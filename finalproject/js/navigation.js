export function initNavigation() {
    const menuButton = document.querySelector("#menuBtn");
    const navigation = document.querySelector("#navMenu");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close Navigation" : "Open Navigation"
        );
    });
}