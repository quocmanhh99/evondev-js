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
        if(isNaN(endDate)){
            return;
        }
        let timeRemaining = parseInt((endDate - startDate)/1000)
        
        if(timeRemaining > 0){
              // 1 ngày = 24 * 60 * 60 = 86400
        days = parseInt(timeRemaining/86400)
        // toán tử / : Chia lấy nguyên
        if(days <10){
            daysText.textContent = `0${days}`
        }else{
            daysText.textContent = days
        }
        timeRemaining = timeRemaining % 86400;
         // toán tử % : Chia lấy nguyên
        // 1 giờ = 60 * 60 = 3600
        hours = parseInt(timeRemaining/3600)
        if(hours <10){
            hoursText.textContent = `0${hours}`
        }else{
            hoursText.textContent = hours
        }
        timeRemaining = timeRemaining % 3600
        // 1 phút = 60 giây
        minutes = parseInt(timeRemaining/60)
        if(minutes < 10){
            minutesText.textContent = `0${minutes}`
        }else{
            minutesText.textContent = minutes
        }
        timeRemaining = timeRemaining % 60
        // 1 giây
        seconds = parseInt(timeRemaining)
        if(seconds < 10){
            secondsText.textContent = `0${seconds}`
        }else{
            secondsText.textContent = seconds
        }
        }else{
            return 0
        }

    }
    setInterval(() => {
        countDown('2022,9,6')
    }, 1000);
})