
// ================================
// MENU MOBILE
// ================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Fermer le menu après avoir cliqué
// sur un lien

const menuItems = document.querySelectorAll(".nav-links a");


menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// ANIMATION AU SCROLL
// ================================

const animatedElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .timeline-item, .contact-container"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});

// =========================
// DETAILS DES PROJETS
// =========================

const projectButtons = document.querySelectorAll("[data-dialog]");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const dialogId = button.dataset.dialog;
        const dialog = document.getElementById(dialogId);

        if (dialog) {
            dialog.showModal();
        }

    });

});


const closeButtons = document.querySelectorAll(".dialog-close");

closeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const dialog = button.closest("dialog");

        if (dialog) {
            dialog.close();
        }

    });

});

// =========================
// FORMULAIRE DE CONTACT
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Merci pour votre message ! Le système d'envoi sera connecté prochainement.";

        formMessage.classList.add("success");

        contactForm.reset();

    });

}