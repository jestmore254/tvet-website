// Simple form validation and response
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("enrollmentForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const course = document.getElementById("course").value;

      if (!name || !email || !course) {
        msg.textContent = "⚠️ Please fill all fields.";
        msg.style.color = "red";
      } else {
        msg.textContent = "✅ Application submitted successfully!";
        msg.style.color = "green";
        form.reset();
      }
    });
  }
});
