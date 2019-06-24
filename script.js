 /*global $*/
// $(function(){
// })

function test() {
    alert ("test function");
}
function random_number() {
    let random_text = Math.floor(Math.random()*50)+1;
    // alert (random_text);
    return random_text;
}
function print_text(words) {
    $("#animi").text(words);
    // alert ("");
}
 
let num = random_number();
print_text(num)