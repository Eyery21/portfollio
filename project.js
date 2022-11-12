if ($(".mix-container").length > 0) {   
    var mixer = mixitup('.mix-container');
 } 
    
 $(document).ready(function() {
    $("#modale_ouvrir").click(function() {
      $(".masque").fadeIn();
      $(".message").slideDown();
    });
  
    $("#modale_fermer").click(function() {
      $(".message").slideUp();
      $(".masque").fadeOut();
    });
  });