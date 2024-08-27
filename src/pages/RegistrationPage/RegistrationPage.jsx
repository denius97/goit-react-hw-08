import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { selectLoading } from "../../redux/contacts/selectors.js";
import { useSelector } from "react-redux";

const RegistrationPage = () => {
  const isLoading = useSelector(selectLoading);
  return isLoading ? <Loader /> : <RegistrationForm />;
};

export default RegistrationPage;
