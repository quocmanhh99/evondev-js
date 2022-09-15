function log(value){
    console.log(value)
}
const endpoint =  `https://picsum.photos/v2/list?limit=8`;
const imageList = document.querySelector('.images')
const images = []
const loadmore = document.querySelector('.load-more')

function imageTemplate(url){
    const template =   `<div class='image-item'>
    <img src='${url}'>
    </div>`
    imageList.insertAdjacentHTML('beforeend',template)
}

async function fetchImages(){
    const response = await fetch(endpoint)
    images = await response.json()
    if(images.length > 0 && Array.isArray(images)){
        images.forEach(function(item){
            imageTemplate(item.download_url)
        })
    }
}
fetchImages()
