import React from 'react';

import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor () {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.inputTextChange = this.inputTextChange.bind(this);
    }

    static propTypes = {
        addContact : PropTypes.func.isRequired
    }

    state = {
        name : '' ,
        phone : ''
    }


    inputTextChange (q) {
        this.setState({
            [q.target.name] : q.target.value
        })
    }


    onSubmit (e) {
        e.preventDefault();
        if (this.state.name !== '' || this.state.phone !== '') {
            this.props.addContact(this.state);
        }
        this.setState({
            name : '',
            phone : ''
        });
    }

    render () {
        return (
            <div>
                <form onSubmit = { this.onSubmit } >
                    <input placeholder = {'enter the name'} value = { this.state.name } onChange = { this.inputTextChange } name = {'name'}  />
                    <input placeholder = {'enter the phone'} value = { this.state.phone } name = {'phone'} onChange = { this.inputTextChange }  />
                    <button>add</button>
                </form>
            </div>
        )
    }
}
export default Form;