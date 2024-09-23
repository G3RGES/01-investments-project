import React from "react";
import { calculateInvestmentResults } from "./../util/investment";

const Results = ({ userInput }) => {
  const resultData = calculateInvestmentResults(userInput);

  return <table id="result">Results</table>;
};

export default Results;
