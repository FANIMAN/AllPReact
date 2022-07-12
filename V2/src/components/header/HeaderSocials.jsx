import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'
import {SiUpwork} from 'react-icons/si'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://fiverr.com" target="_blank"><SiFiverr/></a>
            <a href="https://upwork.com" target="_blank"><SiUpwork/></a>
            <a href="https://dribble.com" target="_blank"><FiDribbble/></a>   
        </div>
    )
}

export default HeaderSocials
