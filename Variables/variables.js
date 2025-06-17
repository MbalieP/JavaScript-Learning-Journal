let firstname = "Mbali Phulwane"
let age = 27
let greatest_coder = true

console.log("hello", firstname,"welcome my sweet lemon" );
console.log("you are:", age, "years old");
console.log("Is Mbali the greatest coder?:", greatest_coder)


document.getElementById("p1").innerHTML = "Hello " + firstname + "Welcome my sweet lemon"
document.getElementById("p2").innerHTML = "you are" + age + "years old"
document.getElementById("p3").innerHTML = "Is Mbali the greatest coder?:" +  greatest_coder



// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference)
