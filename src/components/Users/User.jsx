import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/gordon.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const User = ({ users, unfollow, follow }) => {
  let navigate = useNavigate()
  return (
    <div>
      <span>
        <div>
          <button onClick={() => {navigate("/profile/" + users.id)}}>
            <img
              src={users.photos.small != null ? users.photos.small : userPhoto}
              className={styles.userPhoto}
            />
          </button>
        </div>
        <div>
          {users.followed ? (
            <button
              onClick={() => {
                unfollow(users.id);
              }}
            >
              unFollow
            </button>
          ) : (
            <button
              onClick={() => {
                follow(users.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{users.name}</div>
          <div>{users.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
