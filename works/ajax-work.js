var xhr = new XMLHttpRequest();
var btn1 = document.querySelector('.btn1');
var user = document.getElementById('user');
var userMenu = document.querySelector('.fa-caret-down');
var isIn = document.querySelectorAll('.is-in');
console.log(btn1)
btn1.onclick = function(e){
    console.log(1)
    e.preventDefault();
    var mail = document.getElementById('mail').value;
    var pwd = document.getElementById('pwd').value;
    var account = {};
    account.email = mail;
    account.password = pwd;
    xhr.open('POST','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('content-type','application/json')
    var data = JSON.stringify(account);
    xhr.send(data);
    
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 400){
            var callBackData = JSON.parse(xhr.responseText);
            console.log(callBackData);
            if(callBackData.message == '帳號註冊成功'){
                alert('帳號註冊成功');
                form.style.display = 'none';
                userMenu.style.display = 'block';
                loginClick.style.display = 'none';
                console.log(mail);
                var userName = mail.split('@');                              
                user.innerHTML = userName[0];
                for(var i=0;i<isIn.length;i++){
                    console.log(isIn[0])
                    isIn[i].classList.remove('n-login')
                };                
            }else if(callBackData.message == "Email 格式不正確"){
                alert('Email 格式不正確')
            }else{
                alert('此帳號已被註冊')
            }
        }
    }
}

var xhr1 = new XMLHttpRequest();
var btn2 = document.querySelector('.btn2');

btn2.onclick = function(e){
    e.preventDefault();
    var mailL = document.getElementById('mailL').value;
    var pwdL = document.getElementById('pwdL').value;
    var account = {};
    account.email = mailL;
    account.password = pwdL;
    xhr1.open('POST','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr1.setRequestHeader('content-type','application/json')
    var data = JSON.stringify(account);
    xhr1.send(data);
    console.log(mail);
    xhr1.onload = function(){
        if(xhr1.status >= 200 && xhr1.status < 400){
            var callBackData = JSON.parse(xhr1.responseText);
            console.log(callBackData);
            if(callBackData.message == '登入成功'){
                alert('登入成功');
                form.style.display = 'none';
                userMenu.style.display = 'block';
                loginClick.style.display = 'none';
                var userName = mailL.split('@');
                user.innerHTML = userName[0];
                for(var i=0;i<isIn.length;i++){
                    console.log(isIn[0])
                    isIn[i].classList.remove('n-login')
                };
            }else if(callBackData.message == "此帳號不存在或帳號密碼錯誤"){
                alert('此帳號不存在或帳號密碼錯誤')
            }
        }
    }
}
