let hello = {
  a: "b",
  hey: function (name, age) {
    console.log(this.a, name, age);
  },
};

let arrow = {
  a: "only arrow-this",
  hey: (name) => {
    console.log(this.a, name); //this does not work for arrow func
  },
};
hello.hey("hello");
let y = {
  a: "8",
};
hello.hey.call(y, "name");
let bindhello = hello.hey.bind(y);
bindhello("bind", "40");
arrow.hey("arr0w");
