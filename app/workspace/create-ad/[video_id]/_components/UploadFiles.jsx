import { FilePlus2, ImageUp, X } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function UploadFiles({ videoData, onHandleInputChange }) {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
    }

    const removeImage = (indexToRemove) => {
        const uploadedFiles = files.filter((_, index) => index !== indexToRemove);
        setFiles(uploadedFiles);
    }
    useEffect(() => {
        files && onHandleInputChange('rawFiles', files)
    }, [files])



    return (
        <div className='p-6 shadow-lg rounded-2xl bg-slate-800/70 text-white backdrop-blur-lg border border-slate-700'>
            <h2 className='font-bold text-xl flex items-center gap-3'>
                <ImageUp className='p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white h-10 w-10 rounded-lg shadow-md' />
                Image/Video Upload</h2>
            <hr className='my-4 border-slate-700' />
            <div className=''>
                <label className='text-slate-400'>Upload Images/Videos for your ads</label>
                <label htmlFor='fileUpload'>
                    <div className='p-8 bg-slate-700/50 border-dashed border-2 border-slate-600 mt-2 cursor-pointer rounded-xl flex items-center justify-center flex-col hover:bg-slate-700/80 transition-all duration-300'>
                        <FilePlus2 className='h-12 w-12 text-slate-400' />
                        <h2 className='text-slate-400 mt-2'>Click here to Upload files</h2>
                    </div>
                </label>
                <input type='file' id="fileUpload" className='hidden'
                    accept='image/*,video/*'
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
                {files.map((file, index) => {
                    const previewUrl = URL.createObjectURL(file);
                    return (
                        <div key={index} className='relative group'>
                            <button onClick={() => removeImage(index)} className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                                <X size={14} />
                            </button>
                            <Image src={previewUrl} alt='images' height={150} width={150}
                                className='w-full h-28 object-cover rounded-lg shadow-md' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UploadFiles
