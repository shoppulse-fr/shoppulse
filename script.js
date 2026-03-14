const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  
  if(email) {
    message.textContent = "Merci ! Votre email a été enregistré.";
    document.getElementById("email").value = "";
    // Optionnel : intégrer Google Forms ou MailerLite pour stocker les emails
  }
});
