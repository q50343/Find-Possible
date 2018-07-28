// home
var picture = document.querySelector('.picture');
var picName = document.querySelector('.picture-name');
var author = document.querySelector('.author');
var index = 0;

var img = [
    {
        url:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4da14b25035593.5633e393e33d2.jpg',
        author:'Peechaya Burroughs',
        pictureName:'self-expression'
    },
    {
        url:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4854d427247653.56361fbb55a77.jpg',
        author:'Peechaya Burroughs',
        pictureName:'food (2)'   
    },
    {
        url:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64b06754145657.5609313ddf2a9.jpg',
        author:'Hans Findling',
        pictureName:'white.'   
    },
    {
        url:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/63039451727031.59030561db94c.jpg',
        author:'Joel Filipe',
        pictureName:'White Harmony'   
    }
];
setInterval(function(){
    index++;
    if(index > 3){
        index = 0;        
    }
    var imgList = img[index].url ;
    picture.src = imgList;
    console.log(imgList);
    
    var picNameList = img[index].pictureName;
    picName.textContent = picNameList;
    
    var authorList = img[index].author;
    author.textContent = authorList;
    
},2500)

// menu
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
        console.log(e.target)
    }
}



