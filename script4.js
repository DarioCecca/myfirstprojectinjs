$(window).scroll(function(){

  let position =   $(this).scrollTop()

  //console.log(position)

  if(position>500)
  $("nav").addClass("dinamichangenav")

  else
  $("nav").removeClass("dinamichangenav")


  if(position>550)
  {
    $("#camera").addClass("dasinistra")
    $("#paranim").addClass("dadestra")
  }

  else
  {
    $("#camera").removeClass("dasinistra")
    $("#paranim").removeClass("dadestra")
  }
 
  if(position>4300)
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





$("#bottone").click(function(){

    $(this).toggleClass("change")
})

//Blocco Cards
let obj1 = {
  url :"images/nature.jpeg",
  name:"Nature Photography"
}
let obj2 = {
  url :"images/wedding.jpeg",
  name:"Wedding Photography"
}
let obj3 = {
  url :"images/party.jpeg",
  name:"Party Photography"
}
let obj4 = {
  url :"images/business.jpeg",
  name:"Business Photography"
}
let obj5 = {
  url :"images/fashion.jpeg",
  name:"Fashion Photography"
}
let obj6 = {
  url :"images/family.jpeg",
  name:"Family Photography"
}


let images = [obj1,obj2,obj3,obj4,obj5,obj6]

images.forEach((v,k)=>{

  let ele = $("<div class='col-lg-4 col-sm-6 my-5'></div>")

  let cont = `<div class="card border-0 card-shadow">
  <img src=${v.url} class="card-img">
  <div class="card-img-overlay">

    <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
      ${v.name}
    </h5>
  </div>
</div>`

ele.html(cont)

    $("#mycards").append(ele)
})


//Gallery
let categories = ["new","free","pro"]
let imggall = []

for(let i = 1; i<=16; i++)
{
  let url = `images/img${i}.jpeg`
  imggall.push(url)
}

imggall.forEach((v,k)=>{

  let randkey = Math.floor(Math.random()*categories.length) 
  let randcat = categories[randkey]

  let e = $("<div class='filter'></div>")
  e.addClass(randcat)

  e.html(`<img src=${v} width='300'>`)

  $("#gallery").append(e)
})

$("#mygall li").click(function(){

    let cat  = $(this).attr("category")

    if(cat == "all")
    $(".filter").show(350)

    else
    {
      $(".filter").not("."+cat).hide(300)
      $(".filter").filter("."+cat).show(300)
    }
})

$(".filter").mouseenter(function(){
  $(this).css("opacity",".6")

})

$(".filter").mouseleave(function(){
  $(this).css("opacity","1")
})

//RECENSIONI
  let rece1 = {
    img:"images/customer1.jpeg",
    desc:"Sono stato malissimo brutto non lo consiglio vi denuncio",
    nome:"Luisa",
    voto:1
  }

  let rece2 = {
    img:"images/customer2.jpeg",
    desc:"Sono stato benissimo bello  lo consiglio bravi",
    nome:"Walter",
    voto:5
  }
  let rece3 = {
    img:"images/customer3.jpeg",
    desc:"Insomma...si bravini ...poteva essere meglio però vabbè",
    nome:"Giovanna",
    voto:3
  }

  let recensioni = [rece1,rece2,rece3]


  const addstar= (ngiri)=>{
  
  }

  recensioni.forEach((v,k)=>{
    let element = $("<li data-target='#customer-carousel' data-slide-to="+k+"></li>")
    let carouselitem =$("<div class='carousel-item text-center'></div>")
    if(k==0)
    {
       element.addClass("active")
       carouselitem.addClass("active")
    }

    carouselitem.html(`<img src=${v.img} class="img-fluid rounded-circle m-5" width="150">
    <blockquote class="blockquote text-white">
    <p class="mb-5">${v.desc}</p>
  </blockquote>
  <h5 class="text-light text-uppercase font-weight-bold mb-3">${v.nome}</h5>
    `)
//console.log(v.voto)
    
   let elencostar = $("  <ul class='list-inline mb-5'></ul>")
  //  addstar(v.voto)
  // for(let i = 1; i<=v.voto; i++)
  // {
  //   //alert(i+" "+k)

  // }
  for(let i = 1;i<=v.voto; i++)
    {
      let star = $(`<li class="list-inline-item">
      <i class="fas fa-star text-warning"></i>
    </li>`)
//console.log(i+" "+k)
        elencostar.append(star)
    } 

    carouselitem.append(elencostar)

   
    $(".carousel-indicators").append(element)
    $(".carousel-inner").append(carouselitem)
  })

