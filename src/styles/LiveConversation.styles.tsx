import styled from 'styled-components';

// Conversation Container Styles
export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(23, 25, 35, 0.98);
  border-radius: 0;
  border: none;
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const ConversationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(20, 20, 26, 0.8);
  border-bottom: 1px solid #333;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.25rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #f8e71c;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ElapsedTime = styled.div`
  color: #a0aec0;
  font-size: 0.9rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  
  &:hover {
    color: white;
  }
`;

export const EvaluateButton = styled.button`
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.35rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #7c3aed;
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MessageGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ParticipantIcon = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ParticipantName = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #d1d5db;
`;

export const MessageText = styled.div`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #f3f4f6;
  background-color: rgba(40, 40, 46, 0.6);
  padding: 0.75rem 1rem;
  border-radius: 8px;
`;

export const MessageTime = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;

export const StatusBadge = styled.div<{ status?: 'Live' | 'Paused' | 'Completed' }>`
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

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #333;
`;

export const ActionButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ExportButton = styled(ActionButton)`
  background-color: #4b5563;
  
  &:hover {
    background-color: #374151;
  }
`;

export const LastActivity = styled.div`
  color: #9ca3af;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid #333;
`;

export const LiveIndicator = styled.div<{ status?: 'Live' | 'Paused' | 'Completed' }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => {
    switch (props.status) {
      case 'Live': return '#10b981';
      case 'Paused': return '#f59e0b';
      case 'Completed': return '#6b7280';
      default: return '#10b981';
    }
  }};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LiveDot = styled.div<{ status?: 'Live' | 'Paused' | 'Completed' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
      case 'Live': return '#10b981';
      case 'Paused': return '#f59e0b';
      case 'Completed': return '#6b7280';
      default: return '#10b981';
    }
  }};
`;

// Evaluation Panel Styles
export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ConversationSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid #333;
`;

export const EvaluationPanel = styled.div`
  width: 350px;
  background-color: rgba(23, 25, 35, 0.98);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EvaluationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(20, 20, 26, 0.8);
  border-bottom: 1px solid #333;
`;

export const EvaluationTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`;

export const OverallScore = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #f8e71c;
  font-size: 1.25rem;
`;

export const CategorySection = styled.div`
  padding: 1.25rem 1rem;
  border-top: 1px solid #333;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export const CategoryScore = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #10b981;
`;

export const ProgressBar = styled.div<{ score: number }>`
  height: 6px;
  width: 100%;
  background-color: rgba(75, 85, 99, 0.3);
  border-radius: 3px;
  margin-bottom: 0.75rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.score * 10}%;
    background-color: #10b981;
    border-radius: 3px;
  }
`;

export const CategoryDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #d1d5db;
  line-height: 1.4;
`;

export const ImprovementSection = styled.div`
  padding: 1.25rem 1rem;
  border-top: 1px solid #333;
`;

export const ImprovementHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ImprovementIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImprovementTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export const ImprovementList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  color: #d1d5db;
  font-size: 0.9rem;
`;

export const ImprovementItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const EvaluationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #333;
  margin-top: auto;
`;

export const ReEvaluateButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ExportReportButton = styled.button`
  background-color: #4b5563;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #374151;
  }
`; 