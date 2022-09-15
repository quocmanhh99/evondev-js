const button = document.querySelector('.button')

document.addEventListener('mousemove',ha)

function hanldeMouseMove(e){
    console.log(e.clientX)
}

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})