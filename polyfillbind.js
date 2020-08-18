// to create our own bind function

let name = {
  firstname: "amz",
  lastname: "holla",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " , " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name, "hyd", "ap");
printMyName("India");

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "hyd", "ap");
printMyName2("India");
// https://teams.microsoft.com/join/mw011tfm7cc9
