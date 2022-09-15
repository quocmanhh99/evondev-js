function log(value){
    console.log(value)
}
const endpoint =  `https://picsum.photos/v2/list`;
const imageList = document.querySelector('.images')

function imageTemplate(url){
    const template =   `<div class='image-item'>
    <img src='${url}'>
    </div>`
    imageList.insertAdjacentHTML('')
}

async function fetchImages(){
    const response = await fetch(endpoint)
    const images = await response.json()
}
fetchImages()
