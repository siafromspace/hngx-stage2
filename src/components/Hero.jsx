import React from 'react'
import {AiFillPlayCircle} from "react-icons/ai"
import Logo from "../assets/images/logo.svg"
import Menu from "../assets/images/menu-icon.svg"

export default function Hero({query, setQuery}) {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query)
  return (
    <header>
        <nav>
            <img src={Logo} alt="logo image" className='logo' />
            <input type="text" placeholder='What do you want to watch?' value={query}
        onChange={handleInputChange} />
            <img src={Menu} alt="menu" />
        </nav>
        <div className="description">
            <h1><span>John Wick 3:</span><span>Parabellum</span></h1>
            <div></div>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button><span><AiFillPlayCircle /></span>Watch trailer</button>
        </div>
    </header>
  )
}
