//let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked");
// };

let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }

// function sayHello(){
//     alert("Hello");
// }

for(btn of btns){
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("You double click");
    })
}
function sayHello(){
    alert("Hello!");
}
function sayName(){
    alert("Apna College");
}

//Click listener how it works  


let para1  = document.querySelector("p");
para1.addEventListener("click",function(){
    console.log("parah was clicked");
});

//Mouseenter eventlister how it work

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Mouse inside box");
});


//btn.onclick = sayHello;
