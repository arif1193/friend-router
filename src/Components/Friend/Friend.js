import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {
        name, email, id
    } = props.friend;

    const history = useHistory();

    const handleClick = (friendId) => {
        const url =`/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid green',
        margin: '30px',
        padding: '30px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            {/* 1s way */}
            <Link to={`/friend/${id}`}> Show detail of  {id} </Link>
            <br/>
            {/* 2nd way */}
            <button onClick = {() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;