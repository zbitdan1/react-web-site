import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux/es/exports";
import DanyayaJSApp from "../App";
import Login from "../components/Login/Login";
import TopBar from "../components/topbar/TopBar";

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Login />;
      } else {
          <DanyayaJSApp />
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
