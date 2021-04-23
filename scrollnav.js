$("#myNavbar a").each(function(k,v){    
    $(this).attr("href","#"+k)

     $(this).click(function(){

        var ide = $(this).attr("href")
        var os= $(ide).offset().top

       // $(".navbar-brand").animate({marginLeft:"300px"},1000,"easeInOutSine")


if($(this).text()=="home")
        $("body,html").animate({scrollTop:os},2000,"easeInOutSine")
else
        $("body,html").animate({scrollTop:os-$(".navbar").height()},800,"easeInOutSine")

   
    }) 
})

$("header").attr("id",0)

$("section").each(function(k,v){

        var ide = k+1
        $(this).attr("id",ide)
})

