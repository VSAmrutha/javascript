console.log("hello");
let seractText = [
  { id: "1", val: "hello" },
  { id: "2", val: "cat" },
  { id: "3", val: "ball" },
  { id: "4", val: "bat" },
];
let displaysearch = [];
let inputS = document.getElementById("searchinput");

function liclick(x) {
  console.log("hey", x);
  // let y = JSON.parse(x);
  inputS.value = x.val;
}
function showresults(data) {
  let ulTag = document.getElementById("searchauto");
  let element = "";
  data.map(
    (x) =>
      (element += `<li onclick='liclick(${JSON.stringify(x)})'>${x.val}</li>`)
  );

  ulTag.innerHTML = element;
}
inputS.addEventListener("keypress", (e) => {
  console.log(e.target.value);
  displaysearch = seractText.filter((x) => x.val.includes(e.target.value));
  console.log(displaysearch);
  showresults(displaysearch);
});
