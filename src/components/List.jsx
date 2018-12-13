import React from 'react';
import './List.css';

import PropTypes from 'prop-types';

class List extends React.Component {
    constructor () {
        super();
        this.onChange = this.onChange.bind(this);
    }

    static propType = {
        contacts : PropTypes.array.isRequired
    }

    state = {
        filterText : ''
    }

    onChange (e) {
        this.setState({
            filterText : e.target.value
        })
    }
    

    render () {

        const filterName = this.props.contacts.filter(val => {
            return val.name.match(RegExp(this.state.filterText))
            // if state.filter is empty, return the all object.    
        })

        // create the list element
        const contactElement = filterName.map(e => {
            return (
                <li key={e.phone}>
                    <span className={ 'name' }>{ e.name }</span>
                    <span className={ 'phone' }>{ e.phone }</span>
                </li>
            )
        })

        return (
            <div className={ 'listArea' }>

                <input placeholder = { 'Filter by name' } value = { this.state.filterText } onChange = { this.onChange }  name = { 'filter' } autoFocus />
                <ul>
                    { contactElement }
                </ul>

            </div>
        )
    }
}
export default List;