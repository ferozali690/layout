import React from "react";
import "./contact.css";

const Contact = props => {
  return (
    <div className="contact_wrapper">
      <div className="contact_container">
        <h1 style={{ color: "#bcbcbc" }}>{props.heading}</h1>
        <span style={{ color: "#3d3d3d" }}>{props.subheading}</span>
        <div className="contact_input_containers">
          {props.disableCountry && (
            <div className="contact_text_align">
              <span style={{ color: "#bababa" }}>Country Code</span>
              <br />
              <select className="select_drop">
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
                <option value="+94">+94</option>
              </select>
            </div>
          )}
          {props.getEmail && (
            <div>
              <label style={{ color: "#bababa" }}>Email</label>
              <input type="email" className="input_align" />
            </div>
          )}
          {props.disableNumber && (
            <div>
              <span style={{ color: "#bababa" }}>number</span>
              <br />
              <input type="text" size="15" className="input_align" />
            </div>
          )}

          {props.disable && (
            <div>
              <span style={{ color: "#bababa" }}>Extension</span>
              <br />
              <input type="text" size="15" className="input_align" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
