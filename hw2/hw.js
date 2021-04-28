// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen.
function evenOrOdd(n){
    for(let i=0;i<=n;i++){
        var status = (i%2==0) ? 'even' : 'odd';
        console.log(i + ' is ' + status);
    }
}
evenOrOdd(15);

// Create a function sum() that accepts any number of parameters and adds them together by iterating over the values in arguments with a while loop.
function sum(...numbers) {
    let i=0;
    let summ=0;
    while (i<numbers.length){
        summ += numbers[i];
        i+=1;
    }
    return summ
}

var result = sum(1,2,3,5,67);
console.log(result);

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before and after deleting the property.
var student = {
    name : "David Rayy", 
    sclass : "VI",
    rollno : 12 
};

function deleteRollno(object){
    console.log(object);
    delete object.rollno;
    console.log(object);
}

deleteRollno(student);

// Display the length of the object (count of properties using Enumeration and Object.keys)

function lengthOfObject(object){
    let count = 0;
    for (prop in Object.keys(object)){
        count +=1;
    }
    return count;
}

console.log(lengthOfObject(student));

var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'SuzanneCollins', libraryID: 3245 }];

// library = preferredOrder(library, [
//         "author",
//         "libraryID",
//         "title"
//     ]);

function sortObject(object){
    return object.sort((a, b) => (a.libraryID < b.libraryID) ? 1 : -1);
}
console.log(library);
console.log(sortObject(library));