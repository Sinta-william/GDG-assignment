

const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

const countDownDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every second
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // when the countown is finished
    if (distance <= 0) {
        clearInterval(x);
        Days.innerHTML = "0";
        Hours.innerHTML = "0";
        Minutes.innerHTML = "0";
        Seconds.innerHTML = "0";
        console.log(" BRING IT ON 2025!");
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}, 1000);
