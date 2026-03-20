//Accessing json data from api


// let res = `{"fact":"Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.","length":129}`;
// let jsonreq = JSON.parse(res);
// console.log(jsonreq);
// console.log(jsonreq.fact);

// let student ={
//     name: "shiva",
//     marks: 95,
// };

//our first request calling  

let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//    // console.log(res);
//    // console.log(res.json());
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res) =>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error: - ",err);
// });

// console.log("I am happy");  

//using fetch for async and await 

async function getFacts(){
try {
    let res =await  fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
} catch (e) {
    console.log("error - ",e);
}
    console.log("bye");
}