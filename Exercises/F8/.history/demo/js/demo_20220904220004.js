const button = document.querySelector('.button')

document.addEventListener('mousemove',function(e){
    console.log(e.clientX)
})

function 

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})