import styled from 'styled-components';

// Conversation List View Styles
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  overflow-y: auto;
  height: 100%;
`;

export const ConversationCard = styled.div`
  background-color: rgba(28, 28, 34, 0.7);
  border-radius: 8px;
  border: 1px solid #333;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
`;

export const Timestamp = styled.span`
  color: #a0aec0;
  font-size: 0.85rem;
`;

export const CardContent = styled.div`
  padding: 0 1rem 1rem;
`;

export const ParticipantsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const StatusIndicator = styled.div<{ status: 'Live' | 'Paused' | 'Completed' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
      case 'Live': return '#10b981';
      case 'Paused': return '#f59e0b';
      case 'Completed': return '#6b7280';
      default: return '#6b7280';
    }
  }};
  margin-right: 8px;
`;

export const ParticipantIcon = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  margin-right: 0.3rem;
`;

export const ConnectorLine = styled.div`
  height: 2px;
  width: 20px;
  background-color: #4b5563;
  margin: 0 0.3rem;
`;

export const MessageCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  font-size: 0.85rem;
`;

export const Duration = styled.div`
  color: #a0aec0;
  font-size: 0.85rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem;
  
  &:hover {
    color: white;
  }
`;

// Empty State Styles
export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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

// Status Badge Style
export const StatusBadge = styled.div<{ status: 'Live' | 'Paused' | 'Completed' }>`
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: ${props => {
    switch (props.status) {
      case 'Live': return 'rgba(16, 185, 129, 0.2)';
      case 'Paused': return 'rgba(245, 158, 11, 0.2)';
      case 'Completed': return 'rgba(107, 114, 128, 0.2)';
      default: return 'rgba(107, 114, 128, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Live': return '#10b981';
      case 'Paused': return '#f59e0b';
      case 'Completed': return '#d1d5db';
      default: return '#d1d5db';
    }
  }};
  font-size: 0.8rem;
  font-weight: 500;
`;