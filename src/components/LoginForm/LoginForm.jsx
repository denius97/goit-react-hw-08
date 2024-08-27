import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Incorrect email address!").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginForm = () => {
  const authError = useSelector(selectAuthError);

  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  if (authError) {
    toast.error(authError);
  }

  return (
    <div className={css.formWrapper}>
      <Formik
        validationSchema={validation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className="input"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
          <Field
            className="input"
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
            Login
          </button>
          <p>
            You don't have account? <Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>{" "}
    </div>
  );
};

export default LoginForm;
