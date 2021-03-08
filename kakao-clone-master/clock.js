const clockContainer = document.querySelector(".status-bar_column"),
    clockTitle = clockContainer.querySelector("span"),
    timestamp = document.querySelector(".chat__timestamp");


function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
    timestamp.innerText = `${date}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
