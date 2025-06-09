import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, setContacts } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  useEffect(() => {
    const saved = localStorage.getItem("contacts");
    if (saved) {
      dispatch(setContacts(JSON.parse(saved)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  const filteredContacts = contacts.filter((contact) => {
    if (!contact.name || typeof contact.name !== "string") return false;
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
