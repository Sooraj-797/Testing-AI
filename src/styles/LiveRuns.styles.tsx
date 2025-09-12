import styled from 'styled-components';

export const LiveRunsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #ffffff;
`;

export const LiveRunsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
`;

export const LiveRunsIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const RunItemContainer = styled.div`
  background-color: rgba(28, 28, 34, 0.7);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const RunTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const RunName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const RunStats = styled.div`
  font-size: 14px;
  color: #94a3b8;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(30, 41, 59, 0.8);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 10px;
`;

export const ProgressBar = styled.div<{ width: string }>`
  height: 100%;
  background-color: #3b82f6;
  width: ${props => props.width};
  border-radius: 4px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgba(28, 28, 34, 0.7);
  border-radius: 8px;
  text-align: center;
`;

export const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  opacity: 0.6;
`;

export const EmptyStateTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const EmptyStateMessage = styled.div`
  font-size: 16px;
  color: #94a3b8;
  max-width: 400px;
  line-height: 1.5;
`;
