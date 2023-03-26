import React from 'react'

import { useState, useEffect } from 'react'
import blogFetch from "./../axios/config"

import { Link } from 'react-router-dom'

import blog from './../img/blog.jpg'

import "./../css/Home.css"

const Home = () => {

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  //Pegar os dados da API
  const getPosts = async () => {
    try {

      const response = await blogFetch.get("/posts")

      const data = response.data;

      setPosts(data)

    } catch (error) {
      console.log(error)
    }

  }

  const getUsers = async () => {
    try {

      const response = await blogFetch.get("/users")

      const data = response.data;

      setUsers(data)

    } catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {

    getPosts()
    getUsers()

  }, [])

  return (
    <div className='homepage'>
      <img src={blog} />
      <p className='title-page'>Últimos posts</p>
      <div className='posts'>
        {posts.length === 0 || users.length === 0 ? (<p>Carregando...</p>) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <Link to={`/user/${post.userId}`}><p>{users.find((item) => item.id === post.userId)?.username}</p></Link>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}/comments`} className="btn">Comments</Link>
            </div>
          ))
        )}

      </div>
    </div>


  )
}

export default Home