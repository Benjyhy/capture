import React from 'react';

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FAQSection />
        </motion.div>
    );
}

export default AboutUs;