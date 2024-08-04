// Get the button element
const btn = document.querySelector('.btn');

// Get the input elements
const nameInput = document.querySelector('input[name="Username"]');
const emailInput = document.querySelector('input[name="Email"]');
const passwordInput = document.querySelector('input[name="password"]');
const form = document.querySelector('form');

// Add an event listener to the button
btn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check for invalid inputs
  if (username === '' || email === '' || password === '') {
    alert('Invalid input: Please fill in all fields');
    return;
  }

  if (password.length < 8 || password.length > 16) {
    alert('Invalid input: Password must be between 8 and 16 characters');
    return;
  }

  if (!email.includes('@')) {
    alert('Invalid input: Email must contain an @ symbol');
    return;
  }
  // Submit the form
  form.submit();
});