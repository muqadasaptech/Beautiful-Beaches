document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", (event) => {
        if (!feedbackForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        feedbackForm.classList.add("was-validated");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const queriesForm = document.getElementById("queriesForm");

    queriesForm.addEventListener("submit", (event) => {
        if (!queriesForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        queriesForm.classList.add("was-validated");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer scripts loaded successfully!");
});
