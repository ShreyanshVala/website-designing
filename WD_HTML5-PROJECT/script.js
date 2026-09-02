const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields before submitting.';
      return;
    }

    status.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
    form.reset();
  });
}
