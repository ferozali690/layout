import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="user_container">
      <div className="user_image" />
      <div className="user_headings">
        <h5>Christopher McDaniel</h5>
        <h5>Factory Administrator</h5>
        <h5>ID: 008739</h5>
      </div>

      <div className="user_sub_headings">
        <h3 style={{ borderBottom: "1px solid #191919" }}>Contact Info</h3>
        <h3 style={{ borderBottom: "1px solid #191919" }}>Messaging</h3>
        <h3 style={{ borderBottom: "1px solid #191919" }}>Security</h3>
        <h3 style={{ borderBottom: "1px solid #191919" }}>Language</h3>
      </div>
    </div>
  );
};

export default User;
