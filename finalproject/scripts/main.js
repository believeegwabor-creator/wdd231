import { initNavigation } from "./navigation.js";
import { loadStrategies } from "./fetch.js";
import { initModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initModal();

    if (document.querySelector("#strategy-container")) {
        loadStrategies();
    }
});