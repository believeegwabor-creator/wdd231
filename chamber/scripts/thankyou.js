// Display last modified date
const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// Read URL parameters
const params = new URLSearchParams(window.location.search);

// Helper function
function getValue(id, key) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = params.get(key) || "Not provided";
    }
}

// Display submitted values
getValue("firstName", "firstName");
getValue("lastName", "lastName");
getValue("email", "email");
getValue("phone", "phone");
getValue("organization", "organization");

// Display membership level
const membership = params.get("membership");
const membershipElement = document.getElementById("membership");

if (membershipElement) {

    const levels = {
        np: "NP Membership",
        bronze: "Bronze Membership",
        silver: "Silver Membership",
        gold: "Gold Membership"
    };

    membershipElement.textContent =
        levels[membership] || "Not Selected";
}

// Display submission date
const timestamp = params.get("timestamp");
const timestampElement = document.getElementById("timestamp");

if (timestampElement) {

    if (timestamp) {

        const date = new Date(timestamp);

        timestampElement.textContent =
            date.toLocaleString();

    } else {

        timestampElement.textContent = "Not available";

    }

}