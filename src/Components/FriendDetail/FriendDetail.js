import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
   useEffect(() =>{
       const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch (url)
        .then (res => res.json())
        .then (data => setFriend(data));
   },[])
    return (
        //distracting
        <div>
            <p>This is friend Details....: {friendId}</p>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>website: {friend.website}</p>


        </div>
    );
};

export default FriendDetail;