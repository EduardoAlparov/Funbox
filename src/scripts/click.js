const windowWidth = document.documentElement.clientWidth; 
let menuItem = document.querySelectorAll('.menu__item');
let blueLink = document.querySelectorAll('.block__desc-link');

if (windowWidth > '480') {
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


  for (var i = 0; i < blueLink.length; i++) {
    blueLink[i].addEventListener("click", function (event){
      event.preventDefault();
      event.currentTarget.parentElement.classList.add('active');
    }); 
  };
} else { document.addEventListener('click', (e) => {
    event.preventDefault();
    e.currentTarget.classList.toggle("active");
  });
}  