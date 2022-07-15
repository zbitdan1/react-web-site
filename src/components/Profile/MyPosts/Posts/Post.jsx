import React from "react";
import a from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={a.item}>
      <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" />
      {props.message}
      <div>
        <span>
          {props.like}
        </span>
      </div>
    </div>
  );
};

export default Post;
