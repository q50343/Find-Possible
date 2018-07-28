 // map
 var map
 function initMap() {
    var myLatLng = {lat: 25.0178982, lng: 121.5383287};
    
    map = new google.maps.Map(document.querySelector('#map'), {
        center:{lat: 25.0168982, lng: 121.5373287},
        zoom: 16,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
    
    
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        center: {lat: 25.0168982, lng: 121.5373287},
        zoom: 16,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
    
    // Create a marker and set its position.
    var show = [
        {
            map: map2,
            position: {lat: 25.018056, lng: 121.533981},
            title: '白傘計畫',
            icon:'image/brown.png'  
        },
        {
            map: map2,
            position: {lat: 25.017685, lng: 121.534194},
            title: '植光計畫 #1',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017693, lng: 121.534509},
            title: '幻影森林',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017346, lng: 121.535301},
            title: 'kill-pony.exe',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016266, lng: 121.533427},
            title: 'Beats on Eyes',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016389, lng: 121.533623},
            title: '連綿地景＿伴風間',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016644, lng: 121.533887},
            title: '連綿地景＿界。顯',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017033, lng:121.534413},
            title: '我的部分',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017198, lng:121.534580},
            title: '樹幕星辰',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016994, lng:121.535900},
            title: '閃閃電光機器人',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017013, lng:121.536522},
            title: '嘻塗幫',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016712, lng:121.536533},
            title: '為中華民國的前途點餐！',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.016848, lng:121.536801},
            title: '電光玻璃球',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017675, lng:121.536737},
            title: '畫樂交鋒前線',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat: 25.017276, lng:121.537048},
            title: '白晝指標',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017091, lng:121.536973},
            title: 'Cycling Wheel - The Orchestra',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.016800, lng:121.537091},
            title: '古蹟燒',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017043, lng:121.537617},
            title: '類棲地 Dress code is Habitat',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017431, lng:121.538132},
            title: 'Suaveciclo',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017684, lng:121.539698},
            title: '禁錮的自由',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017266, lng:121.540438},
            title: '光雕投影',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.017548, lng:121.538282},
            title: 'Open! 家族',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.016216, lng:121.537123},
            title: '當我們被迫遷移 ― 作品再造',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.016031, lng:121.537112},
            title: '黑貓小廚房',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.015666, lng:121.537349},
            title: '風動四方 ― 安平 1634',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.015472, lng:121.537526},
            title: '光。段 Light Segment',
            icon:'image/brown.png'
        },
        {
            map: map2,
            position: {lat:25.015594, lng:121.537724},
            title: '目光集束實驗域',
            icon:'image/brown.png' 
        },
        {
            map: map2,
            position: {lat:25.017941, lng:121.534025},
            title: '白傘計畫工作坊',
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.017941, lng:121.534207},
            title: '台北―巴黎不間斷放音',
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.017941, lng: 121.534442},
            title: 'PIMIYA 三部曲',
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.016559, lng: 121.536567},
            title: 'Do Bigger Things',
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.017100, lng:121.536765},
            title: '樹夜匪懈直播隊',
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.017432, lng:121.538266},
            title: "Let's Swing 搖擺夜遊",
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.015647, lng:121.537628},
            title: "無光晚餐",
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.015504, lng:121.537867},
            title: "城市 FM",
            icon:'image/ygreen.png'
        },
        {
            map: map2,
            position: {lat:25.017306, lng:121.538985},
            title: "舞台G",
            icon:'image/red.png'
        },
        {
            map: map2,
            position: {lat:25.016433, lng:121.536791},
            title: "舞台F",
            icon:'image/red.png'
        },
        {
            map: map2,
            position: {lat:25.016525, lng:121.533364},
            title: "舞台E",
            icon:'image/red.png'
        }
    ];
    for(var i=0;i<show.length;i++){
        var marker = new google.maps.Marker(show[i]);
    }    
}   




// Show info
var recent = document.querySelectorAll('.recent');
var info = document.querySelectorAll('.info');

for(var j=0;j<recent.length;j++){    
    recent[j].addEventListener('click',function(e){ 
        var put = this.nextElementSibling.nextElementSibling.nextElementSibling;
        
        // 判斷是否有顯示info，如果有 移除
        if(put.classList.contains('appear')){ 
            console.log(put);           
            put.classList.remove('appear');
            console.log(1)
            return  
        }else{
            put.classList.add('appear')
        }
    })
}

// map
recent[1].addEventListener('click',function(e){ 
    console.log(9)
    var put = this.nextElementSibling.nextElementSibling.nextElementSibling;
    var location = put.firstElementChild.textContent;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
        address:location,
        key:'AIzaSyBAtu5CJCVspDzyaa1me2qePMN4KVcm_Ok'
    }
})
.then(function (response) {
    console.log(response);
    
    //geometry
    var locationLat = response.data.results[0].geometry.location.lat;
    var locationLng = response.data.results[0].geometry.location.lng;
    
    //marker
    map.setCenter({lat: locationLat, lng: locationLng});
    function addMarker(location){        
        var marker = new google.maps.Marker({           
            position: {lat:locationLat, lng: locationLng},
            map: map
        }) 
    }
    addMarker(locationLat,locationLng);    
})
.catch(function (error) {
    console.log(error);
});
})