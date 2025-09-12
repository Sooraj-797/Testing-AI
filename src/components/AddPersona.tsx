import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  FormGroup,
  Input,
  TextArea,
  ButtonGroup,
  CancelButton,
  CreateButton,
  SectionTitle,
  CustomFieldContainer,
  CustomFieldLabel,
  CustomFieldInputWrapper,
  RemoveFieldButton,
  CustomFieldFormContainer,
  CustomFieldButtonGroup,
  SaveFieldButton,
  CancelFieldButton,
  AddCustomFieldButton,
  PlusIcon
} from '../styles/AddPersona.styles';
import { ApiEndpoints, getApiUrl } from '../utils/constants';

interface CustomField {
  name: string;
  value: string;
}

interface AddPersonaProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (persona: {
    count: number;
    name: string;
    scenario: string;
    emotions: string[];
    tone: string[];
    customFields: CustomField[];
  }) => void;
  sessionID?: number;
}

const AddPersona: React.FC<AddPersonaProps> = ({ isOpen, onClose, onSave, sessionID = 0 }) => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [scenario, setScenario] = useState('');
  const [emotions, setEmotions] = useState('');
  const [tone, setTone] = useState('');
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [isAddingField, setIsAddingField] = useState(false);
  const [newFieldName, setNewFieldName] = useState('');
  const [newFieldValue, setNewFieldValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const emotionsArray = emotions.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
      const toneArray = tone.split(',').map(type => type.trim()).filter(type => type !== '');
      
      const newPersona = {
        count,
        name,
        scenario,
        emotions: emotionsArray,
        tone: toneArray,
        customFields
      };
      
      const apiPayload = {
        sessionID: sessionID || Math.floor(Math.random() * 1000),
        count,
        name,
        emotions: emotionsArray,
        tone: toneArray,
        scenario
      };
      
      const response = await fetch(getApiUrl(ApiEndpoints.GENERATE_PERSONA), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      onSave(newPersona);
      resetForm();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error generating persona:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCount(1);
    setName('');
    setScenario('');
    setEmotions('');
    setTone('');
    setCustomFields([]);
    setNewFieldName('');
    setNewFieldValue('');
    setIsAddingField(false);
    setError(null);
  };

  const startAddingField = () => {
    setIsAddingField(true);
  };

  const cancelAddingField = () => {
    setIsAddingField(false);
    setNewFieldName('');
    setNewFieldValue('');
  };

  const saveCustomField = () => {
    if (newFieldName.trim() !== '') {
      setCustomFields([...customFields, { name: newFieldName, value: newFieldValue }]);
      setNewFieldName('');
      setNewFieldValue('');
      setIsAddingField(false);
    }
  };

  const updateCustomFieldValue = (index: number, value: string) => {
    const updatedFields = [...customFields];
    updatedFields[index].value = value;
    setCustomFields(updatedFields);
  };

  const removeCustomField = (index: number) => {
    const updatedFields = customFields.filter((_, i) => i !== index);
    setCustomFields(updatedFields);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Create New Persona</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <ModalContent>
          {error && (
            <div style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffeeee', borderRadius: '4px' }}>
              Error: {error}
            </div>
          )}
          
          <FormGroup>
            <Input
              type="number"
              placeholder="No. of Persona"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              placeholder="Persona Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          
          <FormGroup>
            <TextArea
              placeholder="Scenario"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            />
          </FormGroup>
          
          <FormGroup>
            <Input
              type="text"
              placeholder="Emotions (comma separated)"
              value={emotions}
              onChange={(e) => setEmotions(e.target.value)}
            />
          </FormGroup>          
          <FormGroup>
            <Input
              type="text"
              placeholder="Tone (comma separated)"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            />
          </FormGroup>
          
          {/* Custom Fields Section */}
          {customFields.length > 0 && (
            <SectionTitle>Custom Fields</SectionTitle>
          )}
          
          {customFields.map((field, index) => (
            <FormGroup key={index}>
              <CustomFieldContainer>
                <CustomFieldLabel>{field.name}</CustomFieldLabel>
                <CustomFieldInputWrapper>
                  <Input
                    type="text"
                    placeholder={`Enter ${field.name}`}
                    value={field.value}
                    onChange={(e) => updateCustomFieldValue(index, e.target.value)}
                  />
                  <RemoveFieldButton onClick={() => removeCustomField(index)}>×</RemoveFieldButton>
                </CustomFieldInputWrapper>
              </CustomFieldContainer>
            </FormGroup>
          ))}

          {/* Add Custom Field Form */}
          {isAddingField ? (
            <CustomFieldFormContainer>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Field name (e.g., Age, Location)"
                  value={newFieldName}
                  onChange={(e) => setNewFieldName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Field value"
                  value={newFieldValue}
                  onChange={(e) => setNewFieldValue(e.target.value)}
                />
              </FormGroup>
              <CustomFieldButtonGroup>
                <SaveFieldButton onClick={saveCustomField}>Save</SaveFieldButton>
                <CancelFieldButton onClick={cancelAddingField}>Cancel</CancelFieldButton>
              </CustomFieldButtonGroup>
            </CustomFieldFormContainer>
          ) : (
            <AddCustomFieldButton onClick={startAddingField}>
              <PlusIcon>+</PlusIcon>
              <span>Add Custom Field</span>
            </AddCustomFieldButton>
          )}
          
          <ButtonGroup>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <CreateButton 
              onClick={handleSubmit} 
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1 }}
            >
              {isLoading ? 'Creating...' : 'Create'}
            </CreateButton>
          </ButtonGroup>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddPersona;
