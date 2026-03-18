import styled from "styled-components";

export const Nav = styled.nav`
   position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    background-color: #0D0F12;
    z-index: 10;
    gap: 2rem;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoImage = styled.img`
    width: 95px;
    height: 75px;
    object-fit: contain;
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex: 1;

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        display: block;

        &:hover {
            color: #007BFF
        }
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(45, 49, 57, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    min-width: 280px;
    transition: border-color 0.2s ease;

    &:focus-within {
        border-color: rgba(0, 195, 255, 0.5);
    }
`;

export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    color: #9CA3AF;
    
    svg {
        width: 16px;
        height: 16px;
    }
`;

export const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 0.875rem;
    
    &::placeholder {
        color: #6B7280;
    }
`;

export const SearchShortcut = styled.div`
    font-size: 0.75rem;
    color: #6B7280;
    padding: 0.125rem 0.375rem;
    background: rgba(13, 15, 18, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-weight: 500;
`;

export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-left: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.125rem;
`;

export const ProfileName = styled.div`
    font-size: 0.875rem;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: 0.5px;
`;

export const ProfileRole = styled.div`
    font-size: 0.6875rem;
    font-weight: 600;
    color: #007BFF;
    letter-spacing: 0.5px;
`;

export const NotificationIcon = styled.button`
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: color 0.3s;

    &:hover {
        color: #00c3ff;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;

export const NotificationBadge = styled.span`
    position: absolute;
    top: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    background: #FF4757;
    border-radius: 50%;
    border: 2px solid #0D0F12;
`;

export const ProfileButton = styled.button`
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

export const ProfileImage = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2D3139;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #3D4451;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    svg {
        width: 24px;
        height: 24px;
        color: #9CA3AF;
    }
`;

export const OnlineStatus = styled.span`
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 12px;
    height: 12px;
    background: #4ADE80;
    border-radius: 50%;
    border: 2px solid #0D0F12;
`;
