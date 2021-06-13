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

gradStudents.forEach(element => console.log(element));


//I dont expect the values to change because of const.
//It did what I expected.


const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tableStart = 1;
const tableEnd = 12;
const table = [];

for(let i = 0; i < tableEnd; i++){
    table.push( {"Name": i + 1} )
    let data = [];
    for(let m = 0; m < multiplication.length; m++){
        data.push({[m + 1]: multipliers[i] + ' X ' + multiplication[m] + ' = ' + multipliers[i] * multiplication[m]});

    }
    table[i].Product = data;
}

 table.forEach(element => console.log(element));

