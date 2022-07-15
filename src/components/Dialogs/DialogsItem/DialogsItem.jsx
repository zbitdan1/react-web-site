import React from "react";
import { NavLink, useParams } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogsItems = (props) => {

  return (
    <>
      <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>

    </>
  );
};

export default DialogsItems;