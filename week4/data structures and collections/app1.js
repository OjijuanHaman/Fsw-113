document.getElementById("button1").addEventListener('click',function(){

var starWarsPeopleList = document.querySelector('.names');
fetch('https://swapi.dev/api/people/')
.then(function(response) { 
    return response.json();
 })
.then(function(json) {
    let people = json.results; 
    for(p of people) {
        let listItem = document.createElement('li'); 
        listItem.innerHTML = `Name: ${p.name}`; 
        starWarsPeopleList.appendChild(listItem);  
      }

   });
})

document.getElementById("button2").addEventListener('click',function(){
  var starWarsPeopleList = document.querySelector('.two');
  fetch('https://swapi.dev/api/people/')
  .then(function(response) { 
    return response.json();
})
    .then(function(json) {
        let people = json.results; 
        for(p of people) {
          let listItem = document.createElement('li'); 
          listItem.innerHTML = `Height: ${p.height}`; 
          starWarsPeopleList.appendChild(listItem);  
         }
     
    });
  })
  


  
document.getElementById("button3").addEventListener("click",function(){
    var starWarsPeopleList = document.querySelector('.three');
  fetch('https://swapi.dev/api/people/')
  .then(function(response) { 
      return response.json();
  })
  .then(function(json) {
      let people = json.results; 
      for(p of people) {
          let listItem = document.createElement('li'); 
          listItem.innerHTML = `Films Appeared: ${p.films}`; 
          starWarsPeopleList.appendChild(listItem);  
        }
     
    });

})
  
document.getElementById("button").addEventListener("click",function(){
    var starWarsPeopleList = document.querySelector('ol');
  fetch("https://swapi.dev/api/people/")
  .then(function(response) { 
      return response.json();
  })
  .then(function(json) {
      let characters = json.results; 
      for(c of characters) {
          let listItem = document.createElement('li'); 
           listItem.innerHTML = `Name: ${c.name}  <br/> Height: ${c.height} <br/> Films: ${c.films}`; 
        
        starWarsPeopleList.appendChild(listItem);  
        }
     
    });

})


