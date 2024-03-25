

function navigation_detector() {
   let current_url = window.location.href.split('/');
   let nav_urls = document.querySelector(".navigation").children;
   
   current_url = current_url[current_url.length - 2];
   
   for (let i = 0; i < nav_urls.length; i++) {
      let id = nav_urls[i].id;
      id = id.split('-')[0];
   
      if (current_url == id) {
         nav_urls[i].classList.add("nav-active");  
      }
   }

}

navigation_detector();
