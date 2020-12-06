import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import mightycoder from '../assets/profile-pic.jpeg'
import linkedin from '../assets/icons/linkedin.svg'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Vasavi S M</div>
            
            <figure className="sidebar__social-icons my-2">
                <div><a href="https://www.linkedin.com/in/vasavi-s-m-552217195/"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />linkedIn</a></div>
                <div><a href="https://github.com/VasaviSM"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a></div>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Bangalore, India</div> 
                <div className="sidebar__item">vasavi2355@gmail.com</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>click to mail</div>
        </motion.div>
    )
}

export default Sidebar;