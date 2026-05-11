//let btn = document.querySelector("#btn");
//let btn = document.getElementById("btn");
//let btn = document.getElementsByClassName("btn"); //gives error because it returns an array of elements with the class name "btn"
let btn = document.getElementsByClassName("btn")[0]; //get the first element from the returned array
let body = document.querySelector("body");
let h1 = document.getElementsByClassName("o");
let h2 = document.getElementsByClassName("t");

btn.addEventListener("click",()=>{
    h1[0].style.color = "red";
    h2[0].style.color = "blue";
})

// btn.addEventListener("click", function(){
//     body.style.backgroundColor = "yellow";
// })