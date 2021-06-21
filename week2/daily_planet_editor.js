let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "blue",
        "type": "sedan",
        "registration": new Date('2016-05-10'),
        "capacity": 5 
    },
    {
        "color": "red",
        "type": "minivan",
        "registration": new Date('2017-04-02'),
        "capacity": 8 
    },
    {
        "color": "green",
        "type": "coupe",
        "registration": new Date('2019-04-12'),
        "capacity": 4 
    },
    {
        "color": "yellow",
        "type": "truck",
        "registration": new Date('2018-12-15'),
        "capacity": 6 
    },
    {
        "color": "red",
        "type": "coupe",
        "registration": new Date('2017-01-15'),
        "capacity": 2 
    },
    {
        "color": "blue",
        "type": "truck",
        "registration": new Date('2021-11-11'),
        "capacity": 5 
    },
    {
        "color": "yellow",
        "type": "sedan",
        "registration": new Date('2020-09-09'),
        "capacity": 4
    },
    {
        "color": "white",
        "type": "sedan",
        "registration": new Date('2018-09-09'),
        "capacity": 5 
    }
  ]

function redCars(e) {
    if (e.color == "red"){
        return e;
    }
   
}

let redC = cars.filter(redCars);
console.log(redC)

function everyCar(array){
    return array;

}

let everyC = everyCar(cars)
console.log(everyC)

console.log(cars.filter((e) => e.color == "red"))

let redGreen = cars.filter((e) => e.color == "red" || e.color == "green")

console.log(redGreen)

