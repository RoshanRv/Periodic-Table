import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Header = ({tab,setTab}) => {

    const tabClick=()=>{
        setTab(true)
    }

    const gameClick=()=>{
        setTab(false)
    }

  return (
    <header className='font-head'>
        <nav className='text-center flex justify-around items-baseline px-2 bg-black/30 pt-2'>
            <Link to='/'><button className={`md:px-2 text-white p-1 bla border-black/80 text-[.65rem] md:text-lg ${tab&&'border-b-2 md:border-b-4'}`} onClick={()=>tabClick()}>Table</button></Link>
            {/* <img src={logo} alt="" /> */}
            <h1 className='md:text-3xl text-lg text-white txt md:pb-2'>PERIODIC TABLE</h1>
            <Link to='/game'><button className={`md:px-2 p-1 text-white bla border-black/80 text-[.65rem] md:text-lg ${!tab&&'border-b-2 md:border-b-4'}`} onClick={()=>gameClick()}>Game</button></Link>
        </nav>
    </header>
  )
}

export default Header