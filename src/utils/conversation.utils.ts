import { Message } from '../types/conversation.types';

/**
 * Format time to display in HH:MM format
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

/**
 * Get color for agent based on agent name
 */
export const getAgentColor = (agentName: string): string => {
  const agentColors: Record<string, string> = {
    'I&E Agent': '#3b82f6',
    'Gov': '#10b981',
    'Tech': '#8b5cf6',
    'Grievance Agent': '#ef4444',
  };
  
  for (const [key, color] of Object.entries(agentColors)) {
    if (agentName.includes(key)) {
      return color;
    }
  }
  
  return '#3b82f6'; // Default blue
};

/**
 * Calculate and format elapsed time
 */
export const getElapsedTime = (startTime?: Date): string => {
  if (!startTime) return '0m 0s';
  
  const elapsed = Math.floor((Date.now() - startTime.getTime()) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  
  return `${minutes}m ${seconds}s`;
};

/**
 * Extract topic from conversation messages
 */
export const getTopicFromMessages = (messages?: Message[]): string => {
  if (!messages || messages.length === 0) return 'AI Market Analysis';
  
  // Try to extract a topic from the first message
  const firstMessage = messages[0].content;
  
  if (firstMessage.toLowerCase().includes('market')) {
    return 'AI Market Analysis';
  } else if (firstMessage.toLowerCase().includes('government') || firstMessage.toLowerCase().includes('scheme')) {
    return 'Government Schemes';
  } else if (firstMessage.toLowerCase().includes('technology') || firstMessage.toLowerCase().includes('tech')) {
    return 'Technology Adoption';
  }
  
  return 'AI Conversation';
}; 