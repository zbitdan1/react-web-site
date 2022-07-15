import React from "react";
import { NavLink } from "react-router-dom";
import b from'./Header.module.css'

const Header = (props) => {
  return (
    <header className={b.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png" />
      <div className={b.loginBlock}> 
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div> 
      : <NavLink to={'/login'}>Login</NavLink>
      }
      </div>
    </header>
  );
};

export default Header;
