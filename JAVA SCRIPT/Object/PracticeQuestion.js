// Createaprogramthatgeneratesarandomnumberrepresentingadiceroll
console.log(Math.floor(Math.random()*6)+1);

// Createanobjectrepresentingacarthatstoresthefollowingpropertiesforthecar:name,model,Color.

const car = {
    name: "Maruti Suzuki",
    model: "Hybrid",
    color: ["White","Black"]
};
console.log(car.name);
console.log(car.model);
console.log(car.color);

const person ={
    name: "Shiva",
    age: 22,
    city: "Delhi"
};
console.log(person.name);
console.log(person.city);
person.city = "Jaunpur";
console.log(person.city);
