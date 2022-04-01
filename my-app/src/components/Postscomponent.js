import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from '../axios'
import Pusher from 'pusher-js';

function Postscomponent() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await axios.get("/sync").then(response => {
      setPosts(response.data)
    });
}

  useEffect(()=>{
      fetchPosts();
    },[]);

    useEffect(()=>{
      let pusher = new Pusher('9b5fd42bd89622f52b6b', {
        cluster: 'ap2'
      });
  
      var channel = pusher.subscribe('posts');
      channel.bind('inserted',(data) => {
       console.log(data)
        fetchPosts();

      });
      
    },[])

  return (
    <div className='mt-[100px] flex flex-col justify-center items-center'>
        {posts.map((post)=>{
           return (
              <Post post={post} />
           )
        })}  
    </div>
  )
}

export default Postscomponent