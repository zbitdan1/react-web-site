import {addMesageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {  
    addMessage: (valueMessage) => {
      dispatch(addMesageActionCreator(valueMessage));
    }
  }
}

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthRedirect  
)(Dialogs)

