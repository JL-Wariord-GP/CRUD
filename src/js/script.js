const modal = document.querySelector("#formContainer");
const closeModal = document.querySelector(".close-button");


window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }
}

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

