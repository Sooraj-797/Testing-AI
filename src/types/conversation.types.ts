export interface Message {
  id?: string;
  sender?: 'persona' | 'agent';
  role?: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface ActiveConversation {
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

export interface ConversationListViewProps {
  conversations: ActiveConversation[];
  onViewConversation?: (conversationId: string) => void;
  onDeleteConversation?: (conversationId: string) => void;
}

export interface EvaluationMetric {
  score: number;
  justification: string;
}

export interface MessagePairEvaluation {
  userMessage: string;
  assistantMessage: string;
  metrics: {
    intentUnderstanding: EvaluationMetric;
    relevance: EvaluationMetric;
    completeness: EvaluationMetric;
    clarity: EvaluationMetric;
    proactivity: EvaluationMetric;
    helpfulness: EvaluationMetric;
  };
}

export interface ConversationEvaluation {
  metrics: {
    intentUnderstanding: EvaluationMetric;
    relevance: EvaluationMetric;
    completeness: EvaluationMetric;
    clarity: EvaluationMetric;
    proactivity: EvaluationMetric;
    helpfulness: EvaluationMetric;
  };
  overallAssessment: string;
  messagePairEvaluations: MessagePairEvaluation[];
}

export interface EvaluationRequest {
  sessionID: number;
  personaID: string;
  agent: string;
  conversation: {
    role: 'user' | 'assistant';
    content: string;
  }[];
  scenario: string;
}

export interface EvaluationResponse {
  sessionID: number;
  personaID: string;
  agent: string;
  conversationEvaluation: ConversationEvaluation;
} 