import React from 'react'
import lower from "../../assets/jason-leung--eKZLpj7U0E-unsplash.jpg"
import "./LowerAboutUs.scss"
import { motion } from 'framer-motion'

const LowerAboutUs = () => {
    return (
        <div className='lowerAboutUs containered'>
            <motion.img src={lower} alt="" />
        </div>
    )
}

export default LowerAboutUs