$(()=> {
  $(".owl-brands").owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    dots: false,
        responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            responsive: {
            0: {
                items: 2,
                nav: true
            },
            500: {
                items: 2,
                nav: true,
                margin: 0
            },
            601: {
                items: 4,
                nav: true
            }
        }
  })
})

