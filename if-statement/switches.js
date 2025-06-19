
let day = window.prompt("What day is it today?");
console.log(day);

// Convert input to lowercase for case-insensitivity
switch (day.toLowerCase()) {
    case "sunday":
    case "saturday":
        console.log("It is a weekend. Time to relax!");
        break;
    case "monday":
        console.log("It is Monday. Start of the work week!");
        break;
    case "tuesday":
        console.log("It is Tuesday. Keep going!");
        break;
    case "wednesday":
        console.log("It is Wednesday. You're halfway through the week!");
        break;
    case "thursday":
        console.log("It is Thursday. Almost the weekend!");
        break;
    case "friday":
        console.log("It is Friday. The weekend is just around the corner!");
        break;
    case "pizzaday":
        console.log("It's Pizzaday! Enjoy your favorite pizza!");
        break;
    default:
        console.log(`${day} is not a valid day. Please enter a valid day of the week.`);
        break;
}

// Additional information
const currentDate = new Date();
const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' });
console.log(`Today is actually ${currentDay}.`);
