$(document).ready(function(){
//Effetto su btn menu
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
      });

//Effetto su scroll nav 
$(window).scroll(function(){

    var ph = $(this).scrollTop()
    if(ph>200)
  $("nav").addClass("cust-nav")

    else
    $("nav").removeClass("cust-nav")
})



})