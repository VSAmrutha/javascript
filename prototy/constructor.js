let Details = function (name, age) {
  this.name = name;
  this.age = age;
  this.getName = function (a) {
    console.log(this.name, a);
  };
};
johnDe = {
  name: "john",
  age: "28",
};

Details.prototype.protomethod = function (v) {
  return `${this.age},v ${v}`;
};
let john = new Details("john", "28");
console.log(john.getName("a"));
console.log(john.protomethod("variable"));
console.log(john);
