import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { selectLoading } from "../../redux/contacts/selectors.js";

const LoginPage = () => {
  const isLoading = useSelector(selectLoading);
  return isLoading ? <Loader /> : <LoginForm />;
};
export default LoginPage;
