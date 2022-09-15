function addPost(product_name,product_status) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        product_name,
        product_status,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

const formPost = document.querySelector('.form-post')
formPost.addEventListener('submit',function(e){
    e.preventDefault()
    const product_name = this.elements['product_name'].value;
    const product_status = this.el
})