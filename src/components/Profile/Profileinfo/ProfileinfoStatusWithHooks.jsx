import React, {  useState } from "react";

const ProfileinfoStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status] = useState(props.status)


  const activeEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  return (
    <div>
      { !editMode && 
        <div>
          <b>Status</b>: <span onDoubleClick={activeEditMode}>{props.status}</span>
        </div>
      }
      { editMode &&
        <div>
          <input onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      }
    </div>
  );
};

export default ProfileinfoStatusWithHooks;
