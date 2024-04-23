import Bill from "./Bill";
import PeopleCount from "./PeopleCount";
import Summary from "./Summary";
import { useState } from "react";
import SelectTip from "./SelectTip";

function TipCalculatorPage() {
  let [tip, setTip] = useState("0.00");
  let [bill, setBill] = useState("");
  let [numOfPeople, setNumOfPeople] = useState();

  function resetAll() {
    setTip("");
    setBill("");
    setNumOfPeople("");
  }
  return (
    <div className="container">
      <div className="child">
        <div>
          <Bill bill={bill} setBill={setBill} />
          <SelectTip tip={tip} setTip={setTip} />
          <PeopleCount
            numOfPeople={numOfPeople}
            setNumOfPeople={setNumOfPeople}
          />
        </div>
        <div>
          <Summary
            tip={tip}
            numOfPeople={numOfPeople}
            bill={bill}
            reset={resetAll}
          />
        </div>
      </div>
    </div>
  );
}

export default TipCalculatorPage;
