// Function to open the modal
function openModal(element) {
    const modal = document.getElementById("modal");
    const fullImage = document.getElementById("fullImage");
    
    fullImage.src = element.querySelector("img").src;
    modal.style.display = "flex";
    fullImage.style.opacity = "0";  // Initial opacity for fade-in effect
 
    setTimeout(() => { 
       fullImage.style.opacity = "1";  // Fade-in effect 
    }, 50);
 }
 
 // Function to close the modal
 function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
 }
 
 // Close modal on clicking outside the image
 window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
       closeModal();
    }
 }
 