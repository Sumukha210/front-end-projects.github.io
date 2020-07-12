const bill_input = document.getElementById("billInput");
const tip_input = document.getElementById("tip_input");
const no_people_input = document.getElementById("no_people_input");
const tip_amount_dom = document.getElementById("tip_amount");
const tot_amount_dom = document.getElementById("tot_amount");
const eachPerson_dom = document.getElementById("eachPerson");
const card = document.querySelector(".card");
SetInputsTo(1);

card.addEventListener("input", (e) => {
  if (e.target.className === "form-control") {
    if (e.target.value < 0) {
      SetValuesInDom(0, 0, 0);
    } else {
      const { tipPerPerson, totalAmount, eachPerson } = Calculate();
      SetValuesInDom(
        tipPerPerson.toFixed(2),
        totalAmount.toFixed(2),
        eachPerson.toFixed(2)
      );
    }
  }
});

function Calculate() {
  const tipAmount = Number(bill_input.value) * Number(tip_input.value / 100);
  const tipPerPerson = Number(tip_input.value) / Number(no_people_input.value);
  const totalAmount = Number(bill_input.value) + Number(tipAmount);
  const eachPerson = Number(totalAmount) / Number(no_people_input.value);
  return { tipPerPerson, totalAmount, eachPerson };
}

function SetValuesInDom(tipAmount, totalAmount, eachPerson) {
  tip_amount_dom.innerHTML = `${tipAmount} Rs`;
  tot_amount_dom.innerHTML = `${totalAmount} Rs`;
  eachPerson_dom.innerHTML = `${eachPerson} Rs`;
}

function SetInputsTo(number) {
  bill_input.value = number;
  tip_input.value = number;
  no_people_input.value = number;
}
