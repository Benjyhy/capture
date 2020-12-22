import React from 'react';
import home1 from '../img/home1.png';

//styled
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import Wave from './Wave';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or video ideas that you have. We have profesionnals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="mec avec camera" />
            </Image>
            <Wave />
        </About>
    );
}

export default AboutSection;