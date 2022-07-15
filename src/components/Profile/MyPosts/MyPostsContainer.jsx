import { addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux/es/exports"; 

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    on: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    }
  }
}

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;
