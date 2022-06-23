// lets import the woof.js file we created that holds our function
const woof = require("./woof");

// to create a test we need to use the test func where the first parameter will be a string and our second will be a call back , a nice tip before starting run npx jest --watchAll
test("our first test", () => {
  //   to test if our errors work we'll just throw a error, or evens just typing dsgcdhd will fail our test, as jest tests our functions as well
  throw Error("did not work");
});

// we just showing that regardless if one test fails jest will continue to run all the other tests avaible
test("even if above fails I'll still run , normall we would say what the function will return", () => {});

// now that we have show that jest runs all test regardless of the previous test failing lets move on to importing functions and testing them
// since we imported the function we can call it directly in our test function below
test("our first test that works with importing functions, should return number of woofs", () => {
  // woof("oh my")
  // below we will just store the above in a result variable with an empty string
  const result = woof("oh my!");
  // console.log(result);
  // now in jest we have something know as expect statement which will return an expected object(results), but for it to work we need to add something called a matcher after that which will take in a string saying what we expect to be returned
  expect(result).toBe("6woof!");
  // note that the above will fail if no values is passed in as a sting, and in the .toBe the length of string will be its value (6) and whatever was added in the function --our test will fail if our expected and toBe doesn't match up completely
  //   but we can also return the oppsite of the above , bassically what ou results should not be , by adding a .not infornt of the matcher
  expect(result).not.toBe("8bark!");
  //   with this not if we pass in the correct result our test will fail as it only checks what is not expected isntead of what is expected.
  // ToEqual Matcher is mainly used for arrays and objects, to demonstrate this we will pass an object directly into the expected statement below
  expect({ a: "one", b: "two" }).toEqual({ a: "one", b: "two" });
  // ToMatch Matcher will check if any part of the result that is expected is matched...note that our syntax is different(/whatever you checking/i) the i in the syntax will check case sentive(meaning it wont matter if its capital Letters or not), to chech if a number is infornt of the expected result just add \d infornt of what you checking(/\dwoof/i)
  expect(result).toMatch(/woo/i);
  // toContain will check if the result/object/array etc. cantains/has the value inside of it
  expect(["a", "b", "c"]).toContain("b");
  // to add the auto fill option that has all the .to matchers just install @types/jest
});
// note since we created a script file to our npx to append watch all we need to -- -- eg.( npm t -- --watchAll)

// // our next concept will be coverage (npm t -- --coverage to run it) and this does is it returns what has been tested and in which file it comes from eg. the % func will tell us how many func has been tested in %
// after running the above syntax a coverage folder will automatically be created , you will want to open the the report folder and then run the html file on live server to see a digtal display of the information we received from the above syntax we entered

// lets move on to the next concept Utility
// the first one we will do is todo - Lets say we know we need to write a test but dont have the time this is a really neat one to use(its like a reminder) the params we pass in shoul represent what test we still need to write
test.todo("show not allow numbers to be passed in");

// the 2 one is skip this we use when we have alot of test that we are running but wants to skip a certain test for whatever reason, its the same as commenting it out the only diffrence is it will display that it has bben skipped
test.skip("even if above fails I'll still run , normall we would say what the function will return", () => {});

// 3 will be only this will be useful if we have alot of test failling but we want to test and individaul test and skip the rest
// test.only("even if above fails I'll still run , normall we would say what the function will return", () => {});
// , note it will only skip the test in the file it has been declared so we have another file for testing purposes they will still run, lets create a meow file to test this
