import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Loader from "./Loader/Loader.jsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps.js";
import { selectError, selectLoading } from "../redux/contactsSlice.js";

function App() {
  const dispath = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <p>An error occurred...</p>}
      {!isLoading ? <ContactList /> : <Loader />}
    </>
  );
}

export default App;
