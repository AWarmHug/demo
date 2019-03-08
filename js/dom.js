let f = function () {
    this.a = 1
    this.b = 2
}

function ss() {
    this.a = 1
    this.b = 2
}

let o = new ss()

console.log(o.a)

class Person {
    constructor(p) {
        this.name = p.name
        this.age = p.age
    }

    eat() {
        console.log('吃饭')
    }

}

class Man extends Person {


    shuai() {
        console.log('很帅')
    }

}

class Woman extends Person {
    mei() {
        console.log('很美')
    }
}

let man = new Man({name: '张三', age: 20})
man.eat()
man.shuai()

let m = new Map([['张三', 95], ['李四', 60], ['王二', 78]])
console.log(m.get('张三'))


m.forEach((value, key, map) => {

    console.log(value)
    console.log(key)
    console.log(map)
})
m.forEach(function (value, key, map) {

})


var birth = 1990

function getAge() {
    let y = new Date().getFullYear()
    return y - this.birth
}

var xiaoming = {
    name: '小明',
    birth: 1995,
    age: getAge
}

console.log(getAge())

console.log(xiaoming.age())

console.log(getAge.apply(xiaoming))

function pow(x) {
    return x * x
}

let arr = [1, 2, 3, 4, 5, 6]
var results = arr.map(value => {
    return value * value
})

console.log(results)

let zhansan = {
    name: '张三',
    age: 20
}
Object.prototype.name = 'O'


console.log(typeof Object)
console.log(Object.prototype)
console.log(zhansan.prototype)
console.log(zhansan.protocol)
console.log(pow.protocol)

function Student() {
    this.name = 'Student'
    this.age = 20
    this.sayHello =function () {
        console.log("大家好,我叫"+this.name+",今年"+this.age+"岁")
    }
}

var xiaomi={
    name:"小明"
}
xiaomi.prototype=Student
console.log(xiaomi.name)
xiaomi.sayHello()



