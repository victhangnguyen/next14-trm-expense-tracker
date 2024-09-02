import React from "react";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
      </div>
    </nav>
  );
};

export default Header;
