var link=document.querySelector(".mail-to"),popup=document.querySelector(".modal-content"),closeForm=document.querySelector(".modal-content-close"),buy=document.querySelector(".buy"),modalBuy=document.querySelector(".modal-buy"),closeNote=document.querySelector(".modal-buy-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),email=popup.querySelector("[name=email]"),answer=popup.querySelector("[name=answer]"),storage=localStorage.getItem("login");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),storage?(login.value=storage,email.focus()):login.focus()}),form.addEventListener("submit",function(a){login.value&&email.value&&answer.value?localStorage.setItem("login",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),closeForm.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),buy.addEventListener("click",function(a){a.preventDefault(),modalBuy.classList.add("modal-buy-show")}),closeNote.addEventListener("click",function(a){a.preventDefault(),modalBuy.classList.remove("modal-buy-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});