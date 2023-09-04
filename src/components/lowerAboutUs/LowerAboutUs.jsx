import React from 'react'
import lower from "../../assets/Snapinsta.app_video_332672125_674976827993868_7058439856066748002_n.mp4"
import "./LowerAboutUs.scss"
import { motion } from 'framer-motion'

const LowerAboutUs = () => {
    return (
        <div className='lowerAboutUs containered'>
            <motion.video src={lower} autoPlay loop muted playsInline alt="" />
        </div>
    )
}

export default LowerAboutUs