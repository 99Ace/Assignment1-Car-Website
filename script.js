 /*global $*/
// Set array of choices for colors, fonts, position, 
let color_choice = [ //contain 4 colors
    "red",
    "blue",
    "green",
    "yellow"
]
let car_brands = [ // contain car brands for display
    "Audi",
    "BMW",
    "Mercedes",
    "Toyota",
    "Honda",
    "Nissan",
    "Ferrari",
    "Maserati",
    "Porsche",
    "Citroen",
    "Renault",
    "Volkswagen",
    "Volvo",
    "Jaguar"
]

// create functions for multiple usage
function testing() {
    alert ("test function");
}
function generate_random_number(length) { // create random number
    let random_text = Math.floor(Math.random()*length);
    // alert (random_text);
    return random_text;
}
function print_text(words) {
    // alert("got run")
    $("#animi").append(`<div class="display">${words}</div>`)
    $("#animi").children(0).fadeOut(100000,"swing");
}
 
let num = generate_random_number(car_brands.length);
print_text(car_brands[num]);
