let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});
 let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log(event.key);
    console.log(event.code);
    console.log("Key was pressed");
})

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })

inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);//ArrowUp,ArrowDown , ArrowLeft,ArrowRight
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    }else if(event.code == "ArrowDown"){
        console.log("Character Moves Backward");
    }else if(event.code == "ArrowLeft"){
        console.log("Character Moves Left");
    }else if(event.code == "ArrowRight"){
        console.log("Character Moves Right");
    }
});