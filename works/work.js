var signupBtn = document.querySelector('.signupBtn');
var loginBtn = document.querySelector('.loginBtn');
var signup = document.getElementById('signup');
var login = document.getElementById('login');

var inp = document.getElementsByTagName('input');
var label = document.querySelectorAll('label');
var body = document.body;

// click login
var nLogin = document.querySelectorAll('.n-login');
var form = document.querySelector('.form-wrapper');
var loginClick = document.querySelector('.login');
body.addEventListener('click',closeLogin,false);


for(var i=0;i<nLogin.length;i++){
    nLogin[i].onclick = function(){
        if( this.classList.contains('n-login')){
            form.style.display = 'block'; 
        }else if(!this.classList.contains('n-login')){
            form.style.display = 'none';
        }
    }
}

function closeLogin(e){
    console.log(e)
    if( e.path.length == '5'){
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

//form textarea
for(var i=0;i<inp.length;i++){
    inp[i].onkeyup = function(e){
        
        if(this.value !== ""){
            this.previousElementSibling.classList.add('active');
        }else{
            this.previousElementSibling.classList.remove('active');
        }
    }
}

// down menu
var down = document.querySelector('.fa-caret-down');
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

// follow
var follow = document.querySelector('.follow');
follow.addEventListener('click',getFollowInfo,false);
follow.addEventListener('click',checkFollow,false);
var checkF = false;

function getFollowInfo(){
    var head = document.querySelector('.head').style.backgroundImage;
    var followName = document.querySelector('.name').innerHTML;
    var url = head.split('"');
    localStorage.setItem('follow-head',url[1]);
    localStorage.setItem('follow-name',followName);
}

function checkFollow(){
    if( this.classList.contains('n-login')){
        return
    }
    checkF = !checkF;
    checkF? follow.classList.add('follow-active') : follow.classList.remove('follow-active')
}

// heart
var heart = document.querySelector('.heart');
var heartNum = document.querySelector('.heart-num');
var heartNumNow = heartNum.innerHTML;
var heartCheck = false;
heart.addEventListener('click',heartClick,false);

function heartClick(){
    if(user.innerHTML !== ''){
        heartCheck = !heartCheck;
        console.log((parseInt(heartNumNow))+ 1);
        heartCheck? heartNum.innerHTML = (parseInt(heartNumNow))+ 1 : heartNum.innerHTML = ' '+ (parseInt(heartNumNow));
        heartCheck? heart.style.color = 'rgb(247, 91, 91)':heart.style.color = '#bbb'
    }   
}

// comment
var comment = document.querySelector('.comment');
var commentText = document.querySelector('.comment-text');
var commentNum =document.querySelector('.comment-num');
var commentNumNow = commentNum.innerHTML;
comment.addEventListener('click',commentClick,false);
commentText.addEventListener('keydown',textNum,false);
var innerWrapper = document.querySelector('.inner-wrapper');

// 打開commentText
function commentClick(){
    if(comment.classList.contains('n-login')){
        commentText.style.display = 'none'
    }else{
        commentText.style.display = 'block'
    }    
}
// commentText高度變2
function textNum(e){
    if(e.target.textLength > e.target.cols){
        commentText.rows = '2'
    }
    // 出現留言
    if(e.keyCode == 13){
        e.preventDefault()
        if(commentText.value !== ""){
            var newResponseBox = document.createElement('div');
            var text = commentText.value;
            var cleanfix = document.createElement('div');
            cleanfix.classList.add('cleanfix');
            var newHead = document.createElement('div');
            newHead.classList.add('head');
            newHead.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgVkFSn7OUyoXx9b4BGB1Z-9hx_7WDXUelEoaRFkViWwM_e9h)';
            var newName = document.createElement('div');
            newName.classList.add('name');
            newName.innerHTML = user.innerHTML;
            innerWrapper.appendChild(newResponseBox);
            newResponseBox.appendChild(cleanfix);
            cleanfix.appendChild(newHead);
            cleanfix.appendChild(newName);
            
            var cleanfix2 = document.createElement('div');
            cleanfix2.classList.add('cleanfix');
            newResponseBox.appendChild(cleanfix2);
            
            var response = document.createElement('div');
            cleanfix2.appendChild(response);
            response.outerHTML = '<div class="response new-response">'+ text +'</div><textarea class = "edit-text"></textarea><div class = "ellipsis"><i class="fas fa-ellipsis-h"></i><div class = "select"><div class = "edit"><i class="fas fa-edit"> </i> edit</div><div class = "deleteT"><i class="fas fa-trash-alt"></i> delete</div></div></div> '
            commentText.value = null;
            commentNumNow ++;
            commentNum.innerHTML = ' ' + (parseInt(commentNumNow)) ;
            var edit = document.querySelectorAll('.edit');
            var select = document.querySelectorAll('.select');
            var deleteT = document.querySelectorAll('.deleteT');
            var newResponse = document.querySelectorAll('.new-response');
            
            // select
            var ellipsis = document.querySelectorAll('.fa-ellipsis-h');
            for(let i=0;i<ellipsis.length;i++){
                ellipsis[i].onclick = function(){
                    console.log(i);
                    ellipsis[i].style.color = 'rgb(101, 107, 121)';                
                    select[i].style.display = 'block';
                }
                document.onclick = function(e){
                    if(e.target.className !== "fas fa-ellipsis-h"){
                        console.log(e.target.className)
                        for(let i=0;i<select.length;i++){
                            select[i].style.display = 'none';
                            ellipsis[i].style.color = '#eee'; 
                        }
                    }
                }
                
                // edit
                for(let i=0;i<edit.length;i++){
                    edit[i].onclick = function(){
                        console.log(i)
                        ellipsis[i].style.display = 'none';
                        select[i].style.display = 'none';
                        var textR = newResponse[i].innerHTML;
                        newResponse[i].style.display = 'none';
                        console.log(this.parentElement.previousElementSibling.parentElement.previousElementSibling);
                        var textBox = this.parentElement.previousElementSibling.parentElement.previousElementSibling;
                        textBox.style.display = 'block';                   
                        textBox.value = textR;
                        
                        textBox.onkeydown = function(e){
                            if(e.keyCode == 13){
                                var edit2 = textBox.value;
                                textBox.style.display = 'none';
                                newResponse[i].style.display = 'block';
                                newResponse[i].innerHTML = edit2;
                                ellipsis[i].style.display = 'block';
                                ellipsis[i].style.color = '#eee';
                                
                                ellipsis[i].onmouseover = function(){
                                    ellipsis[i].style.color = 'rgb(101, 107, 121)';
                                }
                                // ellipsis[i].onmouseout = function(){
                                //     ellipsis[i].style.color = '#eee';
                                // }
                            }
                        }
                    }               
                }   
                
                // deleteT
                for(let i=0;i<deleteT.length;i++){
                    deleteT[i].onclick = function(){
                        console.log(i)
                        var deleteTBox = this.parentElement.parentElement.parentElement.parentElement;
                        console.log(deleteTBox);
                        
                        function removeAllChild()  {                     
                            while(deleteTBox.hasChildNodes()){ 
                                deleteTBox.removeChild(deleteTBox.firstChild);                        
                            }   
                        }
                        removeAllChild();     
                        commentNumNow --;
                        commentNum.innerHTML = ' ' + (parseInt(commentNumNow)) ;
                    }
                }
            }
        }
    }
}    

// log out
var logOut = document.querySelector('.log-out');
logOut.onclick = function(e){
    console.log(e);
    for(var i=0;i<nLogin.length;i++){
        nLogin[i].classList.add('n-login') 
    }   
    commentText.style.display = 'none';
    form.style.display = 'block';
    userMenu.style.color = "#212529";
    loginClick.style.display = 'block';
    user.innerHTML = '';
}
