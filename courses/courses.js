let exit_btn = document.getElementById("modal-exit");
let modal = document.querySelector(".modal");
let course_wrapper = document.querySelector(".courses-wrapper");

let courses = document.querySelectorAll(".course");

for (let i = 0; i < courses.length; i++) {
   courses[i].addEventListener("click", function(e) {
      modal.setAttribute("style", "display: block;");

      for (let j = 0; j < course_wrapper.children.length; j++) {
         if (course_wrapper.children[j].className != "modal") {
            course_wrapper.children[j].setAttribute("style", "filter: opacity(20%);");
         }
      }
   });
}

exit_btn.addEventListener("click", function(e) {
   modal.setAttribute("style", "display: none;");

   for (let j = 0; j < course_wrapper.children.length; j++) {
      if (course_wrapper.children[j].className != "modal") {
         course_wrapper.children[j].setAttribute("style", "filter: opacity(100%);");
      }
   }
});

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
