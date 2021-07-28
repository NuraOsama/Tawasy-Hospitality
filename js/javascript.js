// alert reset contact
function myFunction() {
    alert("Do you really want to reset the form?");
    //clear registration
$(document).ready(function () {

    $("#rest").click(function () {
        $(".clear").val('');
        

    });
});
  }

  //navbar collapse
(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());

  


