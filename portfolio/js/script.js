
//mobile menu

let btn = document.querySelector('.nav-icon');
btn.addEventListener("click", clickEvent);
let list = document.querySelector('.nav-links');

function clickEvent() {
    list.classList.toggle("responsive");
}

// active scroll

const link = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll(".scroll");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY < section[len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active")
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// portfolio

var $grid = $('.grid').isotope({
});
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// testimonial slider

$('.owl-carousel').owlCarousel({
    responsive:false,
    dots: false,
    margin:10,
    loop: true,
    nav: true,
    items: 1,
    navText: ["<button id='prev' class='btn-arrow prev-slide' type='button'><i class='bi bi-arrow-left'></i></button>", "<button id='next' class='btn-arrow next-slide' type='button'><i class='bi bi-arrow-right'></i></button>"],
 

})

