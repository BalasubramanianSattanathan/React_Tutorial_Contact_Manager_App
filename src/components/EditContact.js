import React, { useState } from "react";

const EditContact = ({ contact, onUpdate, onClose }) => {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phNumber, setPhNumber] = useState(contact.phNumber);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...contact, name, email, phNumber });
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>{'< Back'}</span>
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Phone number</label>
                        <input
                            type="text"
                            value={phNumber}
                            onChange={(e) => setPhNumber(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="ui button blue">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;
