// // get time
var days = document.querySelectorAll('.days');

setInterval(function(){    
    var date = document.querySelectorAll('.recent-date');
    for(var i=0;i<date.length;i++){
        // 今天的日期
        var time = new Date();
        var nowTime = time.getTime();
        
        // 活動的日期
        var dateM = date[i].innerHTML
        var day = dateM.split('>');
        time.setMonth(parseInt(dateM)-1);
        time.setDate(day[1]);   
        var endTime = time.getTime();       
        var offsetTime = (endTime-nowTime)/1000;
        var d = parseInt(offsetTime/60/60/24); 
        days[i].innerHTML = d;
    }   
})



