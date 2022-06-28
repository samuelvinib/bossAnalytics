const menu_hamb = document.querySelector("[data-hamb]");
const menu1 = document.querySelector("[data-menu]");
menu_hamb.addEventListener('click', randonclick);
function randonclick(){
    menu_hamb.classList.toggle("active");
    menu1.classList.toggle("active");
}

const target = document.querySelectorAll('[data-anime]');
function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    })
}
animeScroll();
window.addEventListener('scroll',function(){
    animeScroll();
})
function closeMenu(){
    menu_hamb.classList.remove("active");
    menu1.classList.remove("active");
}