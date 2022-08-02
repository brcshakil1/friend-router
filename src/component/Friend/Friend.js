import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: "5px solid lightgrey",
        backgroundColor: "rgba(0, 0, 255, .3)",
        margin: "20px",
        padding: "10px",
        borderRadius: "20px"
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}><button>Check detail of {id}</button></Link></p>
        </div>
    );
};

export default Friend;