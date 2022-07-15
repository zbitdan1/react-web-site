import React from "react";
import s from "./TopBar.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "../../assets/img/gordon.jpg";
import SideBar from "../sidebar/sidebar";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";

const TopBar = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const onDoubleClick = () => setShowResults(false);
  return (
    <div>
      { props.email === 'd.zbitnyev @gmail.com' ? 
      <input
        value="Показать панель администратора"
        type="submit"
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      />
      : null}
      {showResults ? <TopBarWrapper /> : null}
    </div>
  );
};

const TopBarWrapper = () => {
  return (
    <>
      <div className={s.topbar}>
        <div className={s.topbarWrapper}>
          <div className={s.topLeft}>
            <span className={s.logo}>Left</span>
          </div>
          <div className={s.topRight}>
            <div className={s.topbarIconContainer}>
              <NotificationsIcon />
              <span className={s.topIconBag}>2</span>
            </div>
            <div className={s.topbarIconContainer}>
              <LanguageIcon />
              <span className={s.topIconBag}>2</span>
            </div>
            <div className={s.topbarIconContainer}>
              <SettingsIcon />
              <span className={s.topIconBag}>2</span>
            </div>
            <img className={s.topAvatar} src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className={s.container}>
        <SideBar />
        <div className={s.others}>others pages</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.email
})

export default connect(mapStateToProps, { login })(TopBar);
