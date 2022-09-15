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


function User(firstName,lastName,avatar){
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar

    this.getName = function(){
        return `${this.firstName}`
    }
}

let author = new User('Sơn','Đặng','avatar');
let user = new User('Mạnh','Quốc','Avatar')
console.log(author.getName())
console.log(user.getName())

const student = {
    counter: 0,
    increment: () => {
        return ++this.counter
    }
}

console.log(student.counter)
console.log(student.increment())