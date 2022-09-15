const endpoint =  `https://picsum.photos/v2/list`;
const image
async function fetchImages(){
    const response = await fetch(endpoint)
    const images = await response.json()
}
fetchImages()
