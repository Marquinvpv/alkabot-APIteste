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
                    <h2>Profile</h2>
                    <div>
                        <span className='title'>Name: </span>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span className='title'>Username: </span>
                        <span> {user.username}</span>
                    </div>
                    <div>
                        <span className='title'>Email: </span>
                        <span> {user.email}</span>
                    </div>
                    <div>
                        <span className='title'>Phone: </span>
                        <span> {user.phone}</span>

                    </div>
                    <div>
                        <span className='title'>Website: </span>
                        <span>{user.website}</span>
                    </div>
                    <p>Address:</p>
                    <div className='address'>
                        <div>
                            <span className='title'>Street:</span>
                            <span> {user.address.street}</span>
                        </div>
                        <div>
                            <span className='title'>Suite:</span>
                            <span> {user.address.suite}</span>
                        </div>
                        <div>
                            <span className='title'>City:</span>
                            <span> {user.address.city}</span>
                        </div>
                        <div>
                            <span className='title'>Zipcode:</span>
                            <span> {user.address.zipcode}</span>
                        </div>

                    </div>

                </div>
            )
            }
        </div>
    )
}

export default User