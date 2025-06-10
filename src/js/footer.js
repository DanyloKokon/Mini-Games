  const subscribeForm = document.getElementById("subscribeForm");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  console.log(subscribeForm);
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
