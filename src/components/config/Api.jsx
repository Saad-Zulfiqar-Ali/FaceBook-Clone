import React, { useState, useEffect } from 'react';
import Post from '../post/Post';

export default function Api() {
  const [posts, setPosts] = useState([])


  const getPosts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/posts')
      const allPosts = await res.json()
      setPosts(allPosts?.posts ?? [])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

console.log(posts);
  return (
    <div className='middlePane'>
      {posts.map((item,index)=>(
        <Post key={index} item={item} />
      ))}

    </div>

  )
}