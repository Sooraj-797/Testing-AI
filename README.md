# Optimized Conversation Components

This project contains optimized React components for displaying conversations between personas and agents.

## Component Structure

The conversation components have been optimized with the following structure:

### Components
- `LiveConversation`: Displays a single conversation between a persona and an agent
- `LiveConversationGrid`: Container for displaying multiple conversations in a list view
- `ConversationListView`: List view for displaying conversations

### Types
- `conversation.types.ts`: Contains shared type definitions for conversation components

### Styles
- `ConversationList.styles.tsx`: Contains styled components for conversation list view

### Utils
- `conversation.utils.ts`: Contains utility functions for conversation components

## Usage

```tsx
import { LiveConversationGrid } from './components';

// Example data
const conversations = [
  {
    conversationId: '1',
    personaId: 'persona1',
    personaName: 'John Doe',
    agentName: 'Tech Agent',
    messageCount: 5,
    status: 'Live',
    startTime: new Date()
  },
  // More conversations...
];

// Render the component
const MyComponent = () => (
  <LiveConversationGrid 
    conversations={conversations}
    onViewConversation={(id) => console.log(`View conversation ${id}`)}
    onDeleteConversation={(id) => console.log(`Delete conversation ${id}`)}
  />
);
```

## Optimization Notes

1. Styles have been separated into dedicated style files
2. Types have been centralized in a types file
3. Utility functions have been extracted to a utils file
4. Components have been simplified to focus on the list view functionality
5. Unused view modes have been removed
