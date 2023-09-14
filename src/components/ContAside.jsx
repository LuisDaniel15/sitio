import React from 'react'

export function ContAside({title, text}) {
    return (
        <article className='h-[120px] border-b-2 py-2 last:border-none sm:w-[300px]'>
            <h2 className='hover:text-orange-300 font-bold mb-2'>{title}</h2>
            <p className='text-[14px]'>{text}</p>
        </article>
    )
}

