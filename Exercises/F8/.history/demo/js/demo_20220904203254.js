const student = {
    firstName : "Trần",
    lastName : "Quốc Mạnh",
    fullName: function(){
        console.log(`${this}`)
        console.log(`${this.firstName} ${this.lastName}`)
    
    }
}

student.