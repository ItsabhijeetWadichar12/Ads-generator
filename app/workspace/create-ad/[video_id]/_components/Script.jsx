import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

function Script({ videoData, onHandleInputChange }) {
  return (
    <div className='p-5 shadow rounded-xl bg-gray-800 text-white'>
      <h2 className='font-bold text-lg'>Video Ads Script</h2>
      <hr className='my-3 border-gray-600' />

      <div className=''>
        <label className='text-gray-400'>Video Project Topic</label>
        <Input value={videoData?.topic} className={'text-xl bg-gray-700 border-gray-600 text-white'} />
      </div>

      <div className='mt-3'>
        <label className='text-gray-400'>Video Script</label>
        <Textarea className={'text-lg bg-gray-700 border-gray-600 text-white'} 
        onChange={(e) => onHandleInputChange('script', e.target.value)}
        value={videoData?.script??videoData?.scriptVariant[0].content} />
      </div>
      <div className='grid grid-cols-3 gap-3 mt-3'>
        {videoData?.scriptVariant?.map((script,index)=>(
            <div key={index}
            className={`p-5 text-sm border rounded-lg cursor-pointer bg-gray-700
                ${script?.content===videoData?.script&&'border-primary bg-blue-900 text-white'}`}
            onClick={()=>onHandleInputChange('script',script?.content)}
            >
             <h2 className='line-clamp-3'>{script?.content}</h2></div>
        ))}
      </div>
    </div>
  )
}

export default Script