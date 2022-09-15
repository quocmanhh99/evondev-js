const button = document.querySelector('.button')

button.addEventListener('mousemove',handleMouseMove)

function handleMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(){
    document.removeEventListener('mousemove',)
})