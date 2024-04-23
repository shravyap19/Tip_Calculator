import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Bill({ bill, setBill }) {
  let [isInvalidBill, setIsInvalidBill] = useState(false);
  function handleBillChange(event) {
    const value = parseFloat(event.target.value);
    if (value <= 0) {
      setIsInvalidBill(true);
      setBill("");
    } else {
      setIsInvalidBill(false);
      setBill(event.target.value);
    }
  }
  return (
    <div>
      <div className="error-handling">
        <div>
          <p className="title">Bill</p>
        </div>
        <div>
          {isInvalidBill && <p className="error-text">Enter a valid bill</p>}
        </div>
      </div>
      <input
        className="billInput"
        type="text"
        placeholder="$"
        value={bill}
        onChange={handleBillChange}
      />
    </div>
  );
}

export default Bill;
