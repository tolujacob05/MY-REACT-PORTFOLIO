import React from "react";
import design from '..//Img/design.jpg'; 
import Todo from '..//Img/Todo.jpeg'
import './css/Project.css';
import { motion } from 'framer-motion';


const Variants = {
    hidden: {
        opacity: 0 
    },
    visible: {
        opacity: 1, 
       
        y: '2vh',
        transition: {
            delay: 1.5, duration: 1.5, type: 'spring', stiffness: 10
        }
    }
};


const Projects = () => {
    return (
        <>
            <div className="project1">
                <motion.div className="kanban"
                    variants={Variants} 
                    initial='hidden' 
                    animate='visible'
                >
                    <img src={design} alt='project1' />
                    <h4>This is a KANBAN todo app that takes down your todo, <br /> and lets you group them into <br /> categories according to competion. <br /> You can switch from light mode to dark mode. <br /> Hide Sidebar </h4>
                </motion.div>
                <motion.div className="git" 
                    variants={Variants} 
                    initial='hidden' 
                    animate='visible'
                >
                    <a rel="noopener" href="https://github.com/tolujacob05/TODO-KANBAN.git">GitHub</a>
                    <a rel="noopener" href="https://todokanban.netlify.app/">Application</a>
                </motion.div>
                
                <div className="todo">
                    <motion.div className="mytodo"
                        variants={Variants} 
                        initial='hidden' 
                        animate='visible'
                    >
                        <img src={Todo} alt="TODO" />
                        <h4>A simple Todo App that takes list of todos and <br /> lets you srike out when completed.</h4>
                    </motion.div>
                    <motion.div className="bit" 
                        variants={Variants} 
                        initial='hidden' 
                        animate='visible'
                    >
                        <a rel="noopener" href="https://github.com/tolujacob05/TODO-KANBAN.git">GitHub</a>
                        <a rel="noopener" href="https://todokanban.netlify.app/">Application</a>
                    </motion.div>
                </div>
            </div>
            

        </>
    )
}

export default Projects;