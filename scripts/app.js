let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

let workTime = document.getElementById('workTime');
let lastWork = document.getElementById('lastWork');
let exerciseTime = document.getElementById('exerciseTime');
let lastExercise = document.getElementById('lastExercise');
let playTime = document.getElementById('playTime');
let lastPlay = document.getElementById('lastPlay');
let socialTime = document.getElementById('socialTime');
let lastSocial = document.getElementById('lastSocial');
let studyTime = document.getElementById('studyTime');
let lastStudy = document.getElementById('lastStudy');
let selfCareTime = document.getElementById('selfCareTime');
let lastSelfCare = document.getElementById('lastSelfCare');

daily.addEventListener('click', () => {
    daily.classList.add('white-text');
    weekly.classList.remove('white-text');
    monthly.classList.remove('white-text');
})

weekly.addEventListener('click', () => {
    daily.classList.remove('white-text');
    weekly.classList.add('white-text');
    monthly.classList.remove('white-text');
})

monthly.addEventListener('click', () => {
    daily.classList.remove('white-text');
    weekly.classList.remove('white-text');
    monthly.classList.add('white-text');
})

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
        lastWork.innerText = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;

        exerciseTime.innerText = `${data[3].timeframes.daily.current}hrs`;
        lastExercise.innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;

        playTime.innerText = `${data[1].timeframes.daily.current}hrs`;
        lastPlay.innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;

        socialTime.innerText = `${data[4].timeframes.daily.current}hrs`;
        lastSocial.innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;

        studyTime.innerText = `${data[2].timeframes.daily.current}hrs`;
        lastStudy.innerText = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;

        selfCareTime.innerText = `${data[5].timeframes.daily.current}hrs`;
        lastSelfCare.innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
    })
})

weekly.addEventListener('click', () => {
    getAllData().then(data => {
        workTime.innerText = `${data[0].timeframes.weekly.current}hrs`;
        lastWork.innerText = `Last week - ${data[0].timeframes.weekly.previous}hrs`;

        exerciseTime.innerText = `${data[3].timeframes.weekly.current}hrs`;
        lastExercise.innerText = `Last week - ${data[3].timeframes.weekly.previous}hrs`;

        playTime.innerText = `${data[1].timeframes.weekly.current}hrs`;
        lastPlay.innerText = `Last week - ${data[1].timeframes.weekly.previous}hrs`;

        socialTime.innerText = `${data[4].timeframes.weekly.current}hrs`;
        lastSocial.innerText = `Last week - ${data[4].timeframes.weekly.previous}hrs`;

        studyTime.innerText = `${data[2].timeframes.weekly.current}hrs`;
        lastStudy.innerText = `Last week - ${data[2].timeframes.weekly.previous}hrs`;

        selfCareTime.innerText = `${data[5].timeframes.weekly.current}hrs`;
        lastSelfCare.innerText = `Last week - ${data[5].timeframes.weekly.previous}hrs`;
    })
})

monthly.addEventListener('click', () => {
    getAllData().then(data => {
        workTime.innerText = `${data[0].timeframes.monthly.current}hrs`;
        lastWork.innerText = `Last month - ${data[0].timeframes.monthly.previous}hrs`;

        exerciseTime.innerText = `${data[3].timeframes.monthly.current}hrs`;
        lastExercise.innerText = `Last month - ${data[3].timeframes.monthly.previous}hrs`;

        playTime.innerText = `${data[1].timeframes.monthly.current}hrs`;
        lastPlay.innerText = `Last month - ${data[1].timeframes.monthly.previous}hrs`;

        socialTime.innerText = `${data[4].timeframes.monthly.current}hrs`;
        lastSocial.innerText = `Last month - ${data[4].timeframes.monthly.previous}hrs`;

        studyTime.innerText = `${data[2].timeframes.monthly.current}hrs`;
        lastStudy.innerText = `Last month - ${data[2].timeframes.monthly.previous}hrs`;

        selfCareTime.innerText = `${data[5].timeframes.monthly.current}hrs`;
        lastSelfCare.innerText = `Last month - ${data[5].timeframes.monthly.previous}hrs`;
    })
})


    
