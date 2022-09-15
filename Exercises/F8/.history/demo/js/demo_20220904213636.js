const student = {
    firstName : "Trần",
    lastName : "Quốc Mạnh",
    fullName: function(){
        console.log(${this.firstName} ${this.lastName})
    
    }
}
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const button = $('.button')
button.addEventListener('click',student.fullName.bind(student))