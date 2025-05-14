import React, { useState } from 'react';
import { Button, Container, Form, Input, LinkText, Row, Title } from '../../styles/LoginPage.styles';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Row>
                    <LinkText href="#">Forgot Password?</LinkText>
                    <LinkText href="#">Sign Up</LinkText>
                </Row>
                <Button type="submit">Sign In</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;