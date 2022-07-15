import React from "react";
import a from "./Profileinfo.module.css";

class ProfileinfoStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
            <div>
              <span onClick={this.activateEditMode}>{this.props.status}</span>
            </div>
        )}
        {this.state.editMode && (
            <div>
              <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
            </div>
        )}
      </div>
    );
  }
}
export default ProfileinfoStatus;
