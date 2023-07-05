var roleElement = document.getElementById("role");
var textElement = document.getElementById("text");
var dotsElement = document.getElementById("dots");
var roles = ["Junior Developer", "Server Administrator", "Project Manager"];
var currentRoleIndex = 0;
var isDeleting = false;
var typingSpeed = 100; // Adjust typing speed in milliseconds
var deletingSpeed = 50; // Adjust deleting speed in milliseconds
var delayBetweenAnimations = 2500; // Adjust delay between animations in milliseconds

function animateText() {
  var currentRole = roles[currentRoleIndex];
  var text = textElement.textContent;
  var length = text.length;

  if (!isDeleting) {
    if (length < currentRole.length) {
      textElement.textContent = currentRole.substring(0, length + 1);
      setTimeout(animateText, typingSpeed);
    } else {
      isDeleting = true;
      setTimeout(animateText, delayBetweenAnimations);
    }
  } else {
    if (length > 0) {
      textElement.textContent = text.substring(0, length - 1);
      setTimeout(animateText, deletingSpeed);
    } else {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(animateText, delayBetweenAnimations);
    }
  }
}

animateText();
