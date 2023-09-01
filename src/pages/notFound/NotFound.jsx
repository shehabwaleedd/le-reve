import React, { useEffect } from 'react'
import "./NotFound.scss"
import { motion } from 'framer-motion';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="not-found"
        >
            <h1>404</h1>
            <p>The page you are looking for does not exist.</p>
        </motion.section>
    )
}

export default NotFound