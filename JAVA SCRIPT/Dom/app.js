// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length;i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image. ${i} is changed`);
// }

// document.getElementsByTagName("p")[1].innerText = "abc";

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));
// //accessing the element and manipulating their color; 
// let links = document.querySelectorAll('.box a');
// // for(let i =0;i<links.length;i++){
// //     links[i].style.color="yellow";
// // }
// for(link of links){
//     link.style.color = "purple";
// }

let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "I am a blue h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "I'm in a div";
para2.innerText = "Me TOO!";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);