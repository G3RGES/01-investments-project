import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const INVESTMENTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INVESTMENTS);

  const handleUserInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleUserInputChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
