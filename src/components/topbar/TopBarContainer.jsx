import React from "react";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import TopBar from "./TopBar";


class TopBarContainer extends React.Component{ //React.Component для того что бы реакт понимал что мы хотим класс возвращать как класовую компоненту
  
  render() { 
    
    return (
      <div>
        <TopBar />
      </div>
    );
  }
}


export default compose(
  withAuthRedirect
)(TopBarContainer)

