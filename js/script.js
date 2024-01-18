// Делаем табы
document.querySelectorAll(".photo__button").forEach((el, i) => {
    el.addEventListener("click", ()=> {
        if (!el.classList.contains("photo__active")) {
            document.querySelectorAll(".photo__button").forEach((element) => {
                element.classList.remove("photo__active");
            });
            document.querySelectorAll(".photo__wrapper").forEach((element) => {
                element.classList.remove("photo__open");
            });
            el.classList.add("photo__active");
            document.querySelectorAll(".photo__wrapper")[i].classList.add("photo__open");
        }
    });
});

// Делаем реакцию на скролл
const pag1 = document.querySelector(".tableswip").getBoundingClientRect().top;
const pag2 = document.querySelector(".photo").getBoundingClientRect().top;
const pag3 = document.querySelector(".start").getBoundingClientRect().top;
const elem = document.querySelectorAll(".header__element");

console.log(pag1, pag2, pag3)
function clean(item) {
    item.classList.remove("header__active");
};

window.addEventListener("scroll", ()=> {
    // Задний фон header
    if (scrollY > 0) {
        document.querySelector(".header").style.backgroundColor = "#181823";
    }
    else {
        document.querySelector(".header").style.backgroundColor = null;
    }
    // Меню елементы
    if (scrollY < pag1) {
        elem.forEach(clean);
        elem[0].classList.add("header__active");
        console.log(scrollY)
    } else if (scrollY >= pag1 && scrollY < pag2) {
        elem.forEach(clean);
        elem[1].classList.add("header__active");
        console.log(scrollY)
    } else if ((scrollY+50) >= pag2 && scrollY < pag3) {
        elem.forEach(clean);
        elem[2].classList.add("header__active");
        console.log(scrollY)
    } else {
        elem.forEach(clean);
        elem[3].classList.add("header__active");
        console.log(scrollY)
    }
})

//burger 
document.querySelector(".header__burger").addEventListener('click', ()=> {
    document.querySelector('.header__burger').classList.toggle("openbur");
    document.querySelector('.header__menu').classList.toggle('header__menuactive');
    document.querySelector('.header__list').classList.toggle('header__listactive');
    document.querySelector('body').classList.toggle('close');

})