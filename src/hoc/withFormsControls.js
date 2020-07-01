import React from "react";
import styles from "../components/common/FormsControls/FormsControls.module.css";
import {required} from "../utils/validators/validators";
import {Field} from "redux-form";

export const Element = Element => ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const CreateField = (plaseholder, name, validators, component, props={}, text='') => (
  <div>
    <Field
      placeholder={plaseholder}
      component={component}
      name={name}
      validate={validators}
      {...props}
    /> {text}
  </div>

)

