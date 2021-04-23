$(document).ready(function(){


    $(".pricing a").click(function(e){

e.preventDefault() //disabilita la funzionalità di base

    })

    $("#tornasu").css("cursor","pointer")
  
    $("#tornasu").click(function(){
      $("body,html").animate({scrollTop:0},500,"easeInOutSine")
    })


$("#navbarNav a").each(function(k,v){

$(this).attr("href","#"+k)
//i #1-7 saranno l'id di qualcosa

$(this).click(function(){

    let idhref = $(this).attr("href")

    if(idhref == "#0")
    $("body,html").animate({scrollTop:0},500,'easeInOutQuint')

    else
    {
 let heightposition = $(idhref).offset().top-$("nav").height()


    $("body,html").animate({scrollTop:heightposition},500,'easeInOutQuint')

    }
   
})


})


$("section").each(function(k,v){

let idval = k+1

$(this).attr("id",idval)




})


//bottone torna su







})