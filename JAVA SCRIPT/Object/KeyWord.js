const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy:78,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getAvg());

function getAvg(){
    console.log(this);
}
console.log(getAvg());
//alert("Hello");
//window.alert("hello");


//try and catch key word

console.log("Hello");
console.log("Hello");
try{
    console.log(a);
    console.log(n);
}catch(err){
    console.log(err);
    console.log("Error found ...")
}
console.log("Hello2");
console.log("Hello2");

