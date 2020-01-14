import React from "react";
import "./index.css";
import User from "./Components/User/user";
import Contact from "./Components/Contact/contact";
import Address from "./Components/Address/address";
import Button from "./Components/Buttons/button";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="heading_wrapper">
            <h1 style={{ margin: "0px", color: "white", marginLeft: "100px" }}>
              User Account
            </h1>
          </div>
          <div className="button_wrapper">
            <Button cancel="Apply" />
            <Button cancel="cancel" />
          </div>
        </div>

        <User />
        <Contact
          heading="SwitchBoard"
          subheading='provide your firm"s main switchboard number'
          disable={true}
          disableCountry={true}
          disableNumber={true}
        />
        <Contact
          heading="Direct Line"
          subheading="provide your direct work landline number (if applicable)"
          disable={false}
          disableCountry={true}
          disableNumber={true}
        />
        <Contact
          heading="Mobile"
          subheading="provide your cell phone number"
          disable={false}
          disableCountry={true}
          disableNumber={true}
        />
        <Contact
          heading="Email"
          subheading="provide your email (if applicable)"
          disable={false}
          disableCountry={false}
          disableNumber={false}
          getEmail={true}
        />
        <Address
          heading="provide your home address in the city where you work"
          addressOne="Address 1 (street No./street)"
          addressTwo="Address 1 (Apartment-unit-Suits/District)"
          country="country"
          province="state or province"
          city="city"
          zipCode="Zip Code"
        />
      </div>
    );
  }
}

export default App;
