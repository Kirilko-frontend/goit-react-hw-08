import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, addContact, deleteContact } from "./redux/contactsOps";
import { changeFilter } from "./redux/filtersSlice";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;
