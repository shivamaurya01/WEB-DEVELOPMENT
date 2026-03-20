//using callback   function for execute the multiple task 

// function savetoDb(Data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     console.log(internetSpeed);
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }

// }
// savetoDb("apnacollege",
//     ()=>{
//     console.log("Your data was saved: ");
//     savetoDb("hello world",
//         ()=>{
//         console.log("success2: Data2 saved");
//         savetoDb("shiva",
//             ()=>{
//                 console.log("success3 : data saved");
//             },()=>{
//             console.log("failure3: weak connection");
//             }
//         )
//     },
//     ()=>{
//         console.log("failure2 : weak connection");
//     }
//     )
// },
// ()=>{
//     console.log("Weak connection. data not saved");

// });

//Using promises for executing the task 



// function savetoDb(data){
//     return new Promise((success,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10)+1;
//         if(internetSpeed > 4){
//             success("success: data was saved");
//         }else{
//             reject("failure: data was not! saved");
//         }
//     });
// }

// improved version of the promise chaining 
// savetoDb("apna college")
//     .then(()=>{
//         console.log("data1 saved.");
//         return savetoDb("helloworld")
        
//     })
//     .then(()=>{
//             console.log("data2 saved");
//         })
//     .catch(()=>{
//         console.log("promise was rejected");
        
//     });

// 
// savetoDb("apna college")
//     .then((result)=>{
//         console.log("data1 saved.");
//         console.log("result of promise: ",result);
//         return savetoDb("helloworld")
        
//     })
//     .then((result)=>{
//             console.log("data2 saved");
//             console.log("result of promise: ",result);
//         })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error of promise: ",error);
        
//     });


    //Async function calling in javascript

    // async function greet(){
    //     //throw "some random error";
    //     throw "404 page not found";
    //    // return "hello";
    // }
    // greet()
    // .then( ()=>{
    //     console.log("Promise was successfull ");
    // })
    // .catch((err)=>{
    //     console.log("Promise was rejected");
    // })
 
    // let demo = async ()=>{
    //     return 5;
    // };

    function getNum(){
        return new Promise((resolve , reject) => {
            setTimeout(()=>{
                let num = Math.floor(Math.random()*10)+1;
                console.log(num);
                resolve();
            },1000);
        });
    }
    async function demo() {
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        getNum();
    }

    //change color by using async function and using await keyword 