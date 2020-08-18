"use strict";
let Hello = function (name) {
  this.name = name;
  this.sayHello = function () {
    let that = this;
    // let hey = () => {
    //   //   console.log(`Hello ${that.name}!!`);
    //   console.log(`Hello ${this.name}!!`);
    // };
    function hey() {
      //   console.log(`Hello ${that.name}!!`);
      console.log(`Hello ${that.name}!!`);
    }
    hey();
  };
};
let john = new Hello("John");
console.log(john.sayHello());

// this is arrow inner function works fine if this.name is present in outer function
//this in normal inner function throws error if we did not define let that=this in strict mode
