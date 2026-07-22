// Display last modified date
const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// Hidden timestamp
const timestamp = document.getElementById("timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// Open membership dialogs
const modalLinks = document.querySelectorAll("[data-modal]");

modalLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modal = document.getElementById(link.dataset.modal);

        if (modal) {
            modal.showModal();
        }

    });

});

// Close dialogs
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});

// Close dialog when clicking outside
const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {

    dialog.addEventListener("click", (event) => {

        const rect = dialog.getBoundingClientRect();

        const clickedInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickedInside) {
            dialog.close();
        }

    });

});