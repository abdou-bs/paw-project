let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
   searchbar.classList.remove('active')
}

searchbtn.addEventListener('click', ()=>{
    searchbtn.classList.toggle('fa-times')
    searchbar.classList.toggle('active')
});



let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let closeform = document.querySelector('#form-close');

formbtn.addEventListener('click', ()=>{
    loginform.classList.add('active');
});
closeform.addEventListener('click', ()=>{
    loginform.classList.remove('active');
});