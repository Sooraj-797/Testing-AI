import React, { useState } from 'react';
import { Button, Container, Form, GlowingAI, GlowingAutomation, Heading1, Heading2, Heading3, Input, InputGroup, Label, LinkText, Row, Title } from '../../styles/LoginPage.styles';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');
        
        // Basic validation
        if (!email || !password) {
            setFormError('Please fill in all fields');
            return;
        }   
        
        // Simulate loading state for better UX
        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Login attempt with:', { email, password });
            navigate('/home');
            // Here you would normally handle authentication logic
            // For now we just log the credentials
        } catch (error) {
            setFormError('An error occurred. Please try again.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <Heading1>TEST SMITH - AI</Heading1>
            <Heading2>Login to access your smart testing platform</Heading2>
            <Heading3>using <GlowingAI>AI</GlowingAI> & <GlowingAutomation>Automation</GlowingAutomation></Heading3>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                {formError && (
                    <div style={{ 
                        color: '#ff0057', 
                        textAlign: 'center', 
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        {formError}
                    </div>
                )}
                <InputGroup>
                    <Label isFocused={emailFocused} hasContent={email.length > 0}>Email</Label>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocused(true)} 
                        onBlur={() => setEmailFocused(false)}
                        disabled={isLoading}
                    />
                </InputGroup>
                <InputGroup>
                    <Label isFocused={passwordFocused} hasContent={password.length > 0}>Password</Label>
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocused(true)} 
                        onBlur={() => setPasswordFocused(false)}
                        disabled={isLoading}
                    />
                </InputGroup>
                <Row>
                    <LinkText href="#">Forgot Password?</LinkText>
                    <LinkText href="#">Sign Up</LinkText>
                </Row>
                <Button 
                    type="submit" 
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
            </Form>
        </Container>
    );
};

export default LoginPage;