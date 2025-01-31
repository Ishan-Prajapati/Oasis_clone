const menu = document.querySelector(".responsive")
const ham = document.querySelector('.hamberg')
const xmark = document.querySelector('.menu-xmark')
const shopbtn = document.querySelector('.shop-btn')
const shopmenu = document.querySelector('.shop-container')
const faqs_select =document.querySelectorAll('.faqs-select')

shopbtn.addEventListener('click',()=>{
    shopmenu.classList.toggle("visible")
})

ham.addEventListener('click',()=>{
    menu.classList.toggle("active")
    // xmark.classList.toggle("menu-xmarkactive")
    ham.classList.toggle('visible')
})
faqs_select.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('visible')
    // plusicon.classList.toggle('non')
  })
})
// xmark.addEventListener('click',()=>{
//     menu.classList.toggle("visible")
//     ham.classList.toggle("visible")
//     xmark.classList.toggle('visible')
// })







// slick slider start
$('.p5-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 614,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//   slick slider end


// slider-2
// slick slider start
$('.p5-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 614,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// slider for page -7

