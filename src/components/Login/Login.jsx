import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Element, CreateField } from "../../hoc/withFormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const Input = Element("input");

const LoginForm = ({handleSubmit, error}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
      { error && <div className={styles.formSummaryError}>
          {error}
        </div>}
          {CreateField('Login', 'email', [required], Input)}
          {CreateField('Password', 'password', [required], Input, {type: 'password'})}
          {CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
