let exit_btn = document.getElementById("modal-exit");
let modal = document.querySelector(".modal");
let course_wrapper = document.querySelector(".courses-wrapper");
let new_course = document.querySelector('.course-new');

let courses = {
   courses: []
};

if (localStorage.getItem("courses")) {
   courses = JSON.parse(localStorage.getItem("courses"));
}
else {
   localStorage.setItem("courses", JSON.stringify(courses));
}

let course = 
{
   id: `${ courses.courses.length }`,
   name: "",
   professor: "",
   email: "",
   website: "",
   logo: ""
};

new_course.children[0].addEventListener("click", function() {
   modal.setAttribute("style", "display: block;");

   courses.courses.push(course);
   localStorage.setItem("courses", JSON.stringify(courses));

   for (let j = 0; j < course_wrapper.children.length; j++) {
      if (course_wrapper.children[j].className != "modal") {
         course_wrapper.children[j].setAttribute("style", "filter: opacity(20%);");
      }
   }
});

exit_btn.addEventListener("click", function(e) {
   modal.setAttribute("style", "display: none;");

   courses.courses[courses.courses.length - 1] = course;
   localStorage.setItem("courses", JSON.stringify(courses));

   for (let j = 0; j < course_wrapper.children.length; j++) {
      if (course_wrapper.children[j].className != "modal") {
         course_wrapper.children[j].setAttribute("style", "filter: opacity(100%);");
      }
   }

   window.location.reload();
});

document.querySelector("#course-name").addEventListener("keydown", function(e){
   course.name = e.target.value;
});

document.querySelector("#course-professor").addEventListener("keydown", function(e){
   course.professor = e.target.value;
});

document.querySelector("#course-email").addEventListener("keydown", function(e){
   course.email = e.target.value;
});

document.querySelector("#course-website").addEventListener("keydown", function(e){
   course.website = e.target.value;
});

let icon_choices = document.querySelector('.icons-choice');

for (let i = 0; i < icon_choices.children.length; i++) {
   icon_choices.children[i].addEventListener("click", function(e) {
      course.logo = e.target.className;
   });
}


let course_img_count = 1;
for (let i = 0; i < courses.courses.length; i++) {

   let current_url = window.location.href.split('/');
   let new_url = current_url[0] + '//' + current_url[1] + current_url[2] + '/' + current_url[3] + `/each/each.html?id=${ courses.courses[i].id }`; 

   if (course_img_count % 5 == 0) {
      course_img_count = 1;
   }

   let each_course = document.createElement("a");
   each_course.className = 'course';
   each_course.href = new_url;
   each_course.innerHTML = `
      <div class="course-img">
         <img src="/images/courses/course-${course_img_count}.gif" alt="">
      </div>
      <p class="course-name">
         <i class="${ courses.courses[i].logo }"></i>
         <span>${ courses.courses[i].name }</span>
      </p>
   `;

   let courses_list = document.querySelector('.courses-list');
   courses_list.insertBefore(each_course, courses_list.firstChild);

   course_img_count++;
}


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
