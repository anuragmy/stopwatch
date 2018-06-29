
var timecounter = 0;
var lapcounter = 0,action,mode=0;
var timeseconds,timeminutes,timecentiseconds;
var lapseconds,lapminutes,lapcentiseconds,lapnum=0;

//clicking the start
$('#resume').hide();
$('#reset').click(function() {
   location.reload(); 
});

$('#start').click(function() {
    startaction();
    mode = 1;
    
   });


$('#stop').click(function() {
   
   
    clearInterval(action);
});

$('#lap').click(function() {
   if (mode) {
       clearInterval();
       
       lapcounter = 0;
       addlap();
   } 
});




function startaction() {
    action = setInterval(function(){
        timecounter++;
        lapcounter++;
        updatetime();
    },10);
}

function updatetime() {
    timeminutes = Math.floor(timecounter/6000);
    timeseconds = Math.floor((timecounter%6000)/100);
    timecentiseconds = (timecounter%6000)%100;
    
    $('#min').text(format(timeminutes));
    $('#sec').text(format(timeseconds));
    $('#centi').text(format(timecentiseconds));
    
    
    
    lapminutes = Math.floor(lapcounter/6000);
    lapseconds = Math.floor((lapcounter%6000)/100);
    lapcentiseconds = (lapcounter%6000)%100;
    
    $('#lmin').text(format(lapminutes));
    $('#lsec').text(format(lapseconds));
    $('#lcenti').text(format(lapcentiseconds));
}

function format(num) {
    if (num<10) {
        return '0'+num;
    }
    else {
        return num;
    }
}
function addlap() {
    lapnum++;
    var mylapdetails = 
    '<div class="lapindiv">' +
        '<div class="laptimetitle">' +
        'Lap '+ format(lapnum) + 
        '</div>' +
        
        '<div class="laptime">' +
        '<span>' + 
        format(lapminutes) + 
        '</span>' + 
        
        
        ':<span>' + format(lapseconds) +
        '</span>' + 
        
        ':<span>' + format(lapcentiseconds) +
        '</span>' + 
        '</div>' +
    '</div>';
    $(mylapdetails).prependTo('#lapdiv');
    
}


