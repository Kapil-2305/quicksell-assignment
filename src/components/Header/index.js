import React from 'react'
import './header.css'
import DropDowns from '../Dropdowns';

function Header({ grouping, setGrouping, ordering, setOrdering }) {
    return (
        <header>
            <DropDowns 
                grouping={grouping} 
                setGrouping={setGrouping} 
                ordering={ordering} 
                setOrdering={setOrdering} 
            />
        </header>
    );
}

export default Header;