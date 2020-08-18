let allForm = [];
let formDetails = {};

//IIFE

(function () {
  console.log(JSON.parse(localStorage.getItem("allForm")));
  displaycard();
  let monthExpiry = document.getElementById("monthExpiry");

  let presentYear = new Date().getFullYear();
  let select = "<select id='month'>";
  for (let i = 1; i <= 12; i++) {
    select += `<option value=${i}>${i}</option>`;
  }
  select += "</select>";
  let selectYear = "<select id='year'>";
  for (let i = presentYear; i <= presentYear + 20; i++) {
    selectYear += `<option value=${i}>${i}</option>`;
  }
  selectYear += "</select>";
  console.log(selectYear);
  monthExpiry.innerHTML = select + selectYear;
})();

//Delete card function
function deleteclick(card) {
  console.log("delete", card);
  let cardDisplay = JSON.parse(localStorage.getItem("allForm")) || [];
  let newCards =
    cardDisplay.length > 0 && cardDisplay.filter((x) => x.cardnumber != card);
  localStorage.setItem("allForm", JSON.stringify(newCards));
  console.log(newCards);
  displaycard();
}

//Edit card function
function editClick(card) {
  //   let cardDisplay = JSON.parse(localStorage.getItem("allForm"));
  console.log(card);
  cardnumber.value = card.cardnumber;
  cvv.value = card.cvv;
  month.value = card.month;
  year.value = card.year;
}

//Diplay card function
function displaycard() {
  let cardDisplay = JSON.parse(localStorage.getItem("allForm")) || [];
  let cardDiv = document.getElementById("cardDisplay");
  let cardDetailsInner = "";
  cardDisplay.length > 0 &&
    cardDisplay.map(
      (x) =>
        (cardDetailsInner += `<div class="card"><button onclick='deleteclick(${
          x.cardnumber
        })' id='deleteclick' class="editdel">Delete</button><button class="editdel" onclick='editClick(${JSON.stringify(
          x
        )})' id='editcl'>Edit</button><p>Card Number </p><p>${
          x.cardnumber
        }</p></div>`)
    );
  cardDiv.innerHTML = cardDetailsInner;
}

let cardnumber = document.getElementById("cardnumber");
let cvv = document.getElementById("cvv");
let month = document.getElementById("month");
let year = document.getElementById("year");

function submitHandler(e) {
  e.preventDefault();
  let cardDisplay = JSON.parse(localStorage.getItem("allForm")) || [];
  allForm = [...cardDisplay];

  const reg = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  matches = reg.test(cardnumber.value);

  console.log(matches);
  if (matches) {
    console.log("before", formDetails, allForm);
    formDetails.cardnumber = cardnumber.value;
    formDetails.cvv = cvv.value;
    formDetails.month = month.value;
    formDetails.year = year.value;
    console.log(cardnumber.value);

    allForm.filter((x) => x.cardnumber === formDetails.cardnumber).length === 0
      ? allForm.push({ ...formDetails })
      : null;

    localStorage.setItem("allForm", JSON.stringify(allForm));
    displaycard();
  } else {
    document.getElementById("error").innerHTML = "Enter a valid card number";
  }
}

const form = document.querySelector("#form2");

form.addEventListener("submit", submitHandler);

// //Edit
// let asy=asyn()=>{
//   const v=await axios("")
// }
// let prom= new Promise((resolve,reject)=>{

// })
