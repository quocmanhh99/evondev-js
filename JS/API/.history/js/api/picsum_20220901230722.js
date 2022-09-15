function log(value){
    console.log(value)
}

const imageList = document.querySelector('.images')
let images = []
let page = 1;
const limit =  8;
const loadmore = document.querySelector('.load-more')
const endpoint =  `https://picsum.photos/v2/list?limit=${limit}`;
const loading = document.querySelector('.image-loader')

function imageTemplate(url){
    const template =   `<div class='image-item'>
    <img src='${url}'>
    </div>`
    imageList.insertAdjacentHTML('beforeend',template)
}

async function fetchImages(page=1){
    loading.style.display = 'block'
    const response = await fetch(`${endpoint}&page=${page}`)
    images = await response.json()
    if(images.length > 0 && Array.isArray(images)){
        loading.style.display = 'none'
        images.forEach(function(item){
            imageTemplate(item.download_url)
        })
    }
}

loadmore.addEventListener('click',async function(e){
    page++;
    await fetchImages(page)
})
fetchImages()
