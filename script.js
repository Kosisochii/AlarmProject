function myClock(){
    let d = new Date();
    let hour = d.getHours();
    let mins = d.getMinutes();
    let sec = d.getSeconds();
    let AmPm = 'Am';
    if(hour >= 12){
        AmPm = "PM";
    }
    if( hour > 12){
        hour = hour - 12;
    }
    // hour >= 12 < AmPm = 'Pm' ? '0' : mins;
    hour = hour < 10 ? '0'+ hour : hour;
    mins = mins < 10 ? '0'+ mins : mins;
    sec = sec < 10 ? '0'+ sec : sec;

    let clock = document.querySelector('.clock');
    clock.innerHTML = hour + ":" + mins + ":" + "<span>" + sec + "</span>" + AmPm;
    clock.style.fontSize = "50px";

    if(hour == 0 && mins == 6 && sec == 0){
        playMusic();
    }
}

function playMusic(){
    const music = document.querySelector("#music");
    music.play();
}

setInterval(myClock, 1000);