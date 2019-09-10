// 1) Print the first p tag to the console using the ID, class, and tag selectors
.
// !! : you are only printing once
// document.getElementsByClassName("special");
document.getElementById("first");
document.getElementsByTagName("<p>");
console.log(document.getElementsByClassName("special")[0]);

//2) Print the special class using both the query selector and query all selector.

// !! : you are only printing once
document.querySelectorAll("special");
console.log(document.querySelectorAll('p.special')[0]);

//3) Change the color of the h1 statement to blue.

// !! : tag name should not be in anchor brackets 
document.getElementsByTagName("<h1>").style.color = "blue";

//4) Change the color of the last p tag to yellow.

// !! : incomplete