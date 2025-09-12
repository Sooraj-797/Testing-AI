import styled from 'styled-components';

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: radial-gradient(circle at center, #2a2b32 0%, #1c1c22 50%, #121215 100%);
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  padding-bottom: 1rem;
`;

export const ModalTitle = styled.h2`
  color: white;
  margin: 0;
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #a0aec0;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;

export const ModalContent = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

// Form Styles
export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(30, 41, 59, 0.7);
  border: 1px solid #2d3748;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00c3ff;
  }
  
  &::placeholder {
    color: #64748b;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(30, 41, 59, 0.7);
  border: 1px solid #2d3748;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #00c3ff;
  }
  
  &::placeholder {
    color: #64748b;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const CancelButton = styled(Button)`
  background-color: rgba(30, 41, 59, 0.7);
  color: white;
  border: 1px solid #2d3748;
  
  &:hover {
    background-color: rgba(30, 41, 59, 0.9);
  }
`;

export const CreateButton = styled(Button)`
  background: linear-gradient(135deg, #00c3ff, #0070f3);
  color: white;
  border: none;
  
  &:hover {
    filter: brightness(1.1);
  }
`;

// Custom Field Styles
export const SectionTitle = styled.h3`
  color: white;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const CustomFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomFieldLabel = styled.label`
  color: #a0aec0;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const CustomFieldInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RemoveFieldButton = styled.button`
  background: transparent;
  border: none;
  color: #a0aec0;
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 0.5rem;
  
  &:hover {
    color: #e53e3e;
  }
`;

export const CustomFieldFormContainer = styled.div`
  background-color: rgba(30, 41, 59, 0.4);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #2d3748;
`;

export const CustomFieldButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SaveFieldButton = styled(Button)`
  background-color: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #059669;
  }
`;

export const CancelFieldButton = styled(Button)`
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #dc2626;
  }
`;

export const AddCustomFieldButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px dashed #2d3748;
  border-radius: 8px;
  color: #a0aec0;
  font-size: 0.875rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #00c3ff;
    color: #00c3ff;
  }
`;

export const PlusIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.25rem;
`; 