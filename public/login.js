var signupBtn = document.querySelector('.signupBtn');
var loginBtn = document.querySelector('.loginBtn');
var signup = document.getElementById('signup');
var login = document.getElementById('login');

var inp = document.getElementsByTagName('input');
var label = document.querySelectorAll('label');
var body = document.body;

// click login
var loginClick = document.querySelector('.login');
var form = document.querySelector('.form-wrapper');

loginClick.addEventListener('click',openLogin,false);
body.addEventListener('click',closeLogin,false);

function openLogin(e){
    form.style.display = 'block';
}
function closeLogin(e){
    console.log(e)
    if( e.path.length == '6'){
        form.style.display = 'none';
    }
}


// signup & login
signupBtn.onclick = function(){
    signup.style.display = 'block';
    signupBtn.classList.add('active');
    login.style.display = 'none';
    loginBtn.classList.remove('active');
}
loginBtn.onclick = function(){
    login.style.display = 'block';
    loginBtn.classList.add('active');
    signup.style.display = 'none';
    signupBtn.classList.remove('active');
}

// textarea
for(var i=0;i<inp.length;i++){
    inp[i].onkeyup = function(e){
        if(this.value !== ""){
            this.previousElementSibling.classList.add('active');
        }else{
            this.previousElementSibling.classList.remove('active');
        }
    }
}

// navbarMenu
var menuIcon = document.querySelector('.menu-icon');
var navbarMenu = document.querySelector('.navbarMenu');
var body = document.body;

menuIcon.addEventListener('click',openMenu,false);
body.addEventListener('click',closeMenu,false);

function openMenu(e){
    navbarMenu.style.display = 'block';
}
function closeMenu(e){
    if(e.target.nodeName !== "A" && e.target.nodeName !== "I"){
        navbarMenu.style.display = 'none';
    }
}

// log out
var logOut = document.querySelector('.log-out');
logOut.addEventListener('click',out,false);
var down = document.querySelector('.fa-caret-down');

function out(){
    form.style.display = 'block';
    userMenu.style.display = 'none';
    loginClick.style.display = 'block';
    user.innerHTML = '';
    down.style.display = 'none';
    isLogin = false;
}

// down menu

var downMenu = document.querySelector('.downMenu');
down.addEventListener('click',dropDown,false);

var isShow = false;
var c = null;

function dropDown(e){
    e.stopPropagation();
    isShow = !isShow;
    downMenu.style.display = isShow ? 'block' : 'none';   
}

document.onclick = function(){
    isShow = false;
    downMenu.style.display = 'none';
}