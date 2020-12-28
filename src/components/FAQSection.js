import React from 'react';

//styled
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FAQSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title={"How do I start ?"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi!</p>
                    </div>
                </Toggle>
                <Toggle title={"Daily Schedule"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi!</p>
                    </div>
                </Toggle>
                <Toggle title={"Different Payment Methods"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi!</p>
                    </div>
                </Toggle>
                <Toggle title={"What products do you offer ?"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi!</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: .2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question{
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0;
        p{
            padding: 1rem 0;
        }
    }
`

export default FAQSection;