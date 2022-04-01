import React from 'react'
import { 
    UserIcon,
    DotsHorizontalIcon
} from '@heroicons/react/outline'

function Commentsection({comment}) {
    console.log(comment)
  return (
    <div className='p-2 mt-2'>
        <div className='post comments mt-4'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <UserIcon className='h-5 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer' />
                    <p className='ml-2'>Irtaza</p>
                    <small className='ml-2 text-[10px] cursor-pointer hover:text-yellow-400'>@irtaza123</small>
                </div>
                <div className='mr-4'>
                    <DotsHorizontalIcon className='h-5 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
                </div> 
            </div>
            <div className='p-2'>
                <p>{comment.text}</p>
            </div>

        </div>
    </div>
  )
}

export default Commentsection