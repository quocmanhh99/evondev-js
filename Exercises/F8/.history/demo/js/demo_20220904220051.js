const button = document.querySelector('.button')

document.addEventListener('mousemove',hanldeMouseMove)

function hanldeMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})