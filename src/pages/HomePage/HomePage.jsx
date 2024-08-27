import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h2>Welcome to Phonebook</h2>
      {isLoggedIn ? (
        <div>
          <Link to="contacts">My contacts</Link>
        </div>
      ) : (
        <div>
          <Link to="login">Login</Link> <Link to="register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
