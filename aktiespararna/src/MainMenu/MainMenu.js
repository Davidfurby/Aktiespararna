import React, { useState } from "react";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Settings from "./UserSettings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "../MainMenu/Components/SideBar";
import companies from "../data/JSON/mock.json";

const MainMenu = (props) => {
  let max = companies.length;
  let profilePicture
  let firstName;
  let lastName;
  let personalNumber;
  let address;
  let postTown;
  let postNumber;
  let phoneNumber;
  let email;

  let [profile, setProfile] = useState([
    {
      profilePicture,
      firstName,
      lastName,
      personalNumber,
      address,
      postTown,
      postNumber,
      phoneNumber,
      email,
    },
  ]);
  let [preferredIndustries, setPreferredIndustries] = useState(
    companies.slice(0, 4)
  );
  let [remainingIndustries, setRemainingIndustries] = useState(
    companies.slice(5, max)
  );

  return (
    <div id="mainMenu">
      <Route path="/mainMenu" component={Sidebar} />
      <Route
        path="/mainMenu/home"
        render={() => (
          <Home
            profile={profile}
            preferredIndustries={preferredIndustries}
            remainingIndustries={remainingIndustries}
          />
        )}
      />
      <Route path="/mainMenu/portfolio" component={Portfolio} />
      <Route
        path="/mainMenu/settings"
        render={() => (
          <Settings
            preferredIndustries={preferredIndustries}
            setPreferredIndustries={setPreferredIndustries}
            remainingIndustries={remainingIndustries}
            setRemainingIndustries={setRemainingIndustries}
            password={props.password}
            setPassword={props.setPassword}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      />
    </div>
  );
};

export default MainMenu;
