import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer"
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component{ //React.Component для того что бы реакт понимал что мы хотим класс возвращать как класовую компоненту
  
  componentDidMount() {
    usersAPI.getProfile().then(data=> {
      this.props.setUserProfile(data);
    });
  }

  render() { 
    
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withAuthRedirect
)(ProfileContainer)

