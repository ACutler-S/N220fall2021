//Andrew Cutler
//N220 - 34971
//October 7 ,2021
//Assignment 6: Object Exercises
//List Display
//----------------------------------------------------------------

/* Create a Div
    Attach Div to JavaScript
    Create collection of books with three attributes
    Create Loop 
    Make sure loop creates 3 divs
    Modify the Divs based off of properties in the Collection
    */
   
let collection = document.getElementById("collection");
console.log(collection);

let books = [
    {title: "Dark Imperium", pages: 432, review: "Great"},
    {title: "Void Stalker", pages: 416, review: "Fantastic"},
    {title: "Nolyn", pages: 480, review: "Mediocre"},
];

for (let i = 0; i < books.length; i++){
    let box = document.createElement("div");
    box.innerHTML = books[i].title;
    if(books[i].pages > 430){
        box.style.backgroundColor= "#3e549e"
    }else if (books[i].review == "Fantastic"){
        books[1].title.toUpperCase();
    }
    collection.appendChild(box)
}