import React, { useState } from "react";

const INVESTMENTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturns: 6,
  duration: 10,
};

const UserInput = () => {
  const [userInput, setUserInput] = useState(INVESTMENTS);

  const handleUserInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
            <input
              name="initialInvestment"
              type="number"
              required
              onChange={(event) =>
                handleUserInputChange("initialInvestment", event.target.value)
              }
              value={userInput.initialInvestment}
            />
          </label>
        </p>
        <p>
          <label>
            Annual Investment
            <input
              name="annualInvestment"
              type="number"
              required
              onChange={(event) =>
                handleUserInputChange("annualInvestment", event.target.value)
              }
              value={userInput.annualInvestment}
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            Expected Return
            <input
              name="expectedReturns"
              type="number"
              required
              onChange={(event) =>
                handleUserInputChange("expectedReturns", event.target.value)
              }
              value={userInput.expectedReturns}
            />
          </label>
        </p>
        <p>
          <label>
            Duration
            <input
              name="duration"
              type="number"
              required
              onChange={(event) =>
                handleUserInputChange("duration", event.target.value)
              }
              value={userInput.duration}
            />
          </label>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
