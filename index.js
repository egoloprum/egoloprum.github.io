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

let user;
let initial = 
{
   username: "",
   password: "",
   login: ""
};

if (localStorage.getItem("user")) {
   user = JSON.parse(localStorage.getItem("user"));
}
else {
   localStorage.setItem("user", JSON.stringify(initial));
}

login_btn.addEventListener("click", function() {
   let name = document.querySelector('#login-username');
   let password = document.querySelector('#login-password');

   if (user.username === name.value && user.password === password.value) {
      user.login = true;
      localStorage.setItem("user", JSON.stringify(user));

      let current_url = window.location.href.split('/');
      current_url = current_url[0] + "/home/home.html";
   
      window.location.href = current_url;
   }
   else {
      alert('error');
   }
});

signup_btn.addEventListener("click", function() {
   let name = document.querySelector('#signup-username');
   let password = document.querySelector('#signup-password');

   if (name.value.length != 0 && password.value.length != 0) {
      user.username = name.value;
      user.password = password.value;
      user.login = true;

      localStorage.setItem("user", JSON.stringify(user));

      let current_url = window.location.href.split('/');
      current_url = current_url[0] + "/home/home.html";
   
      window.location.href = current_url;
   }
   else {
   }
});
