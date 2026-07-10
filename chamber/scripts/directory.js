// ======================================
// DIRECTORY.JS
// WDD 231 - Chamber Directory
// ======================================

// ===============================
// Select Elements
// ===============================

const membersContainer = document.querySelector("#members-container");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

// ===============================
// Fetch Member Data
// ===============================

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Failed to fetch member data.");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// ===============================
// Membership Helper
// ===============================

function getMembership(level) {
    switch (level) {
        case 3:
            return "Gold Member";

        case 2:
            return "Silver Member";

        default:
            return "Member";
    }
}

// ===============================
// Create Member Card
// ===============================

function createMemberCard(member) {

    const {
        name,
        address,
        phone,
        website,
        image,
        membership,
        industry,
        description,
        email
    } = member;

    const card = document.createElement("article");
    card.classList.add("member-card");

    card.innerHTML = `
        <img
            src="images/${image}"
            alt="${name} Logo"
            loading="lazy"
            width="180"
            height="180">

        <h3>${name}</h3>

        <p><strong>Industry:</strong> ${industry}</p>

        <p>${description}</p>

        <p><strong>Address:</strong><br>${address}</p>

        <p><strong>Phone:</strong><br>${phone}</p>

        <p>
            <strong>Email:</strong><br>
            <a href="mailto:${email}">
                ${email}
            </a>
        </p>

        <p>
            <strong>Membership:</strong><br>
            ${getMembership(membership)}
        </p>

        <p>
            <a
                href="${website}"
                target="_blank"
                rel="noopener noreferrer">
                Visit Website
            </a>
        </p>
    `;

    return card;
}

// ===============================
// Display Members
// ===============================

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = createMemberCard(member);

        membersContainer.appendChild(card);

    });

}

// ===============================
// Grid View
// ===============================

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");

});

// ===============================
// List View
// ===============================

listButton.addEventListener("click", () => {

    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");

});

// ===============================
// Initialize
// ===============================

getMembers();
