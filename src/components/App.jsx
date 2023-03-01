import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Container/Container.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({
        contacts: parsedContacts,
      });
    }
  };
  componentDidUpdate = (_, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  makeContact = (name, number) => {
    return { id: nanoid(), name, number };
  };
  checkContact = value => {
    const { contacts } = this.state;
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
    return isInContacts;
  };
  addContact = ({ name, number }) => {
    if (this.checkContact(name)) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [this.makeContact(name, number), ...prevState.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.changeFilter} />
        <ContactList onDelete={this.handleDelete} contacts={visibleContacts} />
      </Layout>
    );
  }
}
