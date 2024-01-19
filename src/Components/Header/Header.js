import React from 'react'
import { FaHome } from "react-icons/fa";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
        <ul className='nav-bar'>
            <li className='nav-list'>
                Home
                <FaHome />
            </li>
            <li className='nav-list'>
                About Us
                <MdOutlineContactPage />
            </li>
            <li className='nav-list'>
                Help
                <TbHelpOctagonFilled />
            </li>
        </ul>
    </div>
  )
}

export default Header;