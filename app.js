const sec = document.querySelector('.secs');
const min = document.querySelector('.mins');
const hours = document.querySelector('hours');


function Tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `rotate(${180+(second*6)}deg)`
    min.style.transform = `rotate(${180+(minute*6)}deg)`
    hours.style.transform = `rotate(${180+(hour*30)}deg)`


}

setInterval(Tiktak, 1000);