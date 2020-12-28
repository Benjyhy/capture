import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styled from 'styled-components';

const Toggle = ({ children, title }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <QuestionTitle layout>{title}</QuestionTitle>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
}

export default Toggle;

const QuestionTitle = styled(motion.h4)`
    cursor: pointer;
`