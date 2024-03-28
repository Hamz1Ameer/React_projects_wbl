import React from "react";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import PostApp from "./Project2/PostApp";
import Portfolio from "./Project3/Portfolio";
import CountryCapital from "./CountryCapitalMatches/CountryCapital";
const App = () => {
  const data = {
    Germany: "Berlin",
    Azerbaijan: "Baku",
    Poland: "Warszawa",
    "Papua New Guinea": "Port Moresby",
    };
  return (
    <div>
      {/* <Portfolio/> */}
      <CountryCapital data={data} />
      {/* <ExpenseTracker /> */}
      {/* <PostApp /> */}
    </div>
  );
};

export default App;
