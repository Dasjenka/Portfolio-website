const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Bedankt voor je bericht!");
});