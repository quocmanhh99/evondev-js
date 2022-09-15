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
        
        if(timeRemaining > 0){

        }
        // 1 ngày = 24 * 60 * 60 = 86400
       
    }
    setInterval(() => {
        countDown('2022,9,14')
    }, 1000);
})