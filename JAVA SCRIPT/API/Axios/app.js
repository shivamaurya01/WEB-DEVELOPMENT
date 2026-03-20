let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);

  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error - ", e);
    return "NO fact found";
  }
}

let btnn = document.querySelector(".button");
btnn.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  let image = document.querySelector("#result2");
  image.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    //console.log(res.data.message);
    return res.data.message;
  } catch (e) {
    console.log("error - ", e);
    return "NO Image  found";
  }
}


//Sending Header API request
const url3 = "https://icanhazdadjoke.com";

async function getJokes() {
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    let res = await axios.get(url3, config);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

//api calling for the university name list
let link = "http://universities.hipolabs.com/search?country=India&name=";

let search = document.querySelector(".search");

search.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country)
     let colleges = await getColleges(country);
     show(colleges);
    // console.log(colleges);
})
// let country="nepal";
function show(colleges){
    let list = document.querySelector("#list");
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let res = await axios.get(link+country);
        return res.data;
    }catch(e){
        console.log("error: ",e);
        return [];
    }
}