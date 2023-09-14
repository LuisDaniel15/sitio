import React from "react"
import { Header } from './components/header'
import { MainComp } from "./components/mainComp"
import { ContarinerAs } from './components/ContarinerAs'
import { Cards } from './components/Cards'
import one from './assets/images/image-retro-pcs.jpg'
import tow from './assets/images/image-top-laptops.jpg'
import tree from './assets/images/image-gaming-growth.jpg'


function App() {

  return (
    <main className="px-4 pt-4">
      <Header />
      <div className="sm:flex sm:gap-2 justify-center">
        <MainComp />
        <ContarinerAs />
      </div>
      <div className="flex justify-center mt-10 mb-12 flex-wrap lg:gap-20 sm:flex-nowrap sm:gap-0 2xl:w-4/5 2xl:mx-auto">
        <Cards
          url={one}
          text='What happens when old PCs are given modern upgrades?'
          num='01'
          title='Reviving Retro PCs' />
        <Cards
          url={tow}
          text='Our best picks for various needs and budgets.'
          num='02'
          title='Top 10 Laptops of 2022' />
        <Cards
          url={tree}
          text='The Growth of Gaming'
          num='03'
          title='How the pandemic has sparked fresh opportunities.' />
      </div>


    </main>
  )
}

export default App
