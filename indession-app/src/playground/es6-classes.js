
class Person{
    constructor (name = 'Anonymus', age=0){
        this.name= name
        this.age = age
    }
    getDescription(){
        return `Your name is ${this.name} and your age is ${this.age}`
    }
}

class Student extends Person{
        constructor(name, age, dept){
            super(name, age)
            this.dept =dept
        }

        hasDept(){
            return !!this.dept
        }
        getDescription(){
            return 'Testing'
        }

}


const student = new Student('rubel', 26, 'Computer Science')

console.log(student.hasDept())

const other = new Student('khairul', 20)    

console.log(other.hasDept())