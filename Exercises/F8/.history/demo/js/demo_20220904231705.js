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
// const logger = (log) => console.log(log)
// logger('Message .......')

// const sum = (a,b) => {
//     return a  + b;
// }

// const sum = (a,b) => a + b;
// const sum = (a,b) => (
//     {a:a,b:b}
// )
// console.log(sum(2,3))



// Rest parameters (parameters: tham số)
//  Rest: lấy ra những thằng còn lại 
// Rest : dùng để nén các giá trị còn lại thành mảng

// function logger(a,b,...params){
//     console.log(params)
// }

// logger(1,2,3,4)

function logger({name,price,...rest}){
    console.log(name)
    console.log(price)
    console.log(rest)
}

logger({
    
})
