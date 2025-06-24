document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('formResponse');

  if (name && email && message) {
    // Simple validation passed
    response.style.color = 'green';
    response.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear the form
    this.reset();
  } else {
    response.style.color = 'red';
    response.textContent = 'Please fill out all fields.';
  }
});
