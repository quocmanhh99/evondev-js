const button = document.querySelector('.button')

button.addEventListener('mousemove',handleMouseMove)

function handleMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(e){
    button.removeEventListener('mousemove',handleMouseMove)
})

// const logger = (log) => {
//     console.log(log)
// }
const logger = (log) => console.log(log)
logger('Message .......')

// const sum = (a,b) => {
//     return a  + b;
// }

// const sum = (a,b) => a + b;
// const sum = (a,b) => (
//     {a:a,b:b}
// )
console.log(sum(2,3))


function logger(a,b,...params){
    console.log(params)
}

logger