const button = document.querySelector('.button')

button.addEventListener('mousemove',function(e){
    console.log(e.clientX)
})

button.addEventListener('mousemove',function(e){
    button.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})