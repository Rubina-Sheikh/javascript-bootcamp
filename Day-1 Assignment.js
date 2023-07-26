
//========================Assignment 1: Array Operations===================
//Create an Array fruits
let fruits 

//Add given fruits to the array
fruits = ['apple','banana','orange']

//Remove first fruit from the array
fruits.splice(0,1)

//Add "grape" to the end of array
fruits.push('grape')

//Update the second fruit in the array to "pear"
fruits[1] = 'pear'

//Print the final Result
console.log(fruits)

//===============================Assignment 2: Object Operations===================

//Create an empty object called person
let person = {}

// Adding given properties to the person Object
person = {
    name : 'John',
    age : 30,
    city : 'New York'=
}

//Remove the age property from person
delete person.age

//Add a new property called "job" with value "Engineer"
person.job = 'Engineer'

//Update the city to San Francisco
person.city = 'San Francisco'

//Print person Object
console.log(person)

//================================Assignment 3: Array of Object Operations===================


//Create an empty array called Cars
let cars = []

//Add three car objects
cars= [
    {
        make : 'Toyota',
        model : 'Camry',
        year : 2018
    },
    {
        make : 'Hyundai',
        model : 'Creta',
        year : 2019
    },
    {
        make : 'Tata',
        model : 'Nexon',
        year : 2020
    }
    ]
    
//Remove the first Object from Car Array
cars.splice(0,1)

//Adding a new Object to cars Array
cars.push({make:'Honda', model:'Civic', year:2020})

//Update the model property of the second car object to Accord
cars[1].model = 'Accord'

//Printing cars Array
console.log(cars)
