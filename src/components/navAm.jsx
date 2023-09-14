import { useState } from 'react'

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'
// import pag from './../../unidad.html'
 
export const NavAm = () => {

  const [menuClicked, setMenuClicked] = useState(true)
  console.log(`${menuClicked} inicial`)
  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
    console.log(menuClicked)
  }

  return (
    <>
      <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-white top-0 right-0 sm:relative w-[256px] p-[24px] text-[18px] sm:flex sm:items-center 
                                    sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto  sm:text-[16px]`}>

        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed sm:text-4' href="">Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href='#'>New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Categories</a>
        </li>
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} sm:hidden w-10 h-4 cursor-pointer`} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  )
}

