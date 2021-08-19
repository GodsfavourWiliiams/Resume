/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// IMG
gsap.from(['.home__img','.nav__toggle','.intern-logo'], {opacity: 0, duration: 2, delay: 2, x: 60})


// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 2, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 2, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 2, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration:2, delay: 4, y: 25, ease:'expo.out', stagger: .2})

// contact
gsap.from(['.about','.contact'], {opacity: 0, duration: 2, delay: 2, x: 60})