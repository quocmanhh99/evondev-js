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
        const timeRemaining = parseInt((endDate - startDate)/1000)
        
        days = parseInt(timeRemaining/86400)
        daystE.textContent = days
        log(days)
    }
    countDown('2022,9,14')
})