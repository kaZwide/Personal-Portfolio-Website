console.log("JavaScript is connected!");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

console.log(menuToggle);
console.log(navLinks);

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

 if (isOpen) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");
    })
})


const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    formMessage.classList.remove("error", "success");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please complete all fields.";
        formMessage.classList.add("error");
        return;
    }
    
    if (!isValidEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.add("error");
        return;
    }


    formMessage.textContent =
  `Thanks, ${name}! Your message details are valid.`;
    formMessage.classList.add("success");

    contactForm.reset();
} );

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}