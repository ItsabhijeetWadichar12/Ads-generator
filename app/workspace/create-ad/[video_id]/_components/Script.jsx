import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Video } from 'lucide-react'
import React from 'react'

function Script({ videoData, onHandleInputChange }) {
    return (
        <div className='p-6 shadow-lg rounded-2xl bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <h2 className='font-bold text-xl flex items-center gap-3'>
                <Video className='p-2 bg-gradient-to-r from-green-400 to-blue-500 text-white h-10 w-10 rounded-lg shadow-md' />
                Video Ads Script</h2>
            <hr className='my-4 border-slate-700' />
            <div className=''>
                <label className='text-gray-500'>Video Project Topic</label>
                <Input value={videoData?.topic} 
                className='text-xl bg-slate-700/50 border-slate-600 text-white rounded-lg mt-2 focus:ring-2 focus:ring-blue-500'
        />
      </div>
            <div className='mt-3'>
                <label className='text-gray-500'>Video Script</label>
                <Textarea className={'text-lg bg-slate-700/50 border-slate-600 text-white rounded-lg h-40 mt-2 focus:ring-2 focus:ring-blue-500'}
                    onChange={(e) => onHandleInputChange('script', e.target.value)}
                    value={videoData?.script ?? videoData?.scriptVariant?.[0]?.content} />
            </div>

            <div className='grid grid-cols-3 gap-3 mt-3'>
                {videoData?.scriptVariant?.map((script, index) => (
                    <div key={index}
                       className={`p-5 text-sm border rounded-xl cursor-pointer transition-all duration-300 bg-slate-700/50 hover:bg-slate-700/80 hover:border-blue-500
                ${script?.content === videoData?.script ? 'border-blue-500 bg-blue-900/50 text-white' : 'border-slate-700'}`}
              onClick={() => script?.content && onHandleInputChange('script', script.content)}
            >
                        <h2 className='line-clamp-3'>{script?.content || 'No content available'}</h2></div>
                ))}
            </div>
        </div>
    )
}

export default Script