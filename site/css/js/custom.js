// Custom JavaScript to handle navigation switching
document.addEventListener("DOMContentLoaded", function() {
    // Select horizontal nav buttons
    const horizontalButtons = document.querySelectorAll('.horizontal-nav-button');
    const verticalNavContents = document.querySelectorAll('.vertical-nav-content');
  
    // Hide all vertical navigation content initially
    verticalNavContents.forEach(content => content.classList.remove('active'));
  
    horizontalButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Hide all vertical nav sections
        verticalNavContents.forEach(content => content.classList.remove('active'));
  
        // Show the corresponding vertical nav section
        verticalNavContents[index].classList.add('active');
      });
    });
  });
  