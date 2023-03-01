import PropTypes from 'prop-types';
import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';
export const ContactList = ({ onDelete, contacts }) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id} onDelete={onDelete} contact={contact} />
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
