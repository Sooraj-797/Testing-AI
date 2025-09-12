import React from 'react';
import { ConversationListViewProps } from '../types/conversation.types';
import { formatTime, getAgentColor, getElapsedTime, getTopicFromMessages } from '../utils/conversation.utils';
import {
  ListContainer,
  ConversationCard,
  CardHeader,
  Title,
  Timestamp,
  CardContent,
  ParticipantsRow,
  StatusRow,
  StatusInfo,
  StatusIndicator,
  ParticipantIcon,
  ConnectorLine,
  MessageCount,
  Duration,
  ActionButtons,
  ActionButton,
  StatusBadge
} from '../styles/ConversationList.styles';
import { ChartColumnIcon } from '../utils/Icons';

/**
 * Component to display a list of active conversations
 */
const ConversationListView: React.FC<ConversationListViewProps> = ({ 
  conversations,
  onViewConversation,
  onDeleteConversation
}) => {
  if (conversations.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%',
        color: '#a0aec0'
      }}>
        No conversations yet. Start a conversation from the persona panel.
      </div>
    );
  }

  // Function to render star rating
  const renderRating = (rating: number = 0) => {
    // Convert rating to a value between 0-10 if it's not already
    const normalizedRating = rating > 10 ? rating / 10 : rating;
    return (
      <div style={{ 
        color: '#f8e71c', 
        display: 'flex', 
        alignItems: 'center',
        fontSize: '0.9rem',
        fontWeight: 500
      }}>
        ★ {normalizedRating.toFixed(1)}
      </div>
    );
  };

  return (
    <ListContainer>
      {conversations.map((conversation) => {
        const personaInitial = conversation.personaName.charAt(0).toUpperCase();
        const agentInitial = conversation.agentName.charAt(0).toUpperCase();
        const title = conversation.title || `${getTopicFromMessages(conversation.messages)} Discussion`;
        const status = conversation.status || 'Live';
        
        // Generate a mock rating between 6.5 and 9.0 based on conversation ID
        const mockRating = 6.5 + (parseInt(conversation.conversationId.slice(-3), 16) % 25) / 10;
        
        return (
          <ConversationCard key={conversation.conversationId}>
            <CardHeader>
              <Title>{title}</Title>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {renderRating(mockRating)}
                <Timestamp>{formatTime(conversation.startTime || new Date())}</Timestamp>
              </div>
            </CardHeader>
            <CardContent>
              <ParticipantsRow>
                <StatusIndicator status={status} />
                <ParticipantIcon color="#f97316">{personaInitial}</ParticipantIcon>
                <ConnectorLine />
                <ParticipantIcon color={getAgentColor(conversation.agentName)}>{agentInitial}</ParticipantIcon>
                <div style={{ marginLeft: '0.5rem', fontSize: '0.9rem', color: '#d1d5db' }}>
                  {conversation.personaName} • {conversation.agentName}
                </div>
              </ParticipantsRow>
              <StatusRow>
                <StatusInfo>
                  <MessageCount>
                    <span role="img" aria-label="message">💬</span>
                    {conversation.messageCount || conversation.messages?.length || 0}
                  </MessageCount>
                  <Duration>
                    <span role="img" aria-label="time">⏱️</span>
                    {getElapsedTime(conversation.startTime)}
                  </Duration>
                  <StatusBadge status={status}>
                    {status}
                  </StatusBadge>
                </StatusInfo>
                <ActionButtons>
                  <ActionButton>
                    <ChartColumnIcon />
                  </ActionButton>
                  <ActionButton 
                    onClick={() => onViewConversation?.(conversation.conversationId)}
                    title="View conversation">
                    👁️
                  </ActionButton>
                  <ActionButton 
                    onClick={() => onDeleteConversation?.(conversation.conversationId)}
                    title="Delete conversation"
                  >
                    🗑️
                  </ActionButton>
                </ActionButtons>
              </StatusRow>
            </CardContent>
          </ConversationCard>
        );
      })}
    </ListContainer>
  );
};

export default ConversationListView; 