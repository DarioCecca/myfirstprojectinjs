$(document).ready(function(){

  $("#tornasu").css("cursor","pointer")
  
  $("#tornasu").click(function(){
    $("body,html").animate({scrollTop:0},500,"easeInOutSine")
  })

    $("header").attr("id",0)

$("#navbarNav a").each(function(k,v){

          
            $(this).attr("href","#"+k)

            $(this).click(function(){

                var link= $(this).attr("href")
              //  alert(link)
        var pos =  $(link).offset().top-$("nav").height()

        $("body,html").animate({scrollTop:pos},1000,"easeInOutSine")
      //  alert(pos)
            })
})

$("section").each(function(k,v){

        var idattr= k+1
        $(this).attr("id",idattr)
})


})