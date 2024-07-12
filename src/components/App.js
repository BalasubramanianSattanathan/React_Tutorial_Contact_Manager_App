import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact"; // Import the EditContact component

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const editContactHandler = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setCurrentContact(contactToEdit);
    setIsEditing(true);
  };

  const updateContactHandler = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        getContactId={removeContactHandler}
        editContactId={editContactHandler}
      />
      {isEditing && currentContact && (
        <EditContact
          contact={currentContact}
          onUpdate={updateContactHandler}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default App;
