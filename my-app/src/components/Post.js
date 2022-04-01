import React, {useEffect, useState} from 'react'
import { 
    UserIcon,
    ChatIcon,
    HeartIcon,
} from '@heroicons/react/outline'
import Commentsection from './Commentsection'
import axios from "../axios";

function Post({post}) {

    const [comments, setComments] = useState("");
    const [allComments, setAllComments] = useState([]);
    

    const uploadComments = async () => {

        await axios.post('/upload/comments', {
            text: comments,
        });
        setComments("");
        window.location.reload();
    };


    const fetchComments = async () => {
        await axios.get("/sync/comments").then(response => {
            setAllComments(response.data)
        });
    }
    useEffect(()=>{
        fetchComments();
      },[]);



  return (
    <div className='bg-[#13192b] mt-8 max-w-4/5 max-h-[48em] p-2 rounded-xl shadow-sm sm:w-4/5 sm:h-[52em]'>
        <div className='post-head flex items-center'>
            <UserIcon className='h-8 text-gray-500 hover:text-yellow-400 cursor-pointer' />
            <p className='ml-2'>Irtaza</p>
            <small className='ml-2 text-[10px] cursor-pointer hover:text-yellow-400'>@irtaza123</small>
        </div>
        <div className='post-text p-3'>
            <p>{post.text}</p>
        </div>
        <div className='post-image mt-2 flex justify-center'>
            <img className="object-contain h-[25em] max-w-4/5 sm:max-w-4/5 " src={post.image} alt="#" />
        </div>
        <div className='post-items flex mt-2'>
            <ChatIcon className='h-7 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
            <HeartIcon className='h-7 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
        </div>
        <div className='post-commentsection mt-4 h-[30px] flex items-center border-none bg-[#19223d] rounded-3xl'>
            <input value={comments} onChange={(e) => setComments(e.target.value)} className="resize-none bg-transparent text-sm ml-4 w-4/5 focus:outline-none text-white" type='text' placeholder="Say Somthing..."/>
            <p onClick={uploadComments} className='mr-[20px] cursor-pointer hover:text-yellow-400 sm:ml-[70px]'>Enter</p>
        </div>
        <div className=' cursor-pointer max-h-[9em] overflow-y-scroll scrollbar-hide'>
            {allComments.map((comment)=>{
                return (
                    <Commentsection  comment={comment}/>
                )
            })}
        </div>
    </div>
  )
}

export default Post