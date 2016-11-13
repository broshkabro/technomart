var link = document.querySelector(".mail-to");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]"); 
var email = popup.querySelector("[name=email]"); 
var answer = popup.querySelector("[name=answer]");

var storage = localStorage.getItem("login");        

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show"); 
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }    
  });          

  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !answer.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  }); 

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });


    window.addEventListener("keydown", function(event) {
      if (event.keyCode===27) {
        if (popup.classList.contains("modal-content-show")) {
          popup.classList.remove("modal-content-show");
          popup.classList.remove("modal-error"); 
        }
      }
    });