import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserData = () => {
    const[data,SetData] =useState([]);


    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.username}>
                        {item.username}: {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserData