

const dogs = [
    {
        name: "Snickers",
        age: 2
    },
    {
        name: "hugo",
        age: 8
    }

];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "green";
    p.style.fontSize = "50px"
}


// Regular

console.log("hello ");

// Interpolated

console.log("hello I am a %s string ", "+poop");

// Styled
console.log("%c I am some text","font-size:50px; color:red");

// warning!
console.warn("aage tivr mood hai")

// Error :|
console.error("error")

// Info

console.info("Crocodiles eat 3-4 people per year")
// Testing
const p= document.querySelector("p")

console.assert(p.classList.contains("hello"), "this is wrong!")
// clearing
console.clear()
// Viewing DOM Elements

console.log(p);
console.dir(p);

console.clear()
// Grouping together

dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`)
    console.log(`this is ${dog.name} and ${dog.age} years old `)
    console.log(`this is ${dog.name} and ${dog.age*3} years old `)
    console.groupEnd(`${dog.name}`)
})

// counting

console.count("amit");
console.count("amit");
console.count("amit");
console.count("berwal");
console.count("berwal");
console.count("berwal");
console.count("berwal");
console.count("berwal");
console.count("amit");
console.count("amit");
console.count("berwal");
console.count("amit");
console.count("berwal");
console.count("amit");
console.count("amit");

// timing

console.time("fetching data111");
fetch("https://api.github.com/users/wesbos")
.then(res=>res.json())
.then(data => {
    console.timeEnd("fetching data111")
    console.log(data);
})

console.table(dogs);