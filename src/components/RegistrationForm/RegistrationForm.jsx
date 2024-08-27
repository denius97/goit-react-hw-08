import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Incorrect email address!").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        validationSchema={validation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field name="name" placeholder="Enter your name" />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
          <Field name="email" placeholder="Enter your email" />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
          <button className="btn" type="submit">
            Register
          </button>

          <p>
            You already have account? <Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
