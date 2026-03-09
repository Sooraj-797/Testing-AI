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

export const UnderlineText = styled.span`
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
`;

export const GlowingAutomation = styled.span`
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #000;
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
        background: #000;
        pointer-events: none;
    }
`;

export const Heading1 = styled.h1`
    font-size: 4.0rem;
    color: #ffffff;
    margin-bottom: 1rem;
    position: absolute;
    top: 25%;
    left: 4.8vw;
    white-space: nowrap;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

`;

export const Dot = styled.h1`
    font-size: 4rem;
    color: #007bff;
    margin-bottom: 1rem;
    position: absolute;
    top: 25%;
    left: 32.7vw;
    white-space: nowrap;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Heading2 = styled.h2`
    font-size: 2.5rem;
    color: #BDC1CAFF;
    margin-bottom: 2rem;
    position: absolute;
    top: calc(20% + 6rem);
    left: 5vw;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

export const Heading3 = styled.h3`
    font-size: 2.5rem;
    color: #BDC1CAFF;
    margin-bottom: 2rem;
    position: absolute;
    top: calc(25% + 6.2rem);
    left: 5.2vw;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

export const Form = styled.form`
    position: absolute;
    top: 102px;
    left: 980px;
    width: 300px;
    height: 498px;
    background: #000000E6;
    border-radius: 16px;
    box-shadow: 0px 25px 50px #00000040, 0px 0px 0px #171a1f00;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
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
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background:  #007BFF;;
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
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 0.7rem;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
        border: 1px solid #007bff;
    }

    &::placeholder {
        color: #8b949e;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 320px;
    left: 0.5px;
    width: 300px;
    height: 48px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: #FFFFFF;
    background: #007BFF;
    opacity: 1;
    border-radius: 6px;
    border-width: 0px;
    border-color: #FFFFFF;
    border-style: solid;
    box-shadow: 0px 0px 2px #007BFF4D, 0px 4px 7px #007BFF4D;
    gap: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    .icon {
        width: 20px;
        height: 20px;
        fill: #FFFFFF;
    }

    &:hover {
        color: #FFFFFF;
        background: #007BFF;
    }

    &:hover:active {
        color: #FFFFFF;
        background: #007BFF;
    }

    &:disabled {
        opacity: 0.4;
    }
`;

export const IconInput = styled.div`
    position: relative;
    margin-bottom: 1.5rem;

    i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #8b949e;
        font-size: 1.2rem;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
    color: #8b949e;

    a {
        color: #007BFFFF;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const RememberMe = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #8b949e;
    margin-bottom: 1rem;

    input {
        margin-right: 0.5rem;
    }

    label {
        cursor: pointer;
    }
`;

export const SystemStatus = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5vw;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
        font-size: 0.8rem;
        color: #00ff00;
    }
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 20%;
    left: 67.5vw;
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
`;

export const FooterLink = styled.a`
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
        color: white;
        text-decoration: underline;
    }
`;

export const ForgotPasswordButton = styled.button`
    position: absolute;
    top: 5px;
    left: 190px;
    width: 103px;
    height: 13px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #007BFF;
    background: transparent;
    opacity: 1;
    border: none;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        color: #007BFF;
        background: transparent;
    }

    &:hover:active {
        color: #007BFF;
        background: transparent;
    }

    &:disabled {
        opacity: 0.4;
    }
`;

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #000;
    z-index: 10;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        height: 40px;
    }

    span {
        color: #007bff;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const HeaderLink = styled.a`
    color: #007bff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;

    &:hover {
        color: #00aaff;
    }
`;

export const TextLabel = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #BDC1CAFF;
    margin-bottom: 8px;
`;

export const DontHaveAccountText = styled.div`
    position: absolute;
    top: 380px;
    left: 50px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #BDC1CAFF;
`;

export const SignUpButton = styled.button`
    position: absolute;
    top: 379px;
    left: 200px;
    width: 53px;
    height: 22px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: #007BFF;
    background: transparent;
    opacity: 1;
    border: none;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
        color: #007BFF;
        background: transparent;
    }

    &:hover:active {
        color: #007BFF;
        background: transparent;
    }

    &:disabled {
        opacity: 0.4;
    }
`;

export const AnnouncementBadge = styled.div`
    position: absolute;
    top: 170px;
    left: 68px;
    width: 229px;
    height: 26px;
    background: #007BFF0D;
    border-radius: 9999px;
    border-width: 1px;
    border-color: #007BFF33;
    border-style: solid;
`;

export const AnnouncementDot = styled.div`
    position: absolute;
    top: 9px;
    left: 13px;
    width: 8px;
    height: 8px;
    background: #007BFF;
    border-radius: 9999px;
`;

export const AnnouncementText = styled.div`
    position: absolute;
    top: 5px;
    left: 29px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: #007BFF;
`;

export const StatsContainer = styled.div`
    position: absolute;
    top: 400px;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`;

export const StatValue = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const StatLabel = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #8B949E;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const StatDivider = styled.div`
    width: 1px;
    height: 60px;
    background: #30363D;
`;

export const CopyrightText = styled.div`
    position: absolute;
    top: 690px;
    left: 1150px;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(74, 75, 77, 0.56);
    opacity: 0.8;
`;