window.addEventListener('load', function() {
    setTimeout(function(){
        this.document.getElementById('loader').classList.toggle('loader2')    
    }, 2000);
  })

  window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");
    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }
}
