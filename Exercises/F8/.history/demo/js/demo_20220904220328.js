const button = document.querySelector('.button')

document.addEventListener('mousemove',handleMouseMove)

function handleMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',handleMouseMove())
})