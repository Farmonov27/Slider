const slider_main = new Swiper('.slider_main',{
   freeMode: true,
   centeredSlides: true,
   slidesPerView:3,
   mousewheel: true,
   parallax: true,
   breakpoints:{
    0:{
        slidesPerView: 3.5,
        spaceBetween: 20
    },
    680:{
        slidesPerView: 3.5,
        spaceBetween: 60
    }
   } 
})


const slider_bg = new Swiper('.slider_bg',{
    centeredSlides: true,
    slidesPerView:3,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
 })
  slider_main.controller.control = slider_bg

document.querySelectorAll('.slider__item').forEach(item=> {
    item.addEventListener('click', event =>  {
        item.classList.toggle('opened')
    })
})

let desc = document.querySelector('.description')
slider_main.on('slideChange', e => {
    slider_main.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})