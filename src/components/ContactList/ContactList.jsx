import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return !visibleContacts.length ? (
    <p>Add your contacts!</p>
  ) : (
    <div className={css.contactList}>
      {visibleContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

export default ContactList;
