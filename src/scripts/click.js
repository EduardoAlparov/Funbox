let menuItem = document.querySelectorAll('.menu__item');

for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function (event){
    event.preventDefault();
    event.currentTarget.classList.toggle("active");
    event.currentTarget.addEventListener("mouseout", function( event ) {
      if (event.currentTarget.classList.contains("active") === true) {
        event.currentTarget.classList.add('activeafter');
      } else {
        event.currentTarget.classList.remove('activeafter');
      };
      event.currentTarget.addEventListener('click', function(event) {
        event.currentTarget.classList.remove('activeafter');
      })
    });
  }); 
};

let blueLink = document.querySelectorAll('.block__desc-link');

for (var i = 0; i < blueLink.length; i++) {
  blueLink[i].addEventListener("click", function (event){
    event.preventDefault();
    event.currentTarget.parentElement.classList.add('active');
  }); 
};
