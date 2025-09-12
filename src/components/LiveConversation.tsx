import React, { useState, useEffect } from 'react';
import { Message, EvaluationRequest, EvaluationResponse } from '../types/conversation.types';
import { ChartColumnIcon } from '../utils/Icons';
import { ApiEndpoints, getApiUrl } from '../utils/constants';
import {
  ConversationContainer,
  ConversationHeader,
  HeaderLeft,
  HeaderRight,
  Title,
  StatusRow,
  Rating,
  ElapsedTime,
  CloseButton,
  EvaluateButton,
  MessagesContainer,
  MessageGroup,
  ParticipantIcon,
  MessageContent,
  ParticipantName,
  MessageText,
  MessageTime,
  StatusBadge,
  ActionButtonsContainer,
  ActionButton,
  ExportButton,
  LastActivity,
  LiveIndicator,
  LiveDot,
  MainContainer,
  ConversationSection,
  EvaluationPanel,
  EvaluationHeader,
  EvaluationTitle,
  OverallScore,
  ScoreValue,
  StarRating,
  CategorySection,
  CategoryHeader,
  CategoryTitle,
  CategoryScore,
  ProgressBar,
  CategoryDescription,
  ImprovementSection,
  ImprovementHeader,
  ImprovementIcon,
  ImprovementTitle,
  ImprovementList,
  ImprovementItem,
  EvaluationFooter,
  ReEvaluateButton,
  ExportReportButton
} from '../styles/LiveConversation.styles';

interface ConversationProps {
  personaId: string | number;
  personaName: string;
  agentName: string;
  conversationId?: string;
  initialMessages?: Message[];
  onClose?: () => void;
  title?: string;
  startTime?: Date;
  status?: 'Live' | 'Paused' | 'Completed';
  rating?: number;
  scenario?: string;
}

/**
 * Component to display a conversation between a persona and an agent
 */
