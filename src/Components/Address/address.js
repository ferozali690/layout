import React from "react";
import "./address.css";

const Address = props => {
  return (
    <div className="address_container">
      <h1 style={{ color: "#bcbcbc", margin: "0px" }}>Address</h1>

      <span style={{ color: "#414141" }}>{props.heading}</span>
      <div className="input_handles">
        <div>
          <span style={{ marginLeft: "20px", color: "#bcbcbc" }}>
            {props.addressOne}
          </span>
          <br />
          <input
            type="text"
            style={{ margin: "9px 0px 0px 25px" }}
            className="input_align"
          />
        </div>
        <div>
          <span style={{ marginLeft: "20px", color: "#bcbcbc" }}>
            {props.addressTwo}
          </span>
          <br />
          <input
            type="text"
            style={{ margin: "9px 0px 0px 25px" }}
            className="input_align"
          />
        </div>
      </div>
      <div className="input_handles_two">
        <div>
          <span style={{ margin: "10px", color: "#bcbcbc" }}>
            {props.country}
          </span>
          <select
            style={{
              display: "block",
              margin: "10px",
              backgroundColor: "#252525",
              color: "white",
              border: "none",
              outline: "none",
              width: "200px",
              height: "28px"
            }}
          >
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <span style={{ margin: "10px", color: "#bcbcbc" }}>
            {props.province}
          </span>
          <select
            style={{
              display: "block",
              margin: "10px",
              backgroundColor: "#252525",
              color: "white",
              border: "none",
              outline: "none",
              width: "200px",
              height: "28px"
            }}
          >
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
        <div>
          <span style={{ margin: "10px", color: "#bcbcbc" }}>{props.city}</span>
          <select
            style={{
              display: "block",
              margin: "10px",
              backgroundColor: "#252525",
              color: "white",
              border: "none",
              outline: "none",
              width: "200px",
              height: "28px"
            }}
          >
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div>
          <span style={{ margin: "10px", color: "#bcbcbc" }}>
            {props.zipCode}
          </span>
          <input
            type="text"
            style={{ display: "block", margin: "10px" }}
            className="input_align"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
