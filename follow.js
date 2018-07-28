var cancle = document.querySelector('.cancle');
var stop = document.querySelector('.stop');
var stopFollow = document.querySelector('.stop-wrapper');
var body = document.body;
var follow = document.querySelectorAll('.follow-follow');

cancle.addEventListener('click',close,false);
stop.addEventListener('click',close,false);
body.addEventListener('click',close1,false);

//出現stop follow
for(var i=0;i<follow.length;i++){
    
    follow[i].onclick = function(){
        console.log(this)
        var point = this;
        stopFollow.style.display = 'block'; 
        
        stop.onclick = function(){
            console.log(point)
            point.style.color = '#5793cf';
            point.style.border = '1px solid #5793cf';
            point.style.backgroundColor = '#fff'
        }
    }    
}

// 關掉stop follow
function close(){
    stopFollow.style.display = 'none';   
}
function close1(e){
    if(e.path[1] == body){
        stopFollow.style.display = 'none';
    }
}


