// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");

// //user input
// // name = prompt("enter your name");
// // h2.innerText = "name"+ ":"+ name;

// //name.innerHTML += prompt("Enter your name: ");

// //create element
// // let p = document.createElement("p");
// // p.innerText = "this is new paragraph";
// // h2.appendChild(p); //append the new paragraph to h2

// // input event listner
//  let inp = document.querySelector("input")
// inp.addEventListener("input",(e)=>{
//        console.log("hello")
//        console.log(e.target.value);
//        h2.innerHTML = e.target.value;
// })

// let allData=[]
// let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// btn.addEventListener("click",()=>{
//     let data = inp.value;
//     allData.push(data);
//     h3.innerHTML = allData
// })


let inp = document.querySelector("input");
let buttons = document.querySelectorAll("button");

for(let btn of buttons){
    let btnText = btn.innerText;
    btn.addEventListener("click",()=>{
        if(btnText === "C"){
            inp.value = "";
        }
        else if(btnText === "="){
            inp.value = eval(inp.value);
        }
        else if(btnText === "Del"){
            inp.value = inp.value.slice(0, -1);
        }
        else{
            inp.value = inp.value + btnText;
        }
    })
}