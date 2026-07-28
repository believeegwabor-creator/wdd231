import { places } from "../data/discover.mjs";

const discoverGrid = document.querySelector("#discover-grid");
const visitorMessage = document.querySelector("#visitor-message");

// Footer
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Build Discover Cards
function displayPlaces() {
    places.forEach((place) => {

        const card = document.createElement("section");
        card.classList.add("discover-card");

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
                <img
                    src="${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                    width="300"
                    height="200">
            </figure>

            <address>${place.address}</address>

            <p>${place.description}</p>

            <button>Learn More</button>
        `;

        discoverGrid.appendChild(card);

    });
}

displayPlaces();

// Local Storage Visitor Message
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {

    visitorMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween = Math.floor(
        (now - Number(lastVisit)) / 86400000
    );

    if (daysBetween < 1) {

        visitorMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        visitorMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitorMessage.textContent =
            `You last visited ${daysBetween} days ago.`;

    }
}

localStorage.setItem("lastVisit", now);