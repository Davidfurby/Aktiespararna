import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import { Link } from "react-router-dom";

const Preferences = (props) => {
  let IndustryArr = [];
  IndustryArr = mock.map((value) => {
    return value.Industry;
  });
  let uniqueIndustryArr = Array.from(new Set(IndustryArr));
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(uniqueIndustryArr.slice(0, max));
  let ImplementBank = () => {
    alert("Integrera Bank");
  };

  const ShowMore = (e) => {
    let value = parseInt(e.target.value);
    setMax(value);
    setIndustries(uniqueIndustryArr.slice(0, max));
  };

  let currentlyShown = (companies, index) => {
    return (
      <div id={index} key={index}>
        <input type="checkbox" name="checkbox" value={companies} />
        <label>{companies}</label>
        <br />
      </div>
    );
  };

  let addPreferred = (e) => {
    e.preventDefault();

    let checkbox = document.querySelectorAll('input[name="checkbox"]:checked');
    let checkedIndustries = [];
    checkbox.forEach((checkbox) => {
      checkedIndustries.push(checkbox.value);
    });
    console.log(checkedIndustries);
    if (checkedIndustries.length <= 4) {
      let check = mock.filter((values) => {
        return checkedIndustries.includes(values.Industry);
      });
      let remaining = mock.filter((values) => {
        return !checkedIndustries.includes(values.Industry);
      });
      props.setPreferredIndustries(check);
      props.setRemainingIndustries(remaining);
    } else {
      return alert("Kan bara ha max 4 prefererade industrier i taget");
    }
  };

  return (
    <div>
      <form onSubmit={addPreferred}>
        <p>Mina prefererade industrier att investera inom:</p>
        <button id={"add"} type={"button"} value={max + 5} onClick={ShowMore}>
          Visa fler industrier
        </button>
        {industries.map(currentlyShown)}
        <br />
        <Link onClick={ImplementBank} to={"/"} style={{ color: "blue" }}>
          Integrera bank
        </Link>
        <br />
        <input type="submit" value="Spara"></input>
      </form>
    </div>
  );
};
export default Preferences;
