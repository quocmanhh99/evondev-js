function log(value){
    console.log(value)
}
const endpoint =  `https://picsum.photos/v2/list`;
const imageList = document.querySelector('.images')

function imageTemplate(){
    const template =   `<div class='image-item'>
    </div>`
}

async function fetchImages(){
    const response = await fetch(endpoint)
    const images = await response.json()
}
fetchImages()
