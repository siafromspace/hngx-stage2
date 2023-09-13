import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
        <div className='footer-icons'>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <AiFillYoutube />
        </div>
        <ul className='footer-links'>
            <li>Conditions of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>
        </ul>
        <p className='copyright'>&copy; 2023 MovieBox by Yakubu Sharon</p>
    </footer>
  )
}
