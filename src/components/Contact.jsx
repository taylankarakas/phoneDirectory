import React from 'react';
import List from './List';
import Form from './Form';

import PropTypes from 'prop-types';

const Contact = props =>
            <div>
                <List contacts = { props.contacts } />
                <Form addContact = { props.addContact } />
            </div>

Contact.propType = {
    contacts : PropTypes.array.isRequired,
    addContact : PropTypes.func.isRequired
};

export default Contact;   

