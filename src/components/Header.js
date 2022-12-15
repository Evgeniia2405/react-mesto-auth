import React from "react";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Header(props) {
  

  const history = useHistory();
  console.log("From HEADER", props);
  console.log("From HEADER", props.userEmail.email);
  function signOut() {
    localStorage.removeItem("jwt");
    history.push("/sign-in");
    props.onSignOut()
  }
  let location = useLocation();

  if (!props.userEmail) {
    return (
      <div className="navbar">
        <Logo />
        <div className="navbar__nav">
          <Link
            to={location.pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
            className="navbar__link"
          >
            {location.pathname === "/sign-up" ? "Войти" : "Регистрация"}
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>
        <ul className="navbar__nav">
          <li>{props.userEmail}</li>
          <li>
            <button onClick={signOut} className="navbar__link navbar__button">
              Выйти
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
