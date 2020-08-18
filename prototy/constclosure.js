function setclosure() {
  const balance = 3000;
  function inner() {
    const balance = 8000;
    function innerinner() {
      console.log(`balance is ${balance}`);
    }
    innerinner();
  }
  inner();
  console.dir(inner);
}
console.log(setclosure());

var hi = "hi";
var hi = "hello";
console.log(hi); //allows

// let hi = "hi";
// let hi = "hello";
// console.log(hi);//error hi already been declared

// const hello = "hello"
// const hello ="hi"
// console.log(hello) //error hello already been declared
