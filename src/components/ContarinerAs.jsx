import React from 'react'
import { ContAside } from './ContAside'


export function ContarinerAs() {
    return (
        <aside className='bg-slate-900 text-white px-4 py-2 '>
            <h2 className='text-2xl text-center text-orange-300'>New</h2>
            <ContAside
                title='Hydrogen VS Electric Cars'
                text='Will hydrogen-fueled cars ever catch up to EVs?'
            />
            <ContAside
                title='  The Downsides of AI Artistry'
                text='  What are the possible adverse effects of on-demand AI image generation?' />
            <ContAside
                title='Is VC Funding Drying Up?'
                text='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
        </aside>

    )
}



