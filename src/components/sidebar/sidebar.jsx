import React from "react";
import s from "./sidebar.module.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function SideBar() {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <div className={s.sidebarMenu}>
          <h3 className={s.sidebarTitle}>Dashboard</h3>
          <ul className={s.sidebarList}>
            <li className={s.sidebarListItem}>
              <LineStyleIcon />
              Home
            </li>
            <li className={s.sidebarListItem}>
              <TimelineIcon />
              Analytics
            </li>
            <li className={s.sidebarListItem}>
              <TrendingUpIcon />
              Sales
            </li>
          </ul>
        </div>
        <div className={s.sidebarMenu}>
          <h3 className={s.sidebarTitle}>Dashboard</h3>
          <ul className={s.sidebarList}>
            <li className={s.sidebarListItem}>
              <LineStyleIcon />
              Home
            </li>
            <li className={s.sidebarListItem}>
              <TimelineIcon />
              Analytics
            </li>
            <li className={s.sidebarListItem}>
              <TrendingUpIcon />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
