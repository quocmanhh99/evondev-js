function log(value){
    console.log(value)
}

window.addEventListener('load',function(){
    const slider = document.querySelector('.slider')
    const sliderMain = document.querySelector('.slider-main')
    const sliderItems = document.querySelectorAll('.slider-item')
    const nextBtn = document.querySelector('.slider-next')
    const preBtn = document.querySelector('.slider-prev')
    const dotItem =  document.querySelectorAll('.slider-dot-item')

    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidersLength = sliderItems.length
    let postionX = 0 ;
    let index = 0;
    
    nextBtn.addEventListener('click',function(e){
        handleChangeSlide(1)
    })

    preBtn.addEventListener('click',function(e){
        handleChangeSlide(-1)
    })

    function handleChangeSlide(direction){
        if(direction === 1){
            index++
            if(index >= slidersLength){
                index = slidersLength;
                return;
            }
            postionX  = postionX  - sliderItemWidth
            sliderMain.style = `transform: translateX(${postionX}px);`
        }else if(direction === -1){
            index--;
            if(index <=0){
                index = 0;
                return;
            }
            postionX  = postionX  + sliderItemWidth
            sliderMain.style = `transform: translateX(${postionX}px);`
        }
    }
})

