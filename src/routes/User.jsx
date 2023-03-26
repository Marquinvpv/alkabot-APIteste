import React, { useState, useEffect } from 'react'
import blogFetch from '../axios/config';

import "./../css/User.css"

const User = () => {
    const pathParts = window.location.pathname.split("/");
    const id = pathParts[2];

    const [user, setUser] = useState([])

    const getUser = async () => {
        try {

            const response = await blogFetch.get(`/users/${id}`)

            const data = response.data;

            setUser(data)

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {

        getUser()

    }, [])


    return (
        <div className='userpage'>
            {user.length === 0 ? (<p>Carregando...</p>) : (
                    <div className="user" key={user.id}>
                        <p>Name: </p>
                        <span>{user.name}</span>
                        <p>Username: </p>
                        <span> {user.username}</span>
                        <p>Email: </p>
                        <span> {user.email}</span>
                        <p>Phone: </p>
                        <span> {user.phone}</span>
                        <p>Website: </p>
                        <span>{user.website}</span>
                        <p>Address:</p>
                        <span>Street: {user.address.street}</span>
                        <span>Suite: {user.address.suite}</span>
                        <span>City: {user.address.city}</span>
                        <span>Zispancode: {user.address.zipcode}</span>
                    </div>
                )
            }
        </div>
    )
}

export default User