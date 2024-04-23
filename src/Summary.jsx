// eslint-disable-next-line react/prop-types
function Summary({ tip, numOfPeople, bill, reset }) {
  let billAmount = parseInt(bill);
  let givenTip = parseInt(tip);
  let tipAmount = billAmount * (givenTip / 100);
  let totalBill = billAmount + tipAmount;
  let totalPerPerson = numOfPeople > 0 ? totalBill / numOfPeople : "$0.00";
  let tipAmountPerPerson = numOfPeople > 0 ? tipAmount / numOfPeople : "$0.00";
  if (totalPerPerson > 0 && tipAmountPerPerson > 0) {
    totalPerPerson = totalPerPerson.toFixed(2);
    tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
  }

  return (
    <div className="summary">
      <div className="details-container">
        <div>
          <p className="summary-details">Tip amount </p>
          <p className="per-person"> / person</p>
        </div>
        <div className="tip-amount">
          {givenTip > 0 && numOfPeople > 0 && billAmount > 0
            ? tipAmountPerPerson
            : "$0.00"}
        </div>
      </div>

      <div className="details-container">
        <div>
          <p className="summary-details">Total</p>
          <p className="per-person"> / person</p>
        </div>
        <div>
          <p className="tip-amount">
            {givenTip > 0 && numOfPeople > 0 && billAmount > 0
              ? totalPerPerson
              : "$0.00"}
          </p>
        </div>
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Summary;
