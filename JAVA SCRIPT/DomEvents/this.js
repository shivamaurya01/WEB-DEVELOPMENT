let btn = document.querySelector(".the");
let button = document.querySelector("button");
let h3 = document.querySelector("h3");


function changeColor(){
    console.dir(this);
    this.style.backgroundColor = "blue";
}
btn.addEventListener("click",function() {
    console.dir(this);
    this.style.backgroundColor = "blue";
});

// this is the right methode to calling the function
button.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
