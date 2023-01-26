import React from "react";
import Tolu from '../Img/Tolu.jpeg';
import './css/Home.css'
import { motion } from 'framer-motion'
import { MdWavingHand } from 'react-icons/md'

const homeVariants = {
    hidden: {
        opacity: 0,
        x: 0,
    },
    visible: {
        opacity: 1,
        y: '5vh',
        transition: {delay: 1.5, duration: 1.5, yoyo: Infinity, type: 'tween' }
    }
};

const imageVariants = {
    eOne: {
        x: [-10, 0],
        y: [10, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
};

const lineVariant = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: -10,
        y: 10,
        transition: {
            delay: 1.5, duration: 1.5, type: 'spring', stiffness: 10
        }
    }
}

const Home = () => {
    return (
        <>
            <div className="home">
                <motion.div className="image" 
                    variants={imageVariants}
                    animate='eOne'
                >
                    <img src={Tolu} alt="Tolu" />
                </motion.div>
                <section className="name">
                    <motion.h3
                        variants={homeVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        Hi! <MdWavingHand /> 😁 My Name is
                    </motion.h3>
                    <motion.h1
                        variants={homeVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        Akinjare Toluwase Matthew 
                    </motion.h1>
                    <motion.h2
                        variants={homeVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        A graduate of Afe Babalola University <br/>
                        Frontend Web & Application developer and Programmer
                    </motion.h2>
                    <motion.div className="line"
                        variants={lineVariant}
                        initial='hidden'
                        animate='visible'
                    >
                        <hr />
                    </motion.div>
                </section>
            </div>
        </>
    )
}

export default Home;