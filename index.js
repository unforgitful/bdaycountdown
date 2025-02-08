
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

            clearInterval(countdownInterval);
            document.querySelector("h1").innerHTML = "Happy Birthday, Mark!";
            myCountdown.style.visibility = "hidden";
        }
    }

    const countdownInterval = setInterval(updateCountDown, 1000);

    updateCountDown();


