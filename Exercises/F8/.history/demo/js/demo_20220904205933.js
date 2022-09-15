const student = {
    firstName : "Trần",
    lastName : "Quốc Mạnh",
    fullName: function(){
        console.log(this)
        console.log(`${this.firstName} ${this.lastName}`)
    },
    objChild: {
        methodChild(){
            console.log(this)
        }
    }
}

student.fullName()
student.objChild.methodChild()