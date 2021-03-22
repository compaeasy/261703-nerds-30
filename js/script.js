	//Modal

  var modal = document.getElementById("modal-contacts");
  var	openButton = document.getElementById("open-button");
  var closeButton = document.getElementById("close-button");
  
  openButton.addEventListener("click", function() {
	  modal.classList.toggle("open");
  });

  closeButton.addEventListener("click", function() {
	  modal.classList.toggle("open");
  });

  const list = document.querySelectorAll(".site-list__item a, .main-nav__basket")
  list.forEach(item =>{ 
    item.addEventListener("click", (e) =>{
      list.forEach(el=>{ el.classList.remove("_active"); });
      item.classList.add("_active")
    })
  })

