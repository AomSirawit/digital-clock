let time = document.getElementById('current-time');
let day = document.getElementById('current-day');
let cudate = document.getElementById('current-date');

setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    day.innerHTML = d.toLocaleDateString(undefined, { weekday: 'long'});
    cudate.innerHTML = d.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});

}, 1000);