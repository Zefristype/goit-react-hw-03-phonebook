import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';
export const ContactItem = ({ onDelete, contact: { id, name, number } }) => {
  return (
    <>
      <Item>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
