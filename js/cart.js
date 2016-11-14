
var buy = document.querySelector(".buy");
var modalBuy = document.querySelector(".modal-buy");
var closeNote = document.querySelector(".modal-buy-close");


  buy.addEventListener("click", function(event) {
    event.preventDefault();
    modalBuy.classList.add("modal-buy-show");
  })

  closeNote.addEventListener("click", function(event) {
    event.preventDefault();
    modalBuy.classList.remove("modal-buy-show");
  });
