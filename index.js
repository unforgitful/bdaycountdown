
    function updateCountDown() {
        const now = new Date()
        let birthday = new Date(now.getFullYear(), 0, 14);
        let birthdayBoy = " " + "Mark's" + " ";
        
        document.getElementById("myName").innerText = birthdayBoy;

        if (now > birthday) {
            birthday.setFullYear(now.getFullYear() + 1);
        }

        const timeLeft = birthday - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) + " " + "Days";
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " " + "Hours";
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) + " " + "Minutes";
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000) + " " + "Seconds";

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (timeLeft < 0) {
            const myCountdown = document.getElementById("countdown");
            let bdayMessage = document.querySelector("h1");
            let keyFrames = document.createElement("style");
            document.head.appendChild(keyFrames);
            keyFrames.innerHTML = `@keyframes glowEffect {
        0% { text-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 15px blue, 0 0 20px blue; }
        50% { text-shadow: 0 0 10px rgb(61, 87, 255), 0 0 20px rgb(61, 87, 255), 0 0 30px rgb(61, 87, 255), 0 0 40px rgb(61, 87, 255); }
        100% { text-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 15px blue, 0 0 20px blue; }
    }`;
            

            clearInterval(countdownInterval);
            document.querySelector("h1").innerHTML = "Happy Birthday, Mark!";
            bdayMessage.style.cssText = "padding: 60px; font-size: 6vw; animation: glowEffect 1.5s ease-in-out infinite;";
            myCountdown.style.display = "none";
        }
    }

    const countdownInterval = setInterval(updateCountDown, 1000);

    updateCountDown();


