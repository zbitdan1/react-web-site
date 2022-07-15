import React from "react";
import { Field,reduxForm  } from "redux-form";
import { Textarea } from "../../assets/FormControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import s from "./Dialogs.module.css";
import DialogsItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItems name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  
    let addNewMessage = (values) => {
      props.addMessage(values.valueMessage)
    }

  return (
    <div className={`${s.dialogs} ${s.item}`}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage}/> 
    </div>
  );
};



const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field name={"valueMessage"}
        component={Textarea}
        placeholder={'Enter your message'}
        validate={[required, maxLengthCreator(10  )]}
        />
        <div>
        <button>Add message</button>
      </div>
      </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
