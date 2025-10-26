// Preview uploaded staff images
function previewImage(event, id) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById(id).src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

// Automatically update the year
document.getElementById("year").textContent = new Date().getFullYear();