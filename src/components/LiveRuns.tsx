import React from 'react';
import {
  LiveRunsContainer,
  LiveRunsHeader,
  LiveRunsIcon,
  RunItemContainer,
  RunTitle,
  RunName,
  RunStats,
  ProgressBarContainer,
  ProgressBar,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateMessage
} from '../styles/LiveRuns.styles';

interface RunItemProps {
  name: string;
  passed: number;
  failed: number;
  total: number;
}

const RunItem: React.FC<RunItemProps> = ({ name, passed, failed, total }) => {
  const progressPercentage = Math.round((passed / total) * 100);
  
  return (
    <RunItemContainer>
      <RunTitle>
        <RunName>{name}</RunName>
        <RunStats>{passed} passed / {failed} failed</RunStats>
      </RunTitle>
      <ProgressBarContainer>
        <ProgressBar width={`${progressPercentage}%`} />
      </ProgressBarContainer>
    </RunItemContainer>
  );
};

interface LiveRunsProps {
  runs?: RunItemProps[];
}

const LiveRuns: React.FC<LiveRunsProps> = ({ runs = [] }) => {
  return (
    <LiveRunsContainer>
      <LiveRunsHeader>
        <LiveRunsIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12L3 20V4L22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </LiveRunsIcon>
        Live Runs
      </LiveRunsHeader>

      {runs.length > 0 ? (
        runs.map((run, index) => (
          <RunItem 
            key={index}
            name={run.name}
            passed={run.passed}
            failed={run.failed}
            total={run.passed + run.failed}
          />
        ))
      ) : (
        <EmptyStateContainer>
          <EmptyStateIcon>⏸</EmptyStateIcon>
          <EmptyStateTitle>No active benchmark runs</EmptyStateTitle>
          <EmptyStateMessage>
            Select categories from the Configure & Create tab and click "Start Selected" to begin benchmarking.
          </EmptyStateMessage>
        </EmptyStateContainer>
      )}
    </LiveRunsContainer>
  );
};

export default LiveRuns;
