import { initNavigation } from "./navigation.js";
import { initModal } from "./modal.js";
import { loadStrategies } from "./fetch.js";


// Initialize navigation
initNavigation();


// Initialize modal
initModal();


// Display last modified date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}


// Display current year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Load strategies only on the strategies page
if (document.querySelector("#strategy-container")) {
    loadStrategies();
}