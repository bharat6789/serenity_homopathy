
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
          });
        }
      });
    });
  
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting Serenity Homeopathy! We'll get back to you soon.");
      contactForm.reset();
    });
  });
  
  