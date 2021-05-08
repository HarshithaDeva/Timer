const countDown = new Date("June 06, 2022 12:00:00").getTime();

const setTimeDisplay = setInterval(() => {
    
    const nowTime = new Date().getTime();
   
    const distance = countDown - nowTime;
    

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent  = (days<10)? "0" + days:days;


    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById("hours").textContent =  (hours<10)? "0" + hours:hours;


    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    document.getElementById("minutes").textContent = (minutes<10)? "0" + minutes:minutes;

    const seconds = Math.floor(distance % (1000 * 60) / 1000);
    document.getElementById("seconds").textContent = (seconds<10)? "0" + seconds:seconds;

    if(distance==0){
        let h1=document.getElementById("head");
        h1.innerHTML="It's my Graduation Day!!!";
        countdown.style.display = "none";
        clearInterval(setTimeDisplay);
    }
    if(distance<0){
        let h1=document.getElementById("head");
        h1.innerHTML="You are Graduated!!!";
        countdown.style.display = "none";
        clearInterval(setTimeDisplay);
    }
}, 1000);



