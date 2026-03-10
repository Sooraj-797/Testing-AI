import React, { useState, useCallback, useMemo } from "react";
import {
    AgentHubContainer,
    HeaderSection,
    LogoContainer,
    LogoIcon,
    TitleContainer,
    Title,
    Subtitle,
    ControlsSection,
    SelectContainer,
    Select,
    SelectedCount,
    ActionButton,
    ContentSection,
    PersonaSidebar,
    SidebarHeader,
    SidebarTitle,
    AddButton,
    ExportButton,
    PersonaList,
    SelectAllContainer,
    SelectAllButtons,
    SelectButton,
    Checkbox,
    PersonaItem,
    PersonaName,
    PersonaDescription,
    PersonaTag,
    TagsContainer,
    MessageCount,
    ChatContainer,
    ChatHeader,
    ViewToggle,
    ViewButton,
    EmptyChat,
    EmptyIcon,
    EmptyText,
    PlayButton,
    NavBar,
    LogoSection,
    BrandLogo,
    LogoImg,
    BrandName,
    NavLinks,
    NavLink,
    ChatTitle,
    UploadButton
} from "../../styles/AgentChat.styles";
import { AddIcon, AgentPersonaIcon, UploadIcon } from "../../utils/Icons";
import AddPersona from "../../components/AddPersona";
import LiveConversationGrid from "../../components/LiveConversationGrid";
import { ApiEndpoints, getApiUrl } from "../../utils/constants";
import LiveConversation from "../../components/LiveConversation";
import styled from "styled-components";

const StyledAgentChatPage = styled.div`
  .AgentChatPage {
    background-color: #000;
    color: #fff;
  }

  .AgentChatPage .header {
    background-color: #007BFF;
  }

  .AgentChatPage .button {
    background-color: #007BFF;
    color: #fff;
  }

  .AgentChatPage .progress-bar {
    background-color: #007BFF;
  }
`;

// Define interface for API response
interface PersonaResponse {
  sessionID: number;
  personas: {
    id: string;
    name: string;
    age: number;
    tone: string;
    emotions: string[];
    background: string;
    personality: string;
  }[];
}

// Define interface for conversation API response
interface ConversationResponse {
  sessionID: number;
  agentToSpeak: string;
  personas: {
    id: number;
    emotions: string[];
    conversation: {
      role: 'user' | 'assistant';
      content: string;
    }[];
    personaID: string;
    name: string;
    tone: string[];
    scenario: string;
  }[];
}

