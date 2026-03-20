//WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers


const average=(arr)=>{
    let sum =0;
    for(let i =0;i<arr.length;i++){
        sum = sum+arr[i];

    }
    console.log(sum/arr.length);
}
let arr = [1,2,3,4,5,6,7,8,9];
average(arr);

//WriteanarrowfunctionnamedisEven()thattakesasinglenumberasargumentandreturnsifitisevenor not

// const isEven=(num)=>{
//     if(num%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }

// let num = prompt("Enter the number which you want to check odd or even: ");
// isEven(num);

//check the output of the code

// const object = {
//     message: "Hello,World!",

//     logMessage(){
//         console.log(this.message);
//     }

// };
// setTimeout(object.logMessage,1000);

//give the output of the code
let length = 4;
function callback(){
    console.log(this.length);

}

const object = {
    length: 5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);