const modalTrigger = document.getElementById("modal-trigger");
const modal = document.getElementById("modal-trailer");
const close = modal.querySelector(".close-btn");

modalTrigger.addEventListener("click", () => {
  modal.style.display = "flex"
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}