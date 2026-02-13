
const dateElement = document.getElementById("todayDate");
const dealMessage = document.getElementById("dealMessage");
const button = document.getElementById("specialBtn");

function showDate() {
    const today = new Date();
    dateElement.textContent = `Today's Date: ${today.toDateString()}`;
}

function showDeal() {
    const day = new Date().getDay();

    let message;

    if (day === 5) {
        message = "Friday Special! Free oil change with any purchase!";
    } 
    else if (day === 6) { 
        message = "Weekend Sale! $500 off selected vehicles!";
    } 
    else {
        message = "Visit us today to see our latest arrivals!";
    }

    dealMessage.textContent = message;
}

button.addEventListener("click", showDeal);

showDate();