
//Req 1
var students = [ 


    { name: "John", city: "San Deigo" , state: "California" , dateOfBirth: "February 21, 1985" , payRate: '36.00/hr' },


    { name: "Peter", city: "London", state: "United Kingdom" , dateOfBirth: "June 26, 1979" , payRate: '42.00/hr' },


    { name: "Mathew", city: "Manchester" , state: "United Kingdom" , dateOfBirth: "June 29, 1949" , payRate: '72.00/hr'  },


    { name: "Jane", city: "Phoenix" , state: "Arizona" , dateOfBirth: "November 01, 1954" , payRate: '67.00/hr' }
  

];

students.forEach(element => console.log(element));
/*
//Req 2
students.forEach(stat => {
    console.log(stat.name , stat.city);
});
students.forEach(stat => {
    console.log(stat.name , stat.city, stat.state,stat.dateOfBirth,stat.payRate);
});
//Req 3
const gradStudents = [ 


    { name: "John", city: "San Deigo" , state: "California" , dateOfBirth: "February 21, 1985" , payRate: '36.00/hr' },


    { name: "Peter", city: "London", state: "United Kingdom" , dateOfBirth: "June 26, 1979" , payRate: '42.00/hr' },


    { name: "Mathew", city: "Manchester" , state: "United Kingdom" , dateOfBirth: "June 29, 1949" , payRate: '72.00/hr'  },


    { name: "Jane", city: "Phoenix" , state: "Arizona" , dateOfBirth: "November 01, 1954" , payRate: '67.00/hr' }

]
gradStudents.forEach(stat => {
    console.log(stat.name , stat.city);
});
gradStudents.forEach(stat => {
    console.log(stat.name , stat.city, stat.state,stat.dateOfBirth,stat.payRate);
});
//Req 4
//Did not expect the same output as var had when using const but the output came out the same.

//Req 5 
const multipliers = [1,2,3,4,5,6,7,8,9,10]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

for(var i = 1;i <=12 ; i++){
    
}

/*
var students = [
    { name: "John", city: "California"},
    { name: "Peter", city: "London" },
    { name: "Mathew", city: "Manchester" },
    { name: "Jane", city: "Phoenix" }
]

students.forEach(element => console.log(element));

students[0].dateOfBirth = "02/21/1985", students[1].dateOfBirth = "06/26/1979", students[2].dateOfBirth = "06/29/1949", students[3].dateOfBirth = "11/01/1954";

students[0].state = "California", students[1].state = "United Kingdom", students[2].state = "United Kingdom", students[3].state = "Arizona";

students[0].payRate = "$36.00/hour", students[1].payRate = "$42.00/hour", students[2].payRate = "$72.00/hour", students[3].payRate = "$67.00/hour";

students.forEach(element => console.log(element));

const gradStudents = [
    { name: "John", city: "California"},
    { name: "Peter", city: "London" },
    { name: "Mathew", city: "Manchester" },
    { name: "Jane", city: "Phoenix" }
]

gradStudents.forEach(element => console.log(element));


students.forEach(element => console.log(element));

students[0].dateOfBirth = "02/21/1985", students[1].dateOfBirth = "06/26/1979", students[2].dateOfBirth = "06/29/1949", students[3].dateOfBirth = "11/01/1954";

students[0].state = "California", students[1].state = "United Kingdom", students[2].state = "United Kingdom", students[3].state = "Arizona";

students[0].payRate = "$36.00/hour", students[1].payRate = "$42.00/hour", students[2].payRate = "$72.00/hour", students[3].payRate = "$67.00/hour";

students.forEach(element => console.log(element));


/* My expectation is no data will be added because const won't allow you to modify data.
*  The output was the same as my expectation.


const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tableStart = 1;
const tableEnd = 12;
const table = [];

for(let i = 0; i < tableEnd; i++) {
    table.push( {"name": i + 1} );
    let data = [];
    for(let k = 0; k < multiplication.length; k++) {
        data.push({[k + 1]: multipliers[i] + " x " + multiplication[k] + " = " + multipliers[i] * multiplication[k]});
    }
    table[i].values = data;
}

table.forEach(element => console.log(element));
/*
