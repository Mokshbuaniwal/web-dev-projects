// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name.length < 3) {
        alert("Name must be at least 3 letters.");
        return;
      }

      if (!email.includes("@")) {
        alert("Enter a valid email.");
        return;
      }

      if (message.length < 10) {
        alert("Message too short.");
        return;
      }

      alert("Your message has been sent successfully!");
      form.reset();
    });
  }

  // Buy button action
  const buyBtn = document.getElementById("buyBtn");
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      alert("Thank you for your interest! Our team will contact you.");
    });
  }
});
