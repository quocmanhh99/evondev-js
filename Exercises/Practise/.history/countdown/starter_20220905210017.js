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
        // 1 ngày = 24 * 60 * 60 = 
        days = parseInt(timeRemaining/86400)
        daysText.textContent = days
        timeRemaining = timeRemaining % 86400;
        log(timeRemaining)
    }
    countDown('2022,9,14')
})