// create a new unordered list (ul) element
let newlist = document.createElement("ul");


// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar").remove("p");

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newlist);

// create two new list item (li) elements, and add some text to them
let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
listItem1.textContent = "Howdy!";
listItem2.textContent = "YeeHaw!";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar" > "ul");
document.querySelector(".nav-bar").appendChild(listItem1);
document.querySelector(".nav-bar").appendChild(listItem2);
