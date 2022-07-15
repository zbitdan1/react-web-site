import React from "react";
import s from "./Nav.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Nav = (props) => {
  return (
    <>
      <nav className="nav">
        <div className="item">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="item">
          <NavLink to="/dialogs">Messegs</NavLink>
        </div>
        <div className="item">
          <NavLink to="/users">Users</NavLink>
        </div>
        <div className="item">
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="item">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="item">
          <NavLink to="/settings">Settings</NavLink>
        </div>
        {props.email === "d.zbitnyev@gmail.com" ? (
          <div className="admin">
            <NavLink to="/admin">Admin</NavLink>
          </div>
        ) : null}
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
});

export default connect(mapStateToProps, { login })(Nav);
