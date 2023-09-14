import React from 'react'

export function Cards({ url, num, title, text }) {
    return (
        <div className='flex mb-2 sm:mb-0'>
            <div className='flex-1'>
                <img className='w-[150px] h-[180px]' src={url} alt="" />
            </div>
            <div className='flex-1 px-2 '>
                <h2 className='text-center text-3xl text-slate-400'>{num}</h2>
                <h3 className='text-center text-lg font-bold'>{title}</h3>
                <p className='text-center'>{text}</p>
            </div>
        </div>
    )
}

