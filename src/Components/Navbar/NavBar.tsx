import React from "react";
import "./NavBar.css"; // Importing the CSS file
import { Avatar } from "antd";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src="/sindhu-logo.png" alt="Logo" />
      </div>      
      {/* Right: Avatar */}
      <div className="user-profile">
      <Avatar size="large" >S</Avatar>

      </div>
    </nav>
  );
};

export default NavBar;
