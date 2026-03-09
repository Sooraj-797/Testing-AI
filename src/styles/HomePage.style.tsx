import styled from 'styled-components';

export const Heading2 = styled.h2`
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 2rem;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Heading3 = styled.h3`
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const ColoredAutomation = styled.span`
    color: #ff0057;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ColoredExecution = styled.span`
    color: rgb(0, 195, 255);
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ColoredReporting = styled.span`
    color: rgb(74, 222, 128);
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ColoredBenchmarking = styled.span`
    color: rgb(167, 139, 250);
    font-weight: bold;
    letter-spacing: 1px;
`;

export const ColoredFlowSmith = styled.span`
    color: #ff6b35;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const CardsWrapper = styled.div`
    display: flex;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0vw;
    padding: 2rem 0;
    z-index: 1;
`;

export const FeatureCard = styled.div`
    background-color: #1f2128;
    border-radius: 1.2rem;
    padding: 2rem;
    position: relative;
    width: 20%;
    margin: 0 1rem;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 221, 255, 0.15), 0 0 25px rgba(255, 0, 122, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 1;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 25px rgba(0, 221, 255, 0.25), 0 0 35px rgba(255, 0, 122, 0.15);
        z-index: 2;
    }

    &:active {
        transform: translateY(-2px);
    }

    h3 {
        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        color: #93c5fd;
    }

    p {
        margin-top: 0.5rem;
        font-size: 0.95rem;
        color: #cbd5e1;
    }

    svg, img {
        width: 64px;
        height: 64px;
        margin: 0 auto;
    }
`;