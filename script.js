const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Redirect to 'yes.html' when Yes button is clicked
function nextPage() {
    window.location.href = "yes.html";
}

// Make the No button move randomly on hover
function moveButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the container
    const maxX = containerRect.width - noBtnRect.width;
    const maxY = containerRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";  // Ensure the button moves within the container
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
