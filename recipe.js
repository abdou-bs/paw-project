let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
   searchbar.classList.remove('active')
   searchbtn.classList.remove('fa-times')
   menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    loginform.classList.remove('active');
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
    
}

searchbtn.addEventListener('click', ()=>{
    searchbtn.classList.toggle('fa-times')
    searchbar.classList.toggle('active')
    document.querySelector('header').classList.add('active');
    
});



let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    document.querySelector('header').classList.add('active');

});


