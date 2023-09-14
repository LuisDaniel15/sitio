import React from 'react'
import desktop from '../assets/images/image-web-3-desktop.jpg'
import mobile from '../assets/images/image-web-3-mobile.jpg'

export function MainComp() {
    return (
        <section>
            <picture>
                <source media='(max-width: 640px)' srcSet={mobile} />
                <source media='(min-width: 640px)' srcSet={desktop} />
                <img src={mobile} alt="" />
            </picture>
            <div className='sm:flex sm:gap-2'>
                <div className='flex-1 py-6'>
                    <h2 className='text-xl font-bold leading-none sm:text-4xl text-center select-none'>The Bright Future of Web 3.0?</h2>
                </div>
                <div className='flex-1'>
                    <p className='text-[15px] mb-8 sm:text-[15px] pt-2 sm:pr-0 lg:pr-20'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className='bg-red-600 w-[150px] h-[40px] rounded-sm hover:bg-gray-600 mb-4'>click me</button>
                </div>
            </div>
        </section>
    )
}
