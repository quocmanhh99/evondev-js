const button = document.querySelector('.button')

document.addEventListener('mousemove',handeMouseMove)

function handeMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})