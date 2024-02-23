//import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, updateContact }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  updateContact: PropTypes.func,
};

export default ContactList;
