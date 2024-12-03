let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let workTime = document.getElementById('workTime');
let lastWork = document.getElementById('lastWork');

function getAllData(){
    return fetch("../data.json")
    .then (response => response.json())
    .then (data => {
        return data;
    })
}

daily.addEventListener('click', () => {
    getAllData().then(data => {
        workTime.innerText = `${data[0].timeframes.daily.current}hrs`;
        lastWork.innerText = `Last week - ${data[0].timeframes.daily.previous}hrs`;
    })
    })


    
