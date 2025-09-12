import styled from 'styled-components';

export const BenchmarkContainer = styled.div`
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

export const BenchmarkHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: rgba(20, 20, 26, 0.8);
    border-bottom: 1px solid #333;
    margin-top: 40px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const IconContainer = styled.div`
    background: linear-gradient(135deg, #00c3ff, #8a5cf6);
    border-radius: 12px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BenchmarkTitle = styled.h1`
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
    position: relative;
`;

export const BenchmarkSubtitle = styled.p`
    font-size: 0.85rem;
    color: #a0aec0;
    margin: 0;
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const UploadTemplateButton = styled.button`
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
`;

export const ResetButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid #4a5568;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(74, 85, 104, 0.2);
    }
`;

export const ContentArea = styled.div`
    flex: 1;
    padding: 0.8rem;
    overflow-y: auto;
    display: flex;
    gap: 1.5rem;
`;

export const SidebarContainer = styled.div`
    width: 300px;
    background-color: rgba(28, 28, 34, 0.7);
    border-radius: 8px;
    padding: 1.5rem;
    height: fit-content;
    border: 1px solid #333;
`;

export const MainContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const SmallButton = styled.button`
    background-color: rgba(28, 28, 34, 0.7);
    color: #a0aec0;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
    }
    
    &.active {
        background-color: #2d3748;
        color: white;
    }
`;

export const CategoryContainer = styled.div`
    margin-bottom: 0.75rem;
`;

export const CategoryCheckbox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    
    input[type="checkbox"] {
        margin-right: 0.5rem;
        width: 16px;
        height: 16px;
        accent-color: #00c3ff;
    }
    
    label {
        font-weight: 500;
        cursor: pointer;
    }
`;

export const SubCategoryContainer = styled.div`
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const SubCategoryCheckbox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
    
    input[type="checkbox"] {
        margin-right: 0.5rem;
        width: 16px;
        height: 16px;
        accent-color: #00c3ff;
    }
    
    label {
        color: #a0aec0;
        font-size: 0.9rem;
        cursor: pointer;
    }
`;

export const Card = styled.div`
    background-color: rgba(28, 28, 34, 0.7);
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid #333;
`;

export const ModelSelectionContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ModelColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ModelLabel = styled.div`
    font-size: 0.9rem;
    color: #a0aec0;
    margin-bottom: 0.25rem;
`;

export const ModelDropdown = styled.select`
    width: 100%;
    padding: 0.75rem;
    background-color: rgba(20, 20, 26, 0.8);
    border: 1px solid #333;
    border-radius: 6px;
    color: white;
    font-size: 0.9rem;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
    
    &:focus {
        outline: none;
        border-color: #00c3ff;
    }
`;

export const TestCasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TestCasesHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    
    svg {
        color: #a0aec0;
    }
`;

export const TestCasesSubtitle = styled.div`
    font-size: 0.9rem;
    color: #a0aec0;
    margin-bottom: 1rem;
`;

export const SelectedTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: rgba(20, 20, 26, 0.5);
`;

export const SelectedTag = styled.div`
    background-color: rgba(40, 40, 46, 0.8);
    color: white;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    white-space: nowrap;
`;

export const TestCasesContent = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

export const TestCasesColumn = styled.div`
    flex: 1;
`;

export const UploadSection = styled.div`
    border: 1px solid #333;
    border-radius: 6px;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const UploadHeader = styled.div`
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
        color: #a0aec0;
    }
`;

export const UploadDescription = styled.div`
    font-size: 0.8rem;
    color: #a0aec0;
    margin-bottom: 1rem;
`;

export const FileInputContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const BrowseButton = styled.button`
    background-color: rgba(28, 28, 34, 0.7);
    color: white;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
    }
`;

export const FileDisplay = styled.div`
    flex: 1;
    background-color: rgba(20, 20, 26, 0.8);
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0.5rem;
    color: #a0aec0;
    display: flex;
    align-items: center;
`;

export const UploadButton = styled.button`
    background-color: #2d3748;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    align-self: flex-end;
    
    &:hover {
        background-color: #4a5568;
    }
    
    svg {
        width: 16px;
        height: 16px;
    }
`;

export const FormGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const FormLabel = styled.label`
    font-size: 0.9rem;
    color: #a0aec0;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    background-color: rgba(20, 20, 26, 0.8);
    border: 1px solid #333;
    border-radius: 6px;
    color: white;
    font-size: 0.9rem;
    
    &:focus {
        outline: none;
        border-color: #00c3ff;
    }
`;

export const GenerateSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 1rem;
    margin-top: 0;
`;

export const GenerateDescription = styled.div`
    font-size: 0.9rem;
    color: #a0aec0;
    
    div:first-child {
        font-weight: 500;
        color: white;
        margin-bottom: 0.25rem;
    }
`;

export const GenerateButton = styled.button`
    background-color: #4a5568;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    
    &:hover {
        background-color: #2d3748;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    border-bottom: 1px solid #333;
`;

export const Tab = styled.button<{ active?: boolean }>`
    background-color: transparent;
    color: ${props => props.active ? 'white' : '#a0aec0'};
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${props => props.active ? '#00c3ff' : 'transparent'};
    }
    
    &:hover {
        color: white;
    }
`;

export const UploadButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
`;
