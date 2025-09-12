import React from "react";
import { Container } from "../../styles/LoginPage.styles";
import { CardsWrapper, ColoredAutomation, ColoredExecution, ColoredReporting, ColoredBenchmarking, FeatureCard, Heading2, Heading3 } from "../../styles/HomePage.style";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (path: string) => {
        navigate(path);
    };

    return (
        <Container>
            <Heading2>Powering the Future of Testing</Heading2>
            <Heading3>Test Ease is an integrated platform that unifies all testing frameworks and tools in a single environment.
It streamlines <ColoredAutomation>automation</ColoredAutomation>, <ColoredExecution>execution</ColoredExecution> and <ColoredReporting>reporting</ColoredReporting> for faster, more reliable testing.
With Test Ease, teams achieve higher efficiency, better collaboration, and improved test coverage.</Heading3>
            <CardsWrapper>
                <FeatureCard onClick={() => handleCardClick('/agentchat')}>
                    <img src="/icons/agent.png" alt="Agents" style={{ width: "75px", height: "75px" }} />
                    <h3><ColoredExecution>Agent Chat</ColoredExecution></h3>
                    <p>Intelligent assistants to drive automated testing with precision and speed.</p>
                </FeatureCard>
                <FeatureCard onClick={() => handleCardClick('/truthlens')}>
                    <img src="/icons/truthlens.png" alt="TruthLens" style={{ width: "75px", height: "75px" }} />
                    <h3><ColoredAutomation>Truth Lens</ColoredAutomation></h3>
                    <p>Visualize, analyze, and validate test results through AI-driven insights.</p>
                </FeatureCard>
                <FeatureCard onClick={() => handleCardClick('/scriptsmith')}>
                <img src="/icons/scriptsmith.png" alt="ScriptSmith" style={{ width: "75px", height: "75px" }} />
                    <h3><ColoredReporting>Script Smith</ColoredReporting></h3>
                    <p>Craft, manage, and execute test scripts across multiple frameworks.</p>
                </FeatureCard>
                <FeatureCard onClick={() => handleCardClick('/benchmark')}>
                <img src="/icons/benchmark.png" alt="Benchmark" style={{ width: "75px", height: "75px" }} />
                    <h3><ColoredBenchmarking>Benchmark</ColoredBenchmarking></h3>
                    <p>Compare and analyze performance metrics across different test runs and environments.</p>
                </FeatureCard>
            </CardsWrapper>
        </Container>
    );
};

export default HomePage;