import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { CreateField, Input } from "../../assets/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { login } from "../../Redux/auth-reducer";
import style from "../../assets/FormControls/FormControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField(
        "Email",
        "email",
        null,
        [required, maxLengthCreator(50)],
        Input,
      )}
      {CreateField(
        "Password",
        "password",
        "password",
        [required, maxLengthCreator(50)],
        Input,
      )}
      {CreateField(
        null,
        "rememberMe",
        "checkbox",
        [required, maxLengthCreator(50)],
        Input,
        "remember me"
      )}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && CreateField(
        "Symbols for captcha",
        "captcha",
        "input",
        [required],
        Input,
        ""
      )}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
