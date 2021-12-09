import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function Header() {
  const user = useContext(DataContext);
  let history = useHistory();

  const logout = () => {
    history.push("/");
    localStorage.clear(user);
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "5px",
        padding: "10px",
      }}
    >
      <img
        style={{ width: "132px", height: "25px", cursor: "pointer" }}
        src="https://www.branded.co.il/images/logo.png"
        alt="brandedLogo"
      />
      <button className="headerButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
