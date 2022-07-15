import React from "react";
import { Field, reduxForm } from "redux-form";
import a from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import {
  FormControl,
  Textarea,
} from "../../../assets/FormControls/FormControls";

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map((p) => (
      <Post key={p.id} message={p.message} like={p.like} />
    ));

    let AddPost = (values) => {
      props.on(values.newPost);
    };


    return (
      <div className={a.postsBlock}>
        <h3>posts</h3>
        <div>new posts</div>
        <AddPostReduxForm onSubmit={AddPost} />
        <div className={a.posts}>{postsElements}</div>
      </div>
    );
  })

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPost"}
          component={Textarea}
          placeholder={"Add new Post"}
          validate={[required, maxLengthCreator(50)]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(MyPostsForm);

export default MyPosts;
