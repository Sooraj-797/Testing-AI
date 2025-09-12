import React from 'react';
import ConversationListView from './ConversationListView';
import { ActiveConversation } from '../types/conversation.types';
import { EmptyStateContainer, EmptyIcon, EmptyText } from '../styles/ConversationList.styles';

interface LiveConversationGridProps {
  conversations: ActiveConversation[];
  onViewConversation?: (conversationId: string) => void;
  onDeleteConversation?: (conversationId: string) => void;
}

/**
 * Component to display a grid of live conversations
 * Currently only supports list view as per requirements
 */
const LiveConversationGrid: React.FC<LiveConversationGridProps> = ({ 
  conversations, 
  onViewConversation,
  onDeleteConversation
}) => {
  if (conversations.length === 0) {
    return (
      <EmptyStateContainer>
        <EmptyIcon>💬</EmptyIcon>
        <EmptyText>No conversations yet. Start a conversation from the persona panel.</EmptyText>
      </EmptyStateContainer>
    );
  }

  return (
    <ConversationListView 
      conversations={conversations} 
      onViewConversation={onViewConversation}
      onDeleteConversation={onDeleteConversation}
    />
  );
};

export default LiveConversationGrid; 