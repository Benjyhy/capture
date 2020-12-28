import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {

    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                    <Line transition={{ duration: .75 }} initial={{ width: "0" }} animate={{ width: pathname === "/" ? "100%" : "0" }} />
                </li>
                <li>
                    <Link to="/work">2. Our work</Link>
                    <Line transition={{ duration: .75 }} initial={{ width: "0" }} animate={{ width: pathname === "/work" ? "100%" : "0" }} />
                </li>
                <li>
                    <Link to="/contact">3. Contact us</Link>
                    <Line transition={{ duration: .75 }} initial={{ width: "0" }} animate={{ width: pathname === "/contact" ? "100%" : "0" }} />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 5;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        width: 30%;
        justify-content: space-between;
        @media (max-width: 1300px){
            justify-content: space-around;
            width: 100%;  
            padding-top: 1rem;
        }
        li{
            position: relative;
        }
    }
    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        @media (max-width: 1300px){
            padding: 1rem; 
            display: inline-block;
        }
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 2rem 0;    
    }
`

const Line = styled(motion.div)`
    height: .3rem;
    background: #23d997;
    width: 0;
    position: absolute;
    bottom: -80%;
    @media (max-width: 1300px){
        left: 0%;
    }
`

export default Nav;