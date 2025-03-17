import { useState } from "react";

function Contacts() {
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
        <button>Add Contant</button>
      </div>
    </div>
  );
}

export default Contacts;
