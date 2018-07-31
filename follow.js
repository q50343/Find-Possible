var cancle = document.querySelector('.cancle');
var stop = document.querySelector('.stop');
var stopFollow = document.querySelector('.stop-wrapper');
var body = document.body;
var follow = document.querySelectorAll('.follow-follow');

cancle.addEventListener('click',close,false);
stop.addEventListener('click',close,false);
body.addEventListener('click',close1,false);


// follow person
var personList = [
    {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KNHBxDrYS-F3qt0gi6WHRBz0WaQFTCz8f663mowe978XCqLCuw',
        name:'chnaksdegs'
    },
    {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF5qdaTOD6dONzMQOG-8iTEQL7OG5q2zvd63ZfMeau6qFrojDsw',
        name:'zdtkztk'
    },
    {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RWv3KfXcBvJiEGhGdTf2TuhileZOfMt3uEfJIJiSdyydzQXt',
        name:'affg'
    },
    {
        url:'https://p0.meituan.net/gpa/0a4b8a697382db09fc654af8674d2c6678526.jpg%40400w_400h_1e_1c_1l%7Cwatermark%3D0',
        name:'jk'
    },
    {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzfJ2Sw45vcYPIYMfDfUuGuLOIugTO4Pef9ZIC5IxnJUykZV3',
        name:'acfa'
    },
    {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRofgALi9M_hzjKtt4xXjh9iFNTRz7311G-0n93PxUwMCbyC7',
        name:'iyhhj'
    }   
]

// follow list放入html
var wrapper = document.querySelector('.wrapper');

function updateList(){
    
    for(var i=0;i<personList.length;i++){
        var person = document.createElement('div');
        person.classList.add('personClass');
        
        var followHead = document.createElement('div');
        followHead.style.backgroundImage = 'url("' + personList[i].url +'")';
        followHead.classList.add('follow-head');
        
        var followName = document.createElement('div');
        followName.classList.add('follow-name');
        followName.innerHTML = personList[i].name;
        
        var followFollow = document.createElement('div');    
        
        person.appendChild(followHead);
        person.appendChild(followName);
        person.appendChild(followFollow);
        followFollow.outerHTML = '<div class = "follow-follow" data-check = "yes" >follow</div>';
        wrapper.appendChild(person);
    }   
}
updateList();

// stop follow
var followFollowNew = document.querySelectorAll('.follow-follow');
var removeHead = document.querySelector('.remove-head');
var removeQus = document.querySelector('.remove-qus');
var stopCheck = true;

for(var i=0;i<followFollowNew.length;i++){
    
    followFollowNew[i].onclick = function(){
    
        // 已經follow
        if(this.dataset.check == 'yes'){
            var now = this;
            var personN = this.previousElementSibling.previousElementSibling.style.backgroundImage;
            removeHead.style.backgroundImage = personN;
            
            var personQ = this.previousElementSibling.innerHTML;
            removeQus.innerHTML = 'Stop follow ' + personQ;
            
            var point = this;
            stopFollow.style.display = 'block'; 
            
            stop.onclick = function(){
                console.log(point)
                point.style.color = '#5793cf';
                point.style.border = '1px solid #5793cf';
                point.style.backgroundColor = '#fff';
                now.dataset.check = 'no';
                console.log(now.dataset.check)
            }
        }
        // 再次follow
        if(this.dataset.check == 'no'){
            this.style.backgroundColor = '#5793cf';
            this.style.color = '#fff';
            this.dataset.check = 'yes';
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
