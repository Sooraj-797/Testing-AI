import styled, { keyframes } from 'styled-components';

const borderGlow = keyframes `
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const textGlowRed = keyframes`
    0% {
        text-shadow: 0 0 1px #ff0057, 0 0 1.5px #ff0057;
    }
    50% {
        text-shadow: 0 0 1.5px #ff0057, 0 0 2px #ff0057;
    }
    100% {
        text-shadow: 0 0 1px #ff0057, 0 0 1.5px #ff0057;
    }
`;

const textGlowBlue = keyframes`
    0% {
        text-shadow: 0 0 1px rgb(0, 195, 255), 0 0 1.5px rgb(0, 195, 255);
    }
    50% {
        text-shadow: 0 0 1.5px rgb(0, 195, 255), 0 0 2px rgb(0, 195, 255);
    }
    100% {
        text-shadow: 0 0 1px rgb(0, 195, 255), 0 0 1.5px rgb(0, 195, 255);
    }
`;

const floatAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const GlowingAI = styled.span`
    color: #ff0057;
    animation: ${textGlowRed} 2s ease-in-out infinite;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const GlowingAutomation = styled.span`
    color: rgb(0, 195, 255);
    animation: ${textGlowBlue} 2s ease-in-out infinite;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: radial-gradient(circle at center, #2a2b32 0%, #1c1c22 50%, #121215 100%);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255, 0, 87, 0.03) 0%, rgba(0, 195, 255, 0.03) 100%);
        pointer-events: none;
    }
`;

export const Heading1 = styled.h1`
    font-size: 3.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
    position: absolute;
    top: 25%;
    left: 5vw;
    white-space: nowrap;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Heading2 = styled.h2`
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
    position: absolute;
    top: calc(20% + 5rem);
    left: 5vw;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

export const Heading3 = styled.h3`
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
    position: absolute;
    top: calc(25% + 5rem);
    left: 5vw;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

export const Form = styled.form`
    position: absolute;
    right: 5vw;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(28, 28, 28, 0.8);
    backdrop-filter: blur(10px);
    padding: 2.5rem;
    width: 20rem;
    max-width: 100%; 
    border-radius: 1.2rem;
    color: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;   
        bottom: 0;
        padding: 3px;
        border-radius: inherit;
        z-index: -1;
        background: linear-gradient(45deg, rgb(0, 195, 255), #ff0057, rgb(0, 195, 255), #ff0057, rgb(0, 195, 255));
        background-size: 300% 300%;
        animation: ${borderGlow} 4s ease infinite;
        mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
        box-sizing: border-box;
    }
`;

export const Title = styled.h2`
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: linear-gradient(90deg, #ff0057, rgb(0, 195, 255));
        border-radius: 3px;
    }
`;

export const InputGroup = styled.div`
    position: relative;
    margin-bottom: 2rem;
`;

export const Label = styled.label<{ isFocused: boolean; hasContent: boolean }>`
    position: absolute;
    left: 0;
    top: ${props => (props.isFocused || props.hasContent) ? '-0.75rem' : '0.5rem'};
    font-size: ${props => (props.isFocused || props.hasContent) ? '0.75rem' : '1rem'};
    color: ${props => (props.isFocused) 
        ? props.isFocused && props.hasContent ? 'rgb(0, 195, 255)' : '#ffffff' 
        : '#888'};
    transition: all 0.3s ease;
    pointer-events: none;
    letter-spacing: 0.5px;
`;

export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #555;
    padding: 0.7rem 0;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
        border-bottom: 2px solid rgb(0, 195, 255);
    }

    &::placeholder {
        opacity: 0;
    }
`;

export const Button = styled.button`
    width: 40%;
    padding: 0.6rem;
    margin-top: 1.5rem;
    background: #ffffff;
    color: black;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(255, 0, 87, 0.3);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: all 0.6s ease;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 7px 20px rgba(255, 0, 87, 0.4);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(1px);
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
`;

export const LinkText = styled.a`
    color: #888;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -2px;
        left: 0;
        background: linear-gradient(90deg, #ff0057, rgb(0, 195, 255));
        transition: width 0.3s ease;
    }

    &:hover {
        color: white;
        
        &::after {
            width: 100%;
        }
    }
`;