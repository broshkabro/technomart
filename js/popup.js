var link = document.querySelector(".mail-to");
        var popup = document.querySelector(".modal-content");
        var close = document.querySelector(".modal-content-close");
        var nameField = popup.querySelector("[name=name]"); 
        var mailField = popup.querySelector("[name=email]"); 
        var answerField = popup.querySelector("[name=answer]");
        var form = popup.querySelector("form");
        var storage = localStorage.getItem("nameField");        

        link.addEventListener("click", function(event) {
          event.preventDefault();
          popup.classList.add("modal-content-show"); 
          if (storage) {
          nameField.value = storage;
          mailField.focus();
          } else {
          nameField.focus();
          }    
        });          

        close.addEventListener("click", function(event) {
          event.preventDefault();
          popup.classList.remove("modal-content-show");
          popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function(event) {
          if (!nameField.value || !mailField.value || !answerField.value) {
            event.preventDefault();                     
            popup.classList.add("modal-error");  
          } else {
            localStorage.setItem("nameField", nameField.value);
            localStorage.setItem("mailField", mailField.value);
          }
        });

        window.addEventListener("keydown", function(event) {
          if (event.keyCode===27) {
            if (popup.classList.contains("modal-content-show")) {
              popup.classList.remove("modal-content-show");
              popup.classList.add("modal-error"); 
            }
          }
        });