import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [user,setUser] = useState({});
    var { id } = useParams();

    useEffect(() => {
         async function fetchUser() {
            var response = await fetch("https://reqres.in/api/users/" + id); 
            var jsonObj = await response.json();
            setUser(jsonObj.data);
         }
         fetchUser();
    },[id]);

    return(
        <React.Fragment>
             <h2>{user.first_name} {user.last_name}</h2>
             <h4>{user.email}</h4>
        </React.Fragment>
    )
}

export default UserDetails;