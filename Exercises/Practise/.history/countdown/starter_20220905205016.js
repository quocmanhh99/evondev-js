function log(value){
    console.log(value)
}
window.addEventListener('load',function(){
    const days = document.querySelector('.days')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    function countDown(date){
        const now = new Date();
        const startDate = now.getTime()
        const endDate = new Date(date).getTime()
        log(endDate)

        const timeRemaining = endDate - startDate
    }
    countDown('2022,9,14')
})