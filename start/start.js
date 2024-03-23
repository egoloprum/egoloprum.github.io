let login_a = document.querySelector('.login-a').children[0];
let signup_a = document.querySelector('.signup-a').children[0];

login_a.addEventListener("click", function() {
   document.querySelector('.login').setAttribute("style", "display: block;");
   document.querySelector('.signup').setAttribute("style", "display: none;");
});

signup_a.addEventListener("click", function() {
   document.querySelector('.login').setAttribute("style", "display: none;");
   document.querySelector('.signup').setAttribute("style", "display: block;");
});

let login_btn = document.querySelector('.login-btn');
let signup_btn = document.querySelector('.signup-btn');

login_btn.addEventListener("click", function() {
   let name = document.querySelector('#login-username');
   let password = document.querySelector('#login-password');

   console.log(name.value, password.value);

   console.log(window.location.href);
   let current_url = window.location.href.split('/');
   current_url = current_url[0] + "/index.html";
   window.location.href = current_url;

})
