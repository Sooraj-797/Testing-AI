import React, { useState } from 'react';
import { Button, Container, Form, UnderlineText, GlowingAutomation, Heading1, Heading2, Heading3, Input, InputGroup, Label, Row, Title, RememberMe, SystemStatus, Footer, FooterLink, IconInput, Header, HeaderLogo, HeaderLinks, HeaderLink, TextLabel, ForgotPasswordButton, SignUpButton, DontHaveAccountText, AnnouncementBadge, AnnouncementDot, AnnouncementText, Dot, StatsContainer, StatItem, StatValue, StatLabel, StatDivider, CopyrightText } from '../../styles/LoginPage.styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { User } from '../../types/conversation.types';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');
        
        if (!email || !password) {
            setFormError('Please fill in all fields');
            return;
        }   
        
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Hardcoded credentials for testing
            const adminCredentials = {
                email: 'admin@testforge.ai',
                password: 'admin123'
            };
            
            const testerCredentials = {
                email: 'tester@testforge.ai',
                password: 'tester123'
            };
            
            // Check credentials and create user object accordingly
            if (email === adminCredentials.email && password === adminCredentials.password) {
                const adminUser: User = {
                    id: '1',
                    username: 'operator-01',
                    role: 'admin',
                    email: email
                };
                login(adminUser);
                console.log('Admin login successful');
                navigate('/admin-home');
            } else if (email === testerCredentials.email && password === testerCredentials.password) {
                const testerUser: User = {
                    id: '2',
                    username: 'tester-01',
                    role: 'tester',
                    email: email
                };
                login(testerUser);
                console.log('Tester login successful');
                navigate('/home');
            } else {
                setFormError('Invalid email or password');
                setIsLoading(false);
                return;
            }
        } catch (error) {
            setFormError('An error occurred. Please try again.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <CopyrightText>© 2026 TestForge AI</CopyrightText>
            <Header>
                <HeaderLogo>
                    <img src="/icons/logo.png" alt="TestForge AI Logo" style={{width: "95px",height: "75px",transform: "scale(1.5)",transformOrigin: "center",display: "block", margin: "0 auto",}}/>
                    <span style={{marginLeft: "-60px"}}>TestForge AI</span>
                </HeaderLogo>
                <HeaderLinks>
                    <HeaderLink href="#">Help</HeaderLink>
                    <HeaderLink href="#">Docs</HeaderLink>
                </HeaderLinks>
            </Header>
            <Heading1>TestForge AI</Heading1>
            <Dot>.</Dot>
            <Heading2>Unify Your Quality Engineering with</Heading2>
            <Heading3><UnderlineText>Intelligence</UnderlineText> and <GlowingAutomation>Scale</GlowingAutomation>.</Heading3>
            <AnnouncementBadge>
                <AnnouncementDot />
                <AnnouncementText>New: AI Testing Workbench V1.0</AnnouncementText>
            </AnnouncementBadge>
            <StatsContainer>
                <StatItem>
                    <StatValue>97.8%</StatValue>
                    <StatLabel>Reliability</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                    <StatValue>150+</StatValue>
                    <StatLabel>Tools Unified</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                    <StatValue>1.2M</StatValue>
                    <StatLabel>Tests Run</StatLabel>
                </StatItem>
            </StatsContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                {formError && (
                    <div style={{ 
                        color: ' #007BFF', 
                        textAlign: 'center', 
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        {formError}
                    </div>
                )}
                <InputGroup>
                    <TextLabel>Email Address</TextLabel>
                    <IconInput>
                        <i className="icon-email" />
                        <Input 
                            type="email" 
                            placeholder="name@company.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocused(true)} 
                            onBlur={() => setEmailFocused(false)}
                            disabled={isLoading}
                        />
                    </IconInput>
                </InputGroup>
                <InputGroup>
                    <TextLabel>Password</TextLabel>
                    <ForgotPasswordButton type="button" onClick={() => console.log('Forgot password clicked')}>Forgot Password?</ForgotPasswordButton>
                    <IconInput>
                        <i className="icon-password" />
                        <Input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordFocused(true)} 
                            onBlur={() => setPasswordFocused(false)}
                            disabled={isLoading}
                        />
                    </IconInput>
                </InputGroup>
                <Row>
                    <RememberMe>
                        <input 
                            type="checkbox" 
                            id="rememberMe" 
                            checked={rememberMe} 
                            onChange={(e) => setRememberMe(e.target.checked)}
                            disabled={isLoading}
                        />
                        <label htmlFor="rememberMe">Remember me for 30 days</label>
                    </RememberMe>
                </Row>
                <Button 
                    type="submit" 
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
                <DontHaveAccountText>Don't have an account?</DontHaveAccountText>
                <SignUpButton type="button" onClick={() => console.log('Sign up clicked')}>Sign Up</SignUpButton>
            </Form>
            <SystemStatus>
                <i className="icon-status" />
                All Systems Operational
            </SystemStatus>
            <Footer>
                <FooterLink href="#">System Status</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Documentation</FooterLink>
            </Footer>
        </Container>
    );
};

export default LoginPage;