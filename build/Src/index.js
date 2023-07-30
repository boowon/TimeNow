const NewZoneDiv = document.querySelector('#NewZoneView')
const LocalView = document.querySelector('#localView')

const timeZone = document.querySelector('#local');
const time = document.querySelector('#time');
const date= document.querySelector('#date');


const NewtimeZone = document.querySelector('#NewZone');
const Newtime = document.querySelector('#NewZonetime');
const Newdate= document.querySelector('#NewZonedate');

const showBtn = document.querySelector('#change-local')
const showBtnNew = document.querySelector('#change-NewZone')

const background = document.querySelector('#background-black')
const timeZoneInput = document.querySelector('#time-zone')
const popup = document.querySelector('#popup')

const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

LocalTime()

showBtn.addEventListener('click', function() {
    background.style.display ='block'
    popup.style.display = 'block'

    const applyBtn = document.querySelector('#apply')
    applyBtn.addEventListener('click', function() {
        changeTimeZone()
    })

})
showBtnNew.addEventListener('click', function() {
    background.style.display ='block'
    popup.style.display = 'block'

    const applyBtn = document.querySelector('#apply')
    applyBtn.addEventListener('click', function() {
        changeTimeZone()
    })

})

function LocalTime(){
    let Now = new Date();
    const myTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timeZone.innerHTML = myTimeZone;

    let myDate = dayjs(Now).format('D MMMM, YYYY');
    let dayOfWeek = weekday[dayjs(new Date()).day()]
    date.innerHTML = `${dayOfWeek}, ${myDate}`

    setInterval(getNowTime,1000); // 15:30:00
    function getNowTime() {
        let myTime = dayjs(new Date()).format('HH:mm:ss')
        time.innerHTML = myTime;
    }

}

function changeTimeZone(){
    LocalView.style.display = 'none'
    NewZoneDiv.style.display = 'block'
    let Now = new Date();

    let FullDate = Now.toLocaleString('en-US', { timeZone: timeZoneInput.value});
    console.log(FullDate)
    
    NewtimeZone.innerHTML = timeZoneInput.value;

    let myDate = dayjs(FullDate).format('D MMMM, YYYY');
    let dayOfWeek = weekday[dayjs(myDate).day()]
    Newdate.innerHTML = `${dayOfWeek}, ${myDate}`

    setInterval(getNowTimeNew,1000); // 15:30:00

    background.style.display ='none'
    popup.style.display = 'none'
}

function getNowTimeNew() {
    let NowNow = new Date();
    FullDateNew = NowNow.toLocaleTimeString('en-US', { timeZone: timeZoneInput.value}, {hour12: false});
    FullDateNew = pmamConvert(FullDateNew)
    Newtime.innerHTML = FullDateNew;
}

function pmamConvert(string){

    let [time, modifier] = string.split(' ')
    let [hours, minutes, seconds] = time.split(':')
    if (hours === '12') { 
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    newString = `${hours}:${minutes}:${seconds}`

    return newString
}





