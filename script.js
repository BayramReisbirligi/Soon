document.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    launchDate = new Date('May 1, 2026 20:01:05').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        if (distance < 0) {
            launchDate = new Date('May 1, 2027 20:01:05').getTime();
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});