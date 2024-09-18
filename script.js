
let navbar=document.querySelector(".nav-links")
let humbergur=document.querySelector(".humburger")
let icons=document.querySelectorAll("i")

humbergur.addEventListener('click', function(event){
    let isvible=navbar.getAttribute('data-visible');
    if(isvible == 'true'){
        navbar.setAttribute('data-visible','false');
        icons[0].setAttribute('data-visible','true');
        icons[1].setAttribute('data-visible','false')
    }
    else
    {
        navbar.setAttribute('data-visible','true');
        icons[0].setAttribute('data-visible','false');
        icons[1].setAttribute('data-visible','true')
    }
})
