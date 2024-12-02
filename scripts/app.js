let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

function getAllData(){
    fetch("../data.json")
    .then (response => response.json())
    .then (data => {
        console.log(data);
    })
}

getAllData();