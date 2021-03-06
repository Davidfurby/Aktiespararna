import React, { useState } from "react";
import mock from "../../../data/JSON/mock.json";
import ShowMore from "./ShowMoreIndustriesButton";
import currentlyShown from "./CurrentlyShownIndustries";
import ImplementBankButton from "./ImplementBank";
import addPreferences from "./AddPreferences";

const Preferences = (props) => {
  let IndustryArr = mock.map((value) => {
    return value.Industry;
  });

  let uniqueIndustryArr = Array.from(new Set(IndustryArr));
  let [max, setMax] = useState(5);
  let [industries, setIndustries] = useState(uniqueIndustryArr.slice(0, max));

  return (
    <div>
        <p>Mina prefererade industrier att investera inom:</p>
        <ShowMore
          setMax={setMax}
          setIndustries={setIndustries}
          uniqueIndustryArr={uniqueIndustryArr}
          max={max}
        />
        {industries.map(currentlyShown)}
        <br />
        <input
          type="submit"
          value="Spara"
          onClick={(e) => {
            addPreferences(
              e,
              props.setPreferredIndustries,
              props.setRemainingIndustries,
              props.setTime
            );
          }}
        ></input>
        <ImplementBankButton />
    </div>
  );
};
export default Preferences;
