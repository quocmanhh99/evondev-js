const button = document.querySelector('.button')

button.addEventListener('mousemove',function(e){
    console.log(e.clientX)
})

button.addEventListener('click',function(e){
    document.removeEventListener('mousemove',function(e){
        console.log(e.clientX)
    })
})