const fetch = require('node-fetch')

const URL = `https://swapi.dev/api`
const peopleEndPoint = `${URL}/people`

const getData = function(id){
    const idEndPoint = `${peopleEndPoint}/${id}`
    fetch(idEndPoint)
    .then(response => response.json())
    .then(data => console.log(data))

}

var ids = [2,3,6,10,20,30,300]
ids.forEach(id =>{
    console.log(id)
    getData(id)
})
