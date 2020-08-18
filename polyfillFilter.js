let arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (callBack) {
  let newArray = [];
  console.log("this", this);
  for (let i = 0; i < this.length; i++) {
    let result = callBack(this[i], i, this);
    if (result) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

let n = arr.myFilter((x, i) => x > 2);
console.log(n);
console.log(arr);
