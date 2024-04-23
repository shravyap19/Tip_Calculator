import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SelectTip({ setTip }) {
  let [activeTip, setActiveTip] = useState(null);
  let [customTip, setCustomTip] = useState("");
  let [isCustomTipActive, setIsCustomTipActive] = useState(false);
  function handleTipChange(tip) {
    setTip(tip);
    setActiveTip(tip);
    setIsCustomTipActive(false);
    setCustomTip("");
  }

  function handleCustomTipInput(event) {
    setCustomTip(event.target.value);
    setTip(event.target.value);
  }

  function handleCustomTipAmount() {
    setIsCustomTipActive(true);
    setActiveTip(customTip);
  }
  return (
    <div>
      <p className="title mb-3">Select Tip %</p>
      <div className="tips">
        {["5%", "10%", "15%", "20%", "25%"].map((tip, index) => (
          <div key={index}>
            <button
              className={`tip-button ${
                activeTip === tip
                  ? "bg-active-button-custom-color text-reset-text-color"
                  : ""
              }`}
              onClick={() => handleTipChange(tip)}
            >
              {tip}
            </button>
          </div>
        ))}
        <div>
          {!isCustomTipActive ? (
            <button
              className={`tip-button ${
                activeTip === "Custom" ? "bg-active-button-custom-color" : ""
              }`}
              onClick={handleCustomTipAmount}
            >
              Custom
            </button>
          ) : (
            <div>
              <input
                className="custom-tip-input"
                type="text"
                value={customTip}
                onChange={handleCustomTipInput}
                placeholder="Enter Tip% "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectTip;
