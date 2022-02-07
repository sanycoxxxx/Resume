'use strict';

const deadline = "2022-02-09";

function getTimeRemaining(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);



    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds

    };
};

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();


    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};
setClock('.timer', deadline);

const checkbox = document.querySelector('#checkbox'),
    changeColor = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
};

if (localStorage.getItem('color')) {
    changeColor.style.backgroundColor = 'blue';
};
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

changeColor.addEventListener('click', () => {
    if (localStorage.getItem('color') === 'red') {
      
        changeColor.style.backgroundColor = 'red';
        localStorage.removeItem('color');
    } else {
        localStorage.setItem('color', 'red');
        changeColor.style.backgroundColor = 'blue';
    }

});


const persone = {
name: 'Alex',
age: 23

};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log((localStorage.getItem('alex')));




