import React, { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader.jsx";

const ContactsPage = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
