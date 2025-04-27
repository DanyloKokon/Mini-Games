document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const modal = document.getElementById("modal");
  modal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});
