function log(value){
    console.log(value)
}
window.addEventListener('load',function(){
    const daysText = document.querySelector('.days')
    const hoursText = document.querySelector('.hours')
    const minutesText = document.querySelector('.minutes')
    const secondsText = document.querySelector('.seconds')
    function countDown(date){
        let days,hours,minutes,seconds
        const now = new Date();
        const startDate = now.getTime()
        const endDate = new Date(date).getTime()
        let timeRemaining = parseInt((endDate - startDate)/1000)
        
        if(ti){

        }
        // 1 ngày = 24 * 60 * 60 = 86400
        days = parseInt(timeRemaining/86400)
        daysText.textContent = days
        timeRemaining = timeRemaining % 86400;
        // 1 giờ = 60 * 60 = 3600
        hours = parseInt(timeRemaining/3600)
        hoursText.textContent = hours
        timeRemaining = timeRemaining % 3600
        // 1 phút = 60 giây
        minutes = parseInt(timeRemaining/60)
        minutesText.textContent = minutes
        timeRemaining = timeRemaining % 60
        // 1 giây
        seconds = parseInt(timeRemaining)
        secondsText.textContent = seconds
    }
    setInterval(() => {
        countDown('2022,9,14')
    }, 1000);
})