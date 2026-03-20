// function hello(){
//     console.log("inside hello fnx");
//     console.log("Hello friend");
// }
// function demo(){
//     console.log("calling hello fnx");
//   hello();
// }
// console.log("Calling demo function");
// demo();

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();

// }
// function three(){

//     let ans =  two()+one();
//     console.log(ans);
// } 
// three();

// setTimeout(()=>{
//     console.log("apna college");
// },2000);

// console.log("hello...");


h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         let num = Math.floor(Math.random()*5)+1;
         if(num>3){
            reject("promise rejected");
         }

         h1.style.color = color;
         console.log(`color changed to ${color}!`);
         resolve("color changed!");
        },delay);
    });

}

//promise methode is used 

// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was completed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("Orange color was completed");
//         return changeColor("pink",1000);
//     })
//     .then(()=>{
//         console.log("pink color was completed");
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was completed");
       
//     })



// changeColor("red",1000 , ()=>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//         });
//             });
//         });
//     });


//async function is used 


async function demo() {
    try{
    changeColor("red",1000);
    changeColor("orange",1000);
    changeColor("green",1000);
    changeColor("pink",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);

    }

    let a = 5;
    console.log(a);
    console.log("new number  = "+  a+3);
}