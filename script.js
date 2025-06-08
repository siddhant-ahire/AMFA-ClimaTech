// Function to show the contact modal
function showContactModal() {
  document.getElementById("contact-modal").style.display = "block";
}

// Function to close the contact modal
function closeContactModal() {
  document.getElementById("contact-modal").style.display = "none";
}

// Function to copy text to clipboard
function copyToClipboard(elementId, message) {
  const textToCopy = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Show tooltip feedback
    const tooltip = document.querySelector(`#${elementId} ~ .copy-tooltip`);
    if (tooltip) {
      tooltip.textContent = message;
      tooltip.style.display = 'inline';
      setTimeout(() => {
        tooltip.style.display = 'none';
      }, 1000);
    }
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Optional: Close modal on Escape key
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeContactModal();
  }
});

// Attach event listeners to copy icons
document.addEventListener("DOMContentLoaded", () => {
  const copyIcons = document.querySelectorAll(".copy-icon");

  copyIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const targetId = icon.getAttribute("data-target");
      const message = icon.getAttribute("data-message");
      if (targetId && message) {
        copyToClipboard(targetId, message);

        // Show tooltip
        icon.classList.add("show-tooltip");
        const tooltip = icon.querySelector(".copy-tooltip");
        if (tooltip) {
          tooltip.textContent = message;
        }

        // Hide tooltip after 1 second
        setTimeout(() => {
          icon.classList.remove("show-tooltip");
        }, 1000);
      }
    });
  });
});
