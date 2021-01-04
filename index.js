
// https://codepen.io/davidcochran/pen/WbWXoa
const toUpper = (val) => {
    let t = val.toUpperCase();
    console.log(t);
}

const name = 'Joe';

console.log(`Hello it is me and my name is ${name}`);

if (false) {
    console.log('yes');
} else {
    console.log('Nope');
} 

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});