// Define interface for message format
interface Message {
  id?: string;
  sender?: 'persona' | 'agent';
  role?: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

// Define interface for our internal persona format
interface Persona {
  id: number | string;
  name: string;
  description: string;
  tags: string[];
  messageCount: number;
  communicationStyle: string;
  interests: string[];
  questionTypes: string[];
  background?: string;
  personality?: string;
  age?: number;
  tone?: string[];
  emotions?: string[];
  scenario?: string;
}

// Define interface for active conversations
interface ActiveConversation {
  conversationId: string;
  personaId: string | number;
  personaName: string;
  agentName: string;
  messageCount: number;
  messages?: Message[];
  status?: 'Live' | 'Paused' | 'Completed';
  startTime?: Date;
  title?: string;
  rating?: number;
  scenario?: string;
}

// Mock data for testing without API
const getMockConversationResponse = (sessionID: number, personaID: string, personaName: string, agentName: string): ConversationResponse => {
  return {
    sessionID,
    agentToSpeak: agentName,
    personas: [
      {
        id: 1,
        emotions: ["happy", "calm"],
        conversation: [
          {
            role: "user",
            content: `What's your analysis on the current AI market trends and growth potential?`
          },
          {
            role: "assistant",
            content: `Based on my analysis, the data indicates a 23% growth trajectory with key indicators pointing to sustainable expansion.`
          },
          {
            role: "user",
            content: `How can we leverage emerging technologies to disrupt traditional industries?`
          }
        ],
        personaID,
        name: personaName,
        tone: ["soft"],
        scenario: `${personaName} is having a conversation about AI trends.`
      }
    ]
  };
};

const AgentChatPage: React.FC = () => {
    const [selectedPersonas, setSelectedPersonas] = useState<(number | string)[]>([]);
    const [viewMode, setViewMode] = useState<'list' | 'chat'>('list');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [activeConversations, setActiveConversations] = useState<ActiveConversation[]>([]);
    const [selectedAgent, setSelectedAgent] = useState<string>("I&E Agent");
    const [currentConversation, setCurrentConversation] = useState<ActiveConversation | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
    const handlePersonaSelect = useCallback((id: number | string) => {
        setSelectedPersonas(prev => 
            prev.includes(id) 
                ? prev.filter(pid => pid !== id) 
                : [...prev, id]
        );
    }, []);
    
    const handleSelectAll = useCallback(() => {
        setSelectedPersonas(prev => 
            prev.length === personas.length 
                ? [] 
                : personas.map(p => p.id)
        );
    }, [personas]);
    
    const handleAddPersona = useCallback(async (persona: {
        count: number;
        name: string;
        scenario: string;
        emotions: string[];
        tone: string[];
        customFields: { name: string; value: string }[];
        sessionID?: number;
    }) => {
        try {
            setIsLoading(true);
            setError(null);
            
            const apiPayload = {
                sessionID: persona.sessionID || Math.floor(Math.random() * 1000),
                count: persona.count,
                name: persona.name,
                emotions: persona.emotions,
                tone: persona.tone,
                scenario: persona.scenario
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
            
            const data: PersonaResponse = await response.json();
            console.log('API Response:', data);
            
            const newPersonas = data.personas.map(p => ({
                id: p.id,
                name: p.name,
                description: p.background,
                tags: [...p.emotions, p.tone],
                messageCount: 0,
                communicationStyle: p.tone,
                interests: p.emotions,
                questionTypes: ["generated"],
                background: p.background,
                personality: p.personality,
                age: p.age,
                tone: [p.tone],
                emotions: p.emotions,
                scenario: persona.scenario
            }));
            
            setPersonas(prevPersonas => [...prevPersonas, ...newPersonas]);
            setIsAddModalOpen(false);
            
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            console.error('Error generating persona:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const toggleAddModal = useCallback(() => setIsAddModalOpen(prev => !prev), []);
    const closeAddModal = useCallback(() => setIsAddModalOpen(false), []);

    const toggleUploadModal = useCallback(() => setIsUploadModalOpen(prev => !prev), []);
    const closeUploadModal = useCallback(() => setIsUploadModalOpen(false), []);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    }, []);

    const handleFileUpload = useCallback(() => {
        if (!selectedFile) return;
        
        // Generate a unique session ID
        const sessionID = Math.floor(Math.random() * 1000000000).toString();
        
        // Create form data for the API request
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('sessionID', sessionID);
        
        setIsLoading(true);
        setError(null);
        
        // Make API call to upload the template
        fetch(getApiUrl(ApiEndpoints.UPLOAD_EVALUATION_TEMPLATE), {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to upload template: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Upload response:', data);
            if (data.success) {
                // Handle successful upload
                closeUploadModal();
                setSelectedFile(null);
                // You could add a success message or additional logic here
            } else {
                throw new Error(data.message || 'Failed to upload template');
            }
        })
        .catch(err => {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            console.error('Error uploading template:', err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [selectedFile, closeUploadModal]);

    // Memoized derived values
    const allSelected = useMemo(() => 
        personas.length > 0 && selectedPersonas.length === personas.length, 
        [personas.length, selectedPersonas.length]
    );

    const renderPersonaItems = useMemo(() => 
        personas.length > 0 ? (
            personas.map(persona => (
                <PersonaItem key={persona.id} onClick={() => handlePersonaSelect(persona.id)}>
                    <PersonaName>
                        {persona.name}
                        <Checkbox 
                            checked={selectedPersonas.includes(persona.id)}
                            onChange={() => {}}
                            onClick={e => e.stopPropagation()}
                        />
                    </PersonaName>
                    <PersonaDescription>
                        {persona.description || persona.background || "No description available"}
                    </PersonaDescription>
                    <TagsContainer>
                        {persona.tags.map((tag, index) => (
                            <PersonaTag key={`${persona.id}-${tag}-${index}`}>{tag}</PersonaTag>
                        ))}
                    </TagsContainer>
                    {persona.age && (
                        <PersonaTag key={`${persona.id}-age`}>Age: {persona.age}</PersonaTag>
                    )}
                    <MessageCount>{persona.messageCount} msgs</MessageCount>
                </PersonaItem>
            ))
        ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                No personas added yet. Click the + button to create one.
            </div>
        ),
        [personas, selectedPersonas, handlePersonaSelect]
    );

    const handleStartSelected = useCallback(async () => {
        if (selectedPersonas.length === 0) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const newConversations: ActiveConversation[] = [];
            
            // Process each selected persona
            for (const personaId of selectedPersonas) {
                const persona = personas.find(p => p.id === personaId);
                
                if (persona) {
                    // Create payload for the API
                    const sessionID = Math.floor(Math.random() * 100000000);
                    const payload = {
                        sessionID,
                        agentToSpeak: selectedAgent,
                        personaID: persona.id,
                        name: persona.name,
                        tone: persona.tone || ["neutral"],
                        emotions: persona.emotions || ["neutral"],
                        scenario: persona.scenario || persona.description || persona.background || `${persona.name} is having a conversation`
                    };
                    
                    console.log('Starting conversation with payload:', payload);
                    
                    let data: ConversationResponse;
                    
                    try {
                        // Try to make API call to start conversation
                        const response = await fetch(getApiUrl(ApiEndpoints.CONVERSATION), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(payload),
                        });
                        
                        if (!response.ok) {
                            throw new Error(`Failed to start conversation: ${response.statusText}`);
                        }
                        
                        data = await response.json();
                    } catch (apiError) {
                        console.warn('API error, using mock data:', apiError);
                        // Use mock data if API fails
                        data = getMockConversationResponse(
                            sessionID, 
                            String(persona.id), 
                            persona.name, 
                            selectedAgent
                        );
                    }
                    
                    console.log('Conversation data:', data);
                    
                    // Process the conversation data from the API response
                    if (data.personas && data.personas.length > 0) {
                        const personaData = data.personas[0];
                        
                        // Extract messages from the conversation
                        const messages: Message[] = personaData.conversation.map((msg, index) => ({
                            id: `${sessionID}-${index}`,
                            role: msg.role,
                            content: msg.content,
                            // For demo purposes, create timestamps a minute apart
                            timestamp: new Date(Date.now() - (personaData.conversation.length - index) * 60000)
                        }));
                        
                        // Determine conversation title based on content
                        const title = getConversationTitle(messages, persona.name, selectedAgent);
                        
                        // Generate a mock rating between 6.5 and 9.0
                        const mockRating = 6.5 + (Math.random() * 2.5);
                        
                        // Add to active conversations
                        newConversations.push({
                            conversationId: `${sessionID}-${persona.id}`,
                            personaId: persona.id,
                            personaName: persona.name,
                            agentName: selectedAgent,
                            messageCount: messages.length,
                            messages: messages,
                            status: 'Live',
                            startTime: new Date(),
                            title,
                            rating: mockRating,
                            scenario: personaData.scenario
                        });
                    } else {
                        // Fallback if no conversation data is returned
                        newConversations.push({
                            conversationId: `${sessionID}-${persona.id}`,
                            personaId: persona.id,
                            personaName: persona.name,
                            agentName: selectedAgent,
                            messageCount: 0,
                            status: 'Live',
                            startTime: new Date(),
                            title: `${persona.name} and ${selectedAgent} Conversation`,
                            rating: 7.0,
                            scenario: persona.scenario
                        });
                    }
                }
            }
            
            // Update state with new conversations
            setActiveConversations(prev => [...prev, ...newConversations]);
            
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to start conversations');
            console.error('Error starting conversations:', err);
        } finally {
            setIsLoading(false);
        }
    }, [selectedPersonas, personas, selectedAgent]);

    const handleAgentChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAgent(e.target.value);
    }, []);

    // Handle viewing a conversation
    const handleViewConversation = useCallback((conversationId: string) => {
        // Find the conversation
        const conversation = activeConversations.find(c => c.conversationId === conversationId);
        if (!conversation) return;
        
        // Set as current conversation
        setCurrentConversation(conversation);
        
        // Switch to chat view
        setViewMode('chat');
    }, [activeConversations]);

    // Handle closing a conversation view
    const handleCloseConversation = useCallback(() => {
        setCurrentConversation(null);
        setViewMode('list');
    }, []);

    // Handle deleting a conversation
    const handleDeleteConversation = useCallback((conversationId: string) => {
        setActiveConversations(prev => prev.filter(c => c.conversationId !== conversationId));
    }, []);

    // Handle pausing all active conversations
    const handlePauseAll = useCallback(() => {
        setActiveConversations(prev => 
            prev.map(conversation => 
                conversation.status === 'Live' 
                    ? { ...conversation, status: 'Paused' } 
                    : conversation
            )
        );
    }, []);

    // Handle resetting conversations
    const handleReset = useCallback(() => {
        // Clear all conversations and personas
        setActiveConversations([]);
        setPersonas([]);
        setSelectedPersonas([]);
    }, []);

    // Handle stopping all conversations
    const handleStopAll = useCallback(() => {
        // Clear all conversations
        setActiveConversations([]);
    }, []);

    return (
        <AgentHubContainer>
            <HeaderSection>
                <LogoContainer>
                    <LogoIcon>
                        <AgentPersonaIcon />
                    </LogoIcon>
                    <TitleContainer>
                        <Title>Multi-Persona Agent Hub</Title>
                        <Subtitle>Parallel conversations between personas and AI agents</Subtitle>
                    </TitleContainer>
                </LogoContainer>
                
                <ControlsSection>
                    <SelectContainer>
                        <Select value={selectedAgent} onChange={handleAgentChange}>
                            <option>I&E Agent</option>
                            <option>Grievance Agent</option>
                            <option>Gov</option>
                            <option>Tech</option>
                        </Select>
                    </SelectContainer>
                    
                    <UploadButton onClick={toggleUploadModal}>
                        <UploadIcon size={16} style={{ marginRight: '8px' }} />
                        Upload Evaluation Template
                    </UploadButton>
                    
                    <SelectedCount>
                        Selected: {selectedPersonas.length}
                    </SelectedCount>
                    
                    <PlayButton 
                        disabled={selectedPersonas.length === 0}
                        onClick={handleStartSelected}
                    >
                        ▶ Start Selected
                    </PlayButton>
                    
                    <ActionButton 
                        variant="warning"
                        onClick={handlePauseAll}
                        disabled={!activeConversations.some(c => c.status === 'Live')}
                    >
                        ⏸ Pause
                    </ActionButton>
                    
                    <ActionButton 
                        onClick={handleReset}
                    >
                        ↺ Reset
                    </ActionButton>
                    
                    <ActionButton 
                        variant="danger"
                        onClick={handleStopAll}
                        disabled={activeConversations.length === 0}
                    >
                        ⏹ Stop All
                    </ActionButton>
                </ControlsSection>
            </HeaderSection>
            
            <ContentSection>
                <PersonaSidebar>
                    <SidebarHeader>
                        <SidebarTitle>Personas ({personas.length})</SidebarTitle>
                        <div style={{ display: 'flex' }}>
                            <AddButton 
                                className="icon-button" 
                                onClick={toggleAddModal}
                                disabled={isLoading}
                            >
                                <AddIcon size={18} />
                            </AddButton>
                        </div>
                    </SidebarHeader>
                    
                    {error && (
                        <div style={{ color: 'red', padding: '10px', backgroundColor: '#ffeeee', borderRadius: '4px', margin: '10px' }}>
                            Error: {error}
                        </div>
                    )}
                    
                    {isLoading && (
                        <div style={{ padding: '10px', textAlign: 'center' }}>
                            Loading personas...
                        </div>
                    )}
                    
                    <PersonaList>
                        <SelectAllContainer>
                            <Checkbox 
                                checked={allSelected} 
                                onChange={handleSelectAll}
                            />
                            <span>Select All ({selectedPersonas.length}/{personas.length})</span>
                            
                            <SelectAllButtons>
                                <SelectButton onClick={() => setSelectedPersonas(personas.map(p => p.id))}>All</SelectButton>
                                <SelectButton onClick={() => setSelectedPersonas([])}>None</SelectButton>
                            </SelectAllButtons>
                        </SelectAllContainer>
                        
                        {renderPersonaItems}
                    </PersonaList>
                </PersonaSidebar>
                
                <ChatContainer>
                    <ChatHeader>
                        <ChatTitle>
                            {viewMode === 'chat' && currentConversation 
                                ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <button 
                                            onClick={handleCloseConversation}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#a0aec0',
                                                cursor: 'pointer',
                                                marginRight: '10px',
                                                fontSize: '1.2rem',
                                                padding: '0.25rem',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            ← Back
                                        </button>
                                        {currentConversation.title || `${currentConversation.personaName} and ${currentConversation.agentName} Conversation`}
                                    </div>
                                ) 
                                : 'Live Conversations'
                            }
                        </ChatTitle>
                        {viewMode === 'list' && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#a0aec0', marginRight: '10px', fontSize: '0.9rem' }}>
                                    {activeConversations.length} {activeConversations.length === 1 ? 'conversation' : 'conversations'}
                                </span>
                            </div>
                        )}
                    </ChatHeader>
                    
                    {viewMode === 'chat' && currentConversation ? (
                        <div style={{ 
                            height: 'calc(100% - 60px)', 
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            <LiveConversation
                                personaId={currentConversation.personaId}
                                personaName={currentConversation.personaName}
                                agentName={currentConversation.agentName}
                                conversationId={currentConversation.conversationId}
                                initialMessages={currentConversation.messages}
                                onClose={handleCloseConversation}
                                title={currentConversation.title}
                                startTime={currentConversation.startTime}
                                status={currentConversation.status}
                                rating={currentConversation.rating || 8.5}
                                scenario={currentConversation.scenario}
                            />
                        </div>
                    ) : (
                        <LiveConversationGrid 
                            conversations={activeConversations}
                            onViewConversation={handleViewConversation}
                            onDeleteConversation={handleDeleteConversation}
                        />
                    )}
                </ChatContainer>
            </ContentSection>

            <AddPersona 
                isOpen={isAddModalOpen}
                onClose={closeAddModal}
                onSave={handleAddPersona}
            />

            {isUploadModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        width: '500px',
                        backgroundColor: '#1a202c',
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h2 style={{ 
                            color: 'white', 
                            marginTop: 0, 
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            Upload Evaluation Template
                        </h2>
                        
                        {error && (
                            <div style={{ 
                                backgroundColor: '#FEE2E2', 
                                color: '#B91C1C', 
                                padding: '10px', 
                                borderRadius: '4px',
                                marginBottom: '15px',
                                fontSize: '0.9rem'
                            }}>
                                {error}
                            </div>
                        )}
                        
                        <div style={{
                            border: '2px dashed #4a5568',
                            borderRadius: '8px',
                            padding: '40px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <div style={{ 
                                color: '#718096', 
                                marginBottom: '20px',
                                fontSize: '4rem',
                                opacity: 0.5
                            }}>
                                <UploadIcon size={64} />
                            </div>
                            
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ color: 'white', marginBottom: '10px' }}>
                                    Drag and drop a file here
                                </p>
                                <p style={{ color: '#718096', margin: '0' }}>
                                    or
                                </p>
                                <label htmlFor="file-upload" style={{
                                    display: 'inline-block',
                                    backgroundColor: '#2d3748',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    marginTop: '10px'
                                }}>
                                    Choose File
                                    <input 
                                        id="file-upload"
                                        type="file"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                        accept=".xlsx,.xls,.csv"
                                    />
                                </label>
                                
                                {selectedFile && (
                                    <p style={{ color: '#a0aec0', marginTop: '10px' }}>
                                        Selected: {selectedFile.name}
                                    </p>
                                )}
                            </div>
                        </div>
                        
                        <p style={{ 
                            color: '#a0aec0', 
                            textAlign: 'center', 
                            margin: '0 0 20px 0',
                            fontSize: '0.9rem'
                        }}>
                            Upload an Excel-based evaluation framework<br />
                            (CIEG, CRAF, etc.)
                        </p>
                        
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '10px'
                        }}>
                            <button 
                                onClick={closeUploadModal}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid #4a5568',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleFileUpload}
                                disabled={!selectedFile || isLoading}
                                style={{
                                    backgroundColor: '#4299e1',
                                    border: 'none',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: selectedFile ? 'pointer' : 'not-allowed',
                                    opacity: selectedFile ? 1 : 0.7
                                }}
                            >
                                {isLoading ? 'Uploading...' : 'Upload'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AgentHubContainer>
    );
};

// Helper function to determine conversation title based on content
const getConversationTitle = (messages: Message[], personaName: string, agentName: string): string => {
  if (!messages || messages.length === 0) {
    return `${personaName} and ${agentName} Conversation`;
  }
  
  // Try to extract a topic from the first message
  const firstMessage = messages[0].content.toLowerCase();
  
  if (firstMessage.includes('market') || firstMessage.includes('growth') || firstMessage.includes('analysis')) {
    return 'AI Market Analysis Discussion';
  } else if (firstMessage.includes('government') || firstMessage.includes('scheme') || firstMessage.includes('financial')) {
    return 'Government Schemes Discussion';
  } else if (firstMessage.includes('technology') || firstMessage.includes('tech') || firstMessage.includes('adoption')) {
    return 'Technology Adoption Strategy';
  }
  
  return `${personaName} and ${agentName} Conversation`;
};

export default AgentChatPage;