    const timerDec = function() {
        const timer = document.getElementById("timer");
         if (timer.textContent != 0) {
        timer.textContent -= 1; 
        } else {
            clearInterval(inervalID);
            alert("Вы победили в конкурсе!");
        }
    };  
    const inervalID = setInterval(timerDec,1000);

 