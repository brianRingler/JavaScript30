// Access the second hand. Add to function 
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// This func will always be running and return the second of each minute
// e.g., 1, 2, 3...35, 36...58, 59, 60, 1, 2...nth
function setDate() {
    const now = new Date();

    // 60 / 60 = 1 * 360 = 360 degrees (12AM/PM mark)
    // 30 / 60 = 0.5 * 360 = 180 degrees (30 minute mark)
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    // Same as seconds only minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Get hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(`Hours >> ${hours}`);
    console.log(`Minutes >> ${minutes}`);
    console.log(`Seconds >> ${seconds}`);
};

// setInterval is a method of the HTML DON Window Object
// window.setInterval(function, milliseconds)

// The first parameter is the function to be executed.
// The second parameter indicates the length of the time-interval between each execution
setInterval(setDate, 1000);