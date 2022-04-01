import React, { useState} from 'react'
import { 
    UserIcon
} from '@heroicons/react/outline';
import FileBase64 from 'react-file-base64';
import axios from "../axios";

function Postcard() {

    const [imgString, SetImgString] = useState("");
    const [text, setText] = useState("");
    

    const uploadPost = async () => {

        await axios.post('/upload', {
            text: text,
            image: imgString,
        });
        setText("");
        window.location.reload();
    };

  return (
    <div className='bg-[#13192b] w-4/5 h-[150px] p-2 rounded-xl shadow-sm sm:w-3/5'>
        <div className='flex mt-2 ml-2'>
            <UserIcon  className='h-8 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
            <textarea value={text} onChange={(e) => setText(e.target.value)} className="resize-none bg-transparent text-lg ml-2 w-full h-[80px] focus:outline-none text-white overflow-y-hidden" type='text' placeholder="What's in your mind..." />
        </div>
        <div className='flex justify-between'>
            <div className='flex mt-2'>
                <div className='group ml-2'>
                    <FileBase64
                    multiple={ false}
                    onDone={({base64})=>SetImgString(base64)} />
                </div>
            </div>
            <div className='bg-gray-700 flex justify-center mr-7 p-2 rounded-xl'>
                <small onClick={uploadPost} className='text-sm hover:text-yellow-400 hover:text-[15px] cursor-pointer'>POST</small>
            </div>
        </div>
    </div>
  )
}

export default Postcard