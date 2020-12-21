import React from 'react';
import home1 from '../img/home1.png';

//styled
import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or video ideas that you have. We have profesionnals with amazing skills.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="mec avec camera" />
            </Image>
        </About>
    );
}

export default AboutSection;