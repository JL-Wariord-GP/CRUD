const modal = document.querySelector("#formContainer");
const closeModal = document.querySelector(".close-button");

closeModal.addEventListener("click", () => {
    modal.setAttribute("closing", "");
  
    modal.addEventListener(
      "animationend",
      () => {
        modal.removeAttribute("closing");
        modal.close();
      },
      { once: true }
    );
  });

