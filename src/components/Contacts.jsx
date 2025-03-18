import { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter a valid data");
      return;
    }
    setContacts((contacts) => [...contacts, contact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
    setAlert("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={contact.name}
          onChange={changeHandler}
          name="name"
        />
        <input
          type="text"
          placeholder="lastname"
          value={contact.lastName}
          onChange={changeHandler}
          name="lastName"
        />
        <input
          type="email"
          placeholder="email"
          value={contact.email}
          onChange={changeHandler}
          name="email"
        />
        <input
          type="number"
          placeholder="phone"
          value={contact.phone}
          onChange={changeHandler}
          name="phone"
        />
        <button onClick={addHandler}>Add Contant</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
