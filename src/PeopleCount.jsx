import { useState } from "react";
// eslint-disable-next-line react/prop-types
function PeopleCount({ numOfPeople, setNumOfPeople }) {
  let [isInvalidPeopleCount, setIsInvalidPeopleCount] = useState(false);
  function handlePeopleCountChange(event) {
    let value = event.target.value;
    if (value <= 0) {
      setIsInvalidPeopleCount(true);
      setNumOfPeople("");
    } else {
      setIsInvalidPeopleCount(false);
      setNumOfPeople(event.target.value);
    }
  }
  return (
    <div>
      <div className="error-handling">
        <div>
          <p className="title">Number of People</p>
        </div>
        <div>
          {isInvalidPeopleCount && (
            <p className="error-text">Num Can't be zero</p>
          )}
        </div>
      </div>

      <input
        className="billInput"
        type="text"
        value={numOfPeople}
        placeholder="Enter num of people"
        onChange={handlePeopleCountChange}
      />
    </div>
  );
}

export default PeopleCount;
