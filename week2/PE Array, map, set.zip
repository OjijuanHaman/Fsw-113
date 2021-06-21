//CLO 1: 

let studentArray = Array(10)

console.log(studentArray.length)
console.log(studentArray)

//a: 10
//b: [ <10 empty items> ]

//CLO 2:
let studentArray = Array.of(10)

console.log(studentArray.length)
console.log(studentArray)

//a: 1
//b: [10]


//CLO 3:
let grades = [90,98,78,99]
let studentGrades =  Array.from(grades, g => (g * 110));

console.log(studentGrades.length)
console.log(studentGrades)

//a: 4
//b: [ 9900, 10780, 8580, 10890 ]


//CLO 4:
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades)

//a: [ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]

//CLO 5:
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades)

//a: [ NaN, NaN, NaN, NaN ]

//CLO 6:
let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v== 90)

console.log(studentGrades)

//a: 90

//CLO 6:
let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v== 90)

console.log(studentGrades)

//a: 90

//CLO 7:
let grades = [90,98,78,99]
let studentGrades = grades.find(v => v >= 90)

console.log(studentGrades)

//a: 90

//CLO 8:
let grades = [90,98,78,99]
let studentGrades = grades.map(v => v * .0 90)

console.log(studentGrades)

//a: error

//CLO 9:
let grades = [90,98,78,99]
let studentGrades = ...grades

console.log(studentGrades)

//a: error



//CLO 10:
let student = {name:"John Masson"}
let adjunct = {name:"Dave Larson"}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")


console.log(people)

//a: Map(2) {{name: 'Jo…on'} => Student, {name: 'Da…on'} => Adjunct}

//CLO 11:
let student = {name:"John Masson"}
let adjunct = {name:"Dave Larson"}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)

console.log(people)

//a: Map(1) {{name: 'Da…on'} => Adjunct}


//CLO 12:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()

console.log(people)

//a: Map(0)

//CLO 13:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.has(student);

console.log(result)

//a: true

//CLO 14:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.keys(student);

console.log(result)

//a: MapIterator {{name: 'Jo…on'}, {name: 'Da…on'}}

//CLO 15:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);

console.log(result)

//a: MapIterator {Student, Adjunct}

//CLO 16:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null
console.log(people.size)

//a: undefined
//b: undefined

//CLO 17:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)
console.log(people.size)

//a: 2

//CLO 18:
let students =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}
let people = new Set(students)

console.log(people.has({name:'Dave Vasco'})

//a: error