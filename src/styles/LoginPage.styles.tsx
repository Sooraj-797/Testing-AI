import styled, { keyframes } from 'styled-components';

const borderGlow = keyframes `
    0% {
        border-image-source: linear-gradient(45deg, #ff0057, #00cfff)
    }
    50% {
        border-image-source: linear-gradient(135deg, #00cfff, #ff0057);
    }
    100% {
        border-image-source: linear-gradient(45deg, #ff0057, #00cfff);
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0 5vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #1c1c1c;
    box-sizing: border-box;
`;

export const Form = styled.form`
    position: relative;
    background: #1c1c1c;
    padding: 2rem;
    width: 25rem;
    max-width: 90%; 
    border-radius: 0.625rem;
    color: white;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 5px; /* border width */
        background: linear-gradient(45deg, #ff0057, #00cfff);
        border-radius: inherit;
        z-index: -1;
        mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
        box-sizing: border-box;
    }
`;

export const Title = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.5rem;
    color: #ffffff;
`;

export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #555;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-bottom: 1px solid #00cfff;
    }

    &::placeholder {
        color: #888;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    background-color: #ffffff;
    color: #1c1c1c;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #00cfff;
        color: #fff;
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
    transition: color 0.3s;

    &:hover {
        color: #00cfff;
    }
`;