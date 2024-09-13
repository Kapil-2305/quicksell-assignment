import React from 'react';
import './usericon.css';

function UserIcon({ name, available }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div className='usericon-container'>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available ? "available" : ""}`}></div>
        </div>
    );
}

export default UserIcon;