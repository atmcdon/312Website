// Get all movie headers and buttons
const movieHeaders = document.querySelectorAll('.movie-header');
const expandButtons = document.querySelectorAll('.expand-button');

// Add click event listeners to each button
expandButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Toggle the visibility of the corresponding movie details
    const movieDetails = button.parentNode.nextElementSibling;
    movieDetails.style.display = movieDetails.style.display === 'none' ? 'block' : 'none';

    // Toggle the expand button text
    button.textContent = button.textContent === 'Expand' ? 'Collapse' : 'Expand';
  });
});
