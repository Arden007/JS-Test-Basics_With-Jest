// lets create a function that will take in a string/return to us a string
function woof(str) {
  // in jest there is a nice little helper we use if we want to hide the console.logs: npx jest --silent
//   console.log("the woof ran:", str);
//   lets add a condition to our function that will check if our string is empty, dependingon the result it should breakout of the function or run the function
if (typeof str !== "string") {
    return;
}
// now lets add .length to str so we can check the length of the string
  return str.length + "woof!";
}

 module.exports = woof;