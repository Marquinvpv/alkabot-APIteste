import React from 'react'

import { useState, useEffect } from 'react';

import blogFetch from '../axios/config';

import "../css/Comments.css"

const Comments = () => {

    const pathParts = window.location.pathname.split("/");
    const id = pathParts[2];

    const [comments, setComments] = useState([])

    const getComments = async () => {
        try {

            const response = await blogFetch.get(`/posts/${id}/comments`)

            const data = response.data;

            setComments(data)

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {

        getComments()

    }, [])


    return (
        <div className='commentpage'>
            {comments.length === 0 ? (<p>Carregando...</p>) : (
                comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <div>
                            <span className='c-title'>Name: </span>
                            <span className='c-name'>{comment.name}</span>
                        </div>
                        <div>
                            <span className='c-title'>Comment: </span>
                            <span className='c-body'>{comment.body}</span>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Comments