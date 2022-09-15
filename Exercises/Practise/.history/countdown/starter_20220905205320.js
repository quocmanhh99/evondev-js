function log(value){
    console.log(value)
}
window.addEventListener('load',function(){
    const daysText = document.querySelector('.days')
    const hoursText = document.querySelector('.hours')
    const minutesText = document.querySelector('.minutes')
    const secondsText = document.querySelector('.seconds')
    function countDown(date){
        const now = new Date();
        const startDate = now.getTime()
        const endDate = new Date(date).getTime()
        const timeRemaining = parseInt((endDate - startDate)/1000)
        log(timeRemaining)
    }
    countDown('2022,9,14')
})