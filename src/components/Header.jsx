import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({tab,setTab}) => {

    const tabClick=()=>{
        setTab(true)
    }

    const gameClick=()=>{
        setTab(false)
    }

  return (
    <header>
        <nav className='text-center flex justify-around bg-black/30 p-2'>
            <Link to='/'><button className={`md:px-2 p-1 ${tab&&'border-b-4'}`} onClick={()=>tabClick()}>Table</button></Link>
            <h1 className='p-1 text-xl uppercase'>Periodic Table</h1>
            <Link to='/game'><button className={`md:px-2 p-1 ${!tab&&'border-b-4'}`} onClick={()=>gameClick()}>Game</button></Link>
        </nav>
    </header>
  )
}

export default Header