console.log("This is Tut53 JS File.");

// Here greettxt has a by default value.
function greet(name, greettxt = "Je baat") {
    console.log(name + " is a good boy");
    console.log(greettxt);
    // But it's not returning anything
}

let name1 = 'Ansh';
let name2 = 'Dhruv';
let greettxt1 = 'Good Morning';
let greettxt2 = 'Good afternoon';
greet(name1);
greet(name2, greettxt1);


// Let us make a function which returns a value
function sum(a,b) {
    return a + b;
}
let ans = sum(5, 10);
console.log(ans);
console.log(sum(8,13));