import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} =useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    })
    return (
        <div>
            <p>Here you will see the friend details {friendId}</p>
            <h2>Name: {friend.name}</h2>
            <h3>Email: {friend.email}</h3>
            <h4>Phone Number: {friend.phone}</h4>
        </div>
    );
};

export default FriendDetail;