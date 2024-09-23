import React, { useState } from "react";

const UserInput = ({ userInput, onInputChange }) => {
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
                onInputChange("initialInvestment", event.target.value)
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
                onInputChange("annualInvestment", event.target.value)
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
                onInputChange("expectedReturn", event.target.value)
              }
              value={userInput.expectedReturn}
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
                onInputChange("duration", event.target.value)
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
