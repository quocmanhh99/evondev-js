function addPost(product_name,product_status) {
  fetch('http://localhost/Laravel-8/api/demo/restfulapi/addProduct', {
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
    .catch((error) => console.log(error))
}

const formPost = document.querySelector('.form-post')
formPost.addEventListener('submit',function(e){
    e.preventDefault()
    const product_name = this.elements['product_name'].value;
    const product_status = this.elements['product_status'].value
    addPost(product_name,product_status)
})