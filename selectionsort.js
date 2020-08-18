//section sort
function selectionSort(arr) {

  let smallNumber;
  for (let i = 0; i < arr.length; i++) {
    smallNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (smallNumber > arr[j]) {
        smallNumber = arr[j];
        let temp = arr[i];
        let tempJ = arr[j];
        arr[i] = tempJ;
        arr[j] = temp;
      }
    }
   
    console.log("arr", arr);
    
  }
  return arr;
  
}
console.log(selectionSort([2, 0, 67, -3, 3, 56]));
