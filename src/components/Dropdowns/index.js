import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './dropdowns.css';
import display from '../../assets/Display.svg';
import down from '../../assets/down.svg';

function DropDowns({ grouping, setGrouping, ordering, setOrdering }) {
    const [visible, setVisible] = useState(false);
    const componentRef = useRef(null);

    const openDropdown = useCallback(() => {
        setVisible(true);
    }, []);

    const handleClickOutside = useCallback((event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            setVisible(false);
        }
    }, []);

    const onGroupingChange = useCallback((e) => setGrouping(e.target.value), [setGrouping]);
    const onOrderingChange = useCallback((e) => setOrdering(e.target.value), [setOrdering]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className='display-dropdown' ref={componentRef}>
            <div className='dropdown-label-container' onClick={openDropdown}>
                <img src={display} alt='display' />
                <div className='dropdown-label'>Display</div>
                <img src={down} alt='down' />
            </div>
            <div className={`dropdown-content-container ${visible ? "visible" : ""}`}>
                <div className='dropdown-content-row'>
                    <div className='dropdown-content-label'>Grouping</div>
                    <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className='dropdown-content-row'>
                    <div className='dropdown-content-label'>Ordering</div>
                    <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default DropDowns;