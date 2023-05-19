// Get the comment form and comments list
const commentForm = document.getElementById('comment-form');
const commentsList = document.querySelector('.comments');

// Handle form submission
commentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the form inputs
  const user = document.getElementById('user').value;
  const comment = document.getElementById('comment').value;
  const rating = document.getElementById('rating').value;

  // Create a new comment item
  const newComment = document.createElement('li');
  newComment.textContent = `${user}: ${comment}`;

  // Append the new comment to the comments list
  commentsList.appendChild(newComment);

  // Reset the form
  commentForm.reset();
});
