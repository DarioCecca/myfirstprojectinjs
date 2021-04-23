$(document).ready(function(){
//Gestione della scrollbarr
$(window).scroll(function(){

        var ph=$(this).scrollTop()

        console.log(ph)

        if(ph>520)
        $("nav").addClass("dinamichangenav")

        else
        $("nav").removeClass("dinamichangenav")


        if(ph>650)
        {
        $("#camera").addClass("dasinistra")
            $("#paranim").addClass("dadestra")
        }
        else
        {
        $("#camera").removeClass("dasinistra")
        $("#paranim").removeClass("dadestra")
        }

        if(ph>4300)
        {
          $('.card-1').addClass('moveFromLeft');
          $('.card-2').addClass('moveFromBottom');
          $('.card-3').addClass('moveFromRight');
        }
        else
        {
          $('.card-1').removeClass('moveFromLeft');
          $('.card-2').removeClass('moveFromBottom');
          $('.card-3').removeClass('moveFromRight');
        }

})

//Effetto su BTN nav
$("#btnnav").click(function(){

    $(this).toggleClass("change")

})

//CARD DINAMICHE

var img=["images/nature.jpeg","images/wedding.jpeg","images/party.jpeg",
"images/business.jpeg","images/fashion.jpeg","images/family.jpeg"]

var titles = ["Nature Photography","Wedding Photography",
"Party Photography","Business Photography","Fashion Photography","Family Photography"]

img.forEach(function(v,k){

  //  alert(titles[k])

  var ele =$("<div class='col-lg-4 col-sm-6 my-5'></div>")

var cont ="<div class='card border-0 card-shadow'><img src="+v+" class='card-img'><div class='card-img-overlay'><h5 class='text-white text-uppercase font-weight-bold p-2 heading'>"+titles[k]+"</h5></div></div>";

ele.html(cont)


  $("#mycards").append(ele)
 // ele.html()


})

//GALLERY
$("#navgallery li").click(function(){

    var category = $(this).attr("category")
   // alert(category)
   if(category == "all")
   $(".filter").show(300)
   else
   {
    $(".filter").not("."+category).hide(300)
    $(".filter").filter("."+category).show(300)

   }

   $(this).addClass("active-item").siblings().removeClass("active-item")
})


//STAMPA GALL IMAGES DINAMICA

var cat= ["free","new", "pro"]

var gallimg=[]

for(var i=1; i<16; i++)
{
  gallimg.push("images/img"+i+".jpeg")
}


gallimg.forEach(function(v,k){

  var randindex = Math.floor(Math.random()*cat.length)

  var randcat = cat[randindex]
     
  var ele = $("<div class='filter'></div>")

  ele.addClass(randcat)

  ele.html("<img src = "+v+" width='300'>")

  $("#gallery").append(ele)



})




//END APPLICATION
})