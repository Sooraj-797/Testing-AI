import styled, { keyframes } from 'styled-components';

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    background-color: rgba(20, 20, 26, 0.8);
    border-bottom: 1px solid #333;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const BrandLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const BrandName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin: 0 0 0 0.75rem;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled.a<{ active?: boolean }>`
    color: ${props => props.active ? '#00c3ff' : 'white'};
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${props => props.active ? 'linear-gradient(90deg, #00c3ff, #0070f3)' : 'transparent'};
        opacity: ${props => props.active ? 1 : 0};
    }
    
    &:hover {
        color: #00c3ff;
    }
`;

export const AgentHubContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at center, #2a2b32 0%, #1c1c22 50%, #121215 100%);
    color: #ffffff;
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

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(20, 20, 26, 0.8);
    border-bottom: 1px solid #333;
    margin-top: 40px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoIcon = styled.div`
    background: linear-gradient(135deg, #00c3ff, #8a5cf6);
    border-radius: 12px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 0.85rem;
    color: #a0aec0;
    margin: 0;
`;

export const ControlsSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 0.75rem;
`;

export const SelectContainer = styled.div`
    position: relative;
`;

export const Select = styled.select`
    background-color: rgba(28, 28, 34, 0.7);
    color: white;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid #333;
    appearance: none;
    cursor: pointer;
    font-size: 0.9rem;
    
    &:focus {
        outline: none;
        border-color: #00c3ff;
    }
`;

export const SelectedCount = styled.div`
    display: flex;
    align-items: center;
    color: #a0aec0;
    font-size: 0.9rem;
    margin: 0 0.5rem;
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'warning' | 'danger' | 'default' }>`
    background: ${props => {
        switch (props.variant) {
            case 'primary': return 'linear-gradient(135deg, #00c3ff, #0070f3)';
            case 'warning': return '#d69e2e';
            case 'danger': return '#e53e3e';
            default: return 'rgba(28, 28, 34, 0.7)';
        }
    }};
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    border: ${props => props.variant ? 'none' : '1px solid #333'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
    
    &:hover {
        filter: brightness(1.1);
    }
    
    &:active {
        transform: translateY(1px);
    }
`;

export const ContentSection = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const PersonaSidebar = styled.div`
    width: 280px;
    background-color: rgba(28, 28, 34, 0.7);
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #333;
`;

export const SidebarTitle = styled.h2`
    font-size: 1.1rem;
    margin: 0;
`;

export const AddButton = styled.button`
    background-color: rgba(28, 28, 34, 0.7);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    
    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
        border-color: rgba(0, 195, 255, 0.3);
    }
    
    svg {
        color: white;
        width: 18px;
        height: 18px;
        stroke: white;
    }
    
    &.icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ExportButton = styled(AddButton)`
    margin-left: 0.5rem;
    
    svg {
        color: white;
        width: 18px;
        height: 18px;
        stroke: white;
    }
`;

export const PersonaList = styled.div`
    padding: 1rem;
`;

export const SelectAllContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #cbd5e1;
`;

export const SelectAllButtons = styled.div`
    display: flex;
    margin-left: auto;
`;

export const SelectButton = styled.button`
    background-color: transparent;
    color: #cbd5e1;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    
    &:hover {
        background-color: #1e293b;
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.5rem;
    cursor: pointer;
`;

export const PersonaItem = styled.div`
    background-color: rgba(28, 28, 34, 0.7);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    border: 1px solid #333;
    
    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
        border-color: rgba(0, 195, 255, 0.3);
    }
`;

export const PersonaName = styled.h3`
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PersonaDescription = styled.p`
    font-size: 0.85rem;
    color: #a0aec0;
    margin: 0 0 0.5rem 0;
`;

export const PersonaTag = styled.span`
    background-color: rgba(20, 20, 26, 0.6);
    color: #a0aec0;
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    display: inline-block;
    margin-bottom: 0.25rem;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const MessageCount = styled.span`
    font-size: 0.75rem;
    color: #a0aec0;
    display: block;
    margin-top: 0.5rem;
`;

export const ChatContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: transparent;
`;

export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 2rem;
    border-bottom: 1px solid #333;
    background-color: rgba(28, 28, 34, 0.5);
`;

export const ChatTitle = styled.h3`
    font-size: 1.1rem;
    margin: 0;
`;

export const ViewToggle = styled.div`
    display: flex;
    background-color: rgba(20, 20, 26, 0.6);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #333;
`;

export const ViewButton = styled.button<{ active?: boolean }>`
    background-color: ${props => props.active ? 'rgba(40, 40, 46, 0.8)' : 'transparent'};
    color: white;
    padding: 0.4rem 0.75rem;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    
    &:hover {
        background-color: ${props => props.active ? 'rgba(40, 40, 46, 0.8)' : 'rgba(30, 30, 36, 0.7)'};
    }
`;

export const EmptyChat = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #a0aec0;
`;

export const EmptyIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.2;
`;

export const EmptyText = styled.p`
    font-size: 1.1rem;
    text-align: center;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const PlayButton = styled.button`
    background-color: #38a169;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #2f855a;
    }

    &:disabled {
        background-color: #2f855a;
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const UploadButton = styled.button`
    background-color: #2d3748;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #4a5568;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
