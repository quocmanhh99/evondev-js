const endpoint =  `https://picsum.photos/v2/list`;
async function fetchImages(){
    const response = await fetch(endpoint)
    const images = await response.json()
}
fetchImages()