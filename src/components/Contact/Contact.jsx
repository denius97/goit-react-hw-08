import css from "./Contact.module.css";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactCard}>
      <div className={css.info}>
        <span>
          <AiOutlineUser />
          {contact.name}
        </span>
        <span>
          <AiOutlinePhone />
          {contact.number}
        </span>
      </div>
      <button
        onClick={() => {
          if (confirm("Delete contact?")) {
            dispatch(deleteContact(contact.id));
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
