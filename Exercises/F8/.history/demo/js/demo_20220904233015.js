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
// Rest : dùng để nén các giá trị còn lại thành mảng or object

// function logger(a,b,...params){
//     console.log(params)
// }

// logger(1,2,3,4)

// 2. Object
// function logger({name,price,...rest}){
//     console.log(name)
//     console.log(price)
//     console.log(rest)
// }

// logger({
//     name: 'JS',
//     price: 1000,
//     content: 'BE',
//     age: 14
// })

// 3. Array
// function logger([a,b,...rest]){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// logger([1,2,3,3,4,5])


let arrayOne = ['JS','HTML']
let arrayTwo = ['PHP','CSS']

// let array = [...arrayOne]
let array = [...arrayOne,...arrayTwo]
console.log(array)


let one = {
    api: '1',
    ver: 'v1',
    other
}