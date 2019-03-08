function Person(name) {
    this.name=name
    this.huxi=function () {
        console.log(name+"会呼吸")
    }
}

function Student(name, school) {
    Person.call(this,name)
    this.school=school
}


Student.prototype=new Person()

console.log(Student.prototype)

let stu=new Student("小王","第一中学");

stu.huxi()