const LiveConversation: React.FC<ConversationProps> = ({
  personaId,
  personaName,
  agentName,
  conversationId,
  initialMessages,
  onClose,
  title,
  startTime,
  status = 'Live',
  rating = 8.5,
  scenario = ''
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [evaluationData, setEvaluationData] = useState<EvaluationResponse | null>(null);

  // Process messages from API
  useEffect(() => {
    if (initialMessages && initialMessages.length > 0) {
      setMessages(initialMessages);
    }
  }, [personaId, agentName, initialMessages]);

  const formatTime = (date: Date) => {
    return date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  };

  // Determine if a message is from the agent based on role or sender
  const isAgentMessage = (message: Message) => {
    if (message.role) {
      return message.role === 'assistant';
    }
    return message.sender === 'agent';
  };

  // Calculate elapsed time since conversation started
  const getElapsedTime = () => {
    if (!startTime) return '';
    
    const diff = Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    
    return `${minutes}m ${seconds}s`;
  };

  // Handle evaluate button click
  const handleEvaluate = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Prepare the request payload
      const requestPayload: EvaluationRequest = {
        sessionID: parseInt(conversationId || Math.random().toString().slice(2), 10),
        personaID: personaId.toString(),
        agent: agentName,
        conversation: messages.map(msg => ({
          role: msg.role || (msg.sender === 'persona' ? 'user' : 'assistant'),
          content: msg.content
        })),
        scenario: scenario || `${personaName} is having a conversation with ${agentName}`
      };

      // Make the API call
      const response = await fetch(getApiUrl(ApiEndpoints.EVALUATE_CONVERSATION), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data: EvaluationResponse = await response.json();
      setEvaluationData(data);
      setShowEvaluation(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during evaluation');
      console.error('Evaluation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle close evaluation panel
  const handleCloseEvaluation = () => {
    setShowEvaluation(false);
  };

  // Export report as HTML
  const exportReport = () => {
    if (!evaluationData) return;
    
    const { conversationEvaluation } = evaluationData;
    const { metrics, overallAssessment, messagePairEvaluations } = conversationEvaluation;
    
    // Calculate average score
    const scores = Object.values(metrics).map(m => m.score);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    
    // Format date for the report
    const reportDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Create HTML content
    let htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Conversation Evaluation Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          .section {
            margin-bottom: 30px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 5px;
          }
          .metric {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
          }
          .metric-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .score {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
          }
          .progress-bar {
            height: 10px;
            background-color: #e5e7eb;
            border-radius: 5px;
            margin: 10px 0;
            position: relative;
          }
          .progress-bar-fill {
            height: 100%;
            background-color: #10b981;
            border-radius: 5px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .message-pair {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 5px;
          }
          .user-message, .assistant-message {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
          }
          .user-message {
            background-color: #f3f4f6;
          }
          .assistant-message {
            background-color: #e0f2fe;
          }
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          h1, h2, h3 {
            color: #1f2937;
          }
          .overall-score {
            font-size: 36px;
            font-weight: bold;
            color: #10b981;
            text-align: center;
            margin: 20px 0;
          }
          .stars {
            text-align: center;
            color: #f8e71c;
            font-size: 24px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Conversation Evaluation Report</h1>
          <p>Generated on ${reportDate}</p>
          <p><strong>Persona:</strong> ${personaName} | <strong>Agent:</strong> ${agentName}</p>
          <p><strong>Conversation ID:</strong> ${conversationId || 'N/A'}</p>
          <div class="overall-score">${averageScore.toFixed(1)}/10</div>
          <div class="stars">
    `;
    
    // Add star rating
    for (let i = 0; i < 5; i++) {
      const threshold = (i + 1) * 2;
      if (averageScore >= threshold) {
        htmlContent += '★';
      } else if (averageScore >= threshold - 1) {
        htmlContent += '☆';
      } else {
        htmlContent += '☆';
      }
    }
    
    htmlContent += `
          </div>
        </div>
        
        <div class="section">
          <h2>Overall Assessment</h2>
          <p>${overallAssessment}</p>
        </div>
        
        <div class="section">
          <h2>Performance Metrics</h2>
          <div class="metrics-grid">
    `;
    
    // Add metrics
    Object.entries(metrics).forEach(([key, metric]) => {
      const metricName = key === 'intentUnderstanding' ? 'Intent Understanding' :
                          key === 'relevance' ? 'Relevance' :
                          key === 'completeness' ? 'Completeness' :
                          key === 'clarity' ? 'Clarity' :
                          key === 'proactivity' ? 'Proactivity' :
                          key === 'helpfulness' ? 'Helpfulness' : key;
      
      htmlContent += `
        <div class="metric">
          <div class="metric-header">
            <h3>${metricName}</h3>
            <div class="score">${metric.score}/10</div>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${metric.score * 10}%;"></div>
          </div>
          <p>${metric.justification}</p>
        </div>
      `;
    });
    
    htmlContent += `
          </div>
        </div>
        
        <div class="section">
          <h2>Message Pair Evaluations</h2>
    `;
    
    // Add message pair evaluations if available
    if (messagePairEvaluations && messagePairEvaluations.length > 0) {
      messagePairEvaluations.forEach((pair, index) => {
        htmlContent += `
          <div class="message-pair">
            <h3>Exchange ${index + 1}</h3>
            <div class="user-message">
              <strong>${personaName}:</strong> ${pair.userMessage}
            </div>
            <div class="assistant-message">
              <strong>${agentName}:</strong> ${pair.assistantMessage}
            </div>
            
            <h4>Metrics for this exchange:</h4>
            <div class="metrics-grid">
        `;
        
        // Add metrics for this message pair
        Object.entries(pair.metrics).forEach(([key, metric]) => {
          const metricName = key === 'intentUnderstanding' ? 'Intent Understanding' :
                            key === 'relevance' ? 'Relevance' :
                            key === 'completeness' ? 'Completeness' :
                            key === 'clarity' ? 'Clarity' :
                            key === 'proactivity' ? 'Proactivity' :
                            key === 'helpfulness' ? 'Helpfulness' : key;
          
          htmlContent += `
            <div class="metric">
              <div class="metric-header">
                <h5>${metricName}</h5>
                <div class="score">${metric.score}/10</div>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${metric.score * 10}%;"></div>
              </div>
              <p>${metric.justification}</p>
            </div>
          `;
        });
        
        htmlContent += `
            </div>
          </div>
        `;
      });
    } else {
      htmlContent += `<p>No detailed message evaluations available.</p>`;
    }
    
    htmlContent += `
        </div>
      </body>
      </html>
    `;
    
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation-evaluation-${conversationId || Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Render the conversation content
  const renderConversationContent = () => (
    <ConversationContainer>
      <ConversationHeader>
        <HeaderLeft>
          <Title>{title || `${personaName} and ${agentName} Conversation`}</Title>
          <StatusRow>
            <LiveIndicator status={status}>
              <LiveDot status={status} />
              {status}
            </LiveIndicator>
            <span style={{ color: '#6b7280' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ color: '#6b7280' }}>{messages.length} messages</span>
              <span style={{ color: '#6b7280' }}>•</span>
              <ElapsedTime>{getElapsedTime()}</ElapsedTime>
              {evaluationData && (
                <>
                  <span style={{ color: '#6b7280' }}>•</span>
                  <Rating>★ {(Object.values(evaluationData.conversationEvaluation.metrics).reduce((a, b) => a + b.score, 0) / 6).toFixed(1)}/10</Rating>
                </>
              )}
            </div>
          </StatusRow>
        </HeaderLeft>
        <HeaderRight>
          <EvaluateButton onClick={handleEvaluate} disabled={isLoading}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.35rem' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            {isLoading ? 'Evaluating...' : 'Evaluate'}
          </EvaluateButton>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </HeaderRight>
      </ConversationHeader>

      <MessagesContainer>
        {messages.map((message, index) => (
          <MessageGroup key={message.id || index}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: isAgentMessage(message) ? 'flex-end' : 'flex-start',
              width: '100%'
            }}>
              <div style={{ 
                color: '#a0aec0', 
                fontSize: '0.8rem', 
                marginBottom: '0.25rem',
                padding: '0 0.5rem'
              }}>
                {isAgentMessage(message) ? agentName : personaName}
              </div>
              <div style={{
                background: isAgentMessage(message) ? '#2563eb' : '#4b5563',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                maxWidth: '80%',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {message.content}
              </div>
              <div style={{ 
                color: '#a0aec0', 
                fontSize: '0.8rem', 
                marginTop: '0.25rem',
                padding: '0 0.5rem'
              }}>
                {message.timestamp ? formatTime(message.timestamp) : ''}
              </div>
            </div>
          </MessageGroup>
        ))}
      </MessagesContainer>
    </ConversationContainer>
  );

  // Render the evaluation panel
  const renderEvaluationPanel = () => {
    if (!evaluationData) {
      return (
        <EvaluationPanel>
          <EvaluationHeader>
            <EvaluationTitle>AI Evaluation</EvaluationTitle>
            <CloseButton onClick={handleCloseEvaluation}>✕</CloseButton>
          </EvaluationHeader>
          <div style={{ padding: '1rem', textAlign: 'center', color: '#a0aec0' }}>
            {isLoading ? 'Loading evaluation...' : error || 'No evaluation data available'}
          </div>
        </EvaluationPanel>
      );
    }

    const { conversationEvaluation } = evaluationData;
    const { metrics, overallAssessment } = conversationEvaluation;

    // Calculate average score
    const scores = Object.values(metrics).map(m => m.score);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    return (
      <EvaluationPanel>
        <EvaluationHeader>
          <EvaluationTitle>AI Evaluation</EvaluationTitle>
          <CloseButton onClick={handleCloseEvaluation}>✕</CloseButton>
        </EvaluationHeader>

        <OverallScore>
          <ScoreValue>{averageScore.toFixed(1)}/10</ScoreValue>
          <StarRating>
            {[...Array(5)].map((_, i) => {
              const threshold = (i + 1) * 2;
              if (averageScore >= threshold) {
                return <span key={i}>★</span>;
              } else if (averageScore >= threshold - 1) {
                return <span key={i} style={{ opacity: 0.6 }}>★</span>;
              } else {
                return <span key={i} style={{ opacity: 0.4 }}>★</span>;
              }
            })}
          </StarRating>
          <div style={{ color: '#a0aec0', fontSize: '0.9rem', marginTop: '0.5rem' }}>Overall Score</div>
        </OverallScore>

        {Object.entries(metrics).map(([key, metric]) => (
          <CategorySection key={key}>
            <CategoryHeader>
              <CategoryTitle>
                {key === 'intentUnderstanding' && 'Intent Understanding'}
                {key === 'relevance' && 'Relevance'}
                {key === 'completeness' && 'Completeness'}
                {key === 'clarity' && 'Clarity'}
                {key === 'proactivity' && 'Proactivity'}
                {key === 'helpfulness' && 'Helpfulness'}
              </CategoryTitle>
              <CategoryScore>{metric.score}/10</CategoryScore>
            </CategoryHeader>
            <ProgressBar score={metric.score} />
            <CategoryDescription>{metric.justification}</CategoryDescription>
          </CategorySection>
        ))}

        <ImprovementSection>
          <ImprovementHeader>
            <ImprovementIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </ImprovementIcon>
            <ImprovementTitle>Overall Assessment</ImprovementTitle>
          </ImprovementHeader>
          <CategoryDescription>{overallAssessment}</CategoryDescription>
        </ImprovementSection>

        <EvaluationFooter>
          <ReEvaluateButton onClick={handleEvaluate} disabled={isLoading}>
            {isLoading ? 'Evaluating...' : 'Re-evaluate'}
          </ReEvaluateButton>
          <ExportReportButton onClick={exportReport}>Export Report</ExportReportButton>
        </EvaluationFooter>
      </EvaluationPanel>
    );
  };

  // Main render
  return (
    <>
      {showEvaluation ? (
        <MainContainer>
          <ConversationSection>
            {renderConversationContent()}
          </ConversationSection>
          {renderEvaluationPanel()}
        </MainContainer>
      ) : (
        renderConversationContent()
      )}
    </>
  );
};

export default LiveConversation; 