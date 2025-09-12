/**
 * API Endpoints
 */
export enum ApiEndpoints {
  GENERATE_PERSONA = 'persona/generate',
  CONVERSATION = 'handshake/conversation',
  EVALUATE_CONVERSATION = 'evaluation/conversations',
  UPLOAD_EVALUATION_TEMPLATE = 'evaluation/upload-template'
}

/**
 * Get full API URL by combining base URL from environment with endpoint
 * @param endpoint - API endpoint from ApiEndpoints enum
 * @returns Full API URL
 */
export const getApiUrl = (endpoint: ApiEndpoints): string => {
  // For TypeScript projects using Vite, you may need to add custom type definitions
  // for import.meta.env in a vite-env.d.ts file
  
  // Using a simple fallback approach
  let baseUrl = 'http://localhost:3000';
  
  // @ts-ignore - Ignoring TypeScript error for environment variable access
  if (import.meta.env && import.meta.env.VITE_API_BASE_URL) {
    // @ts-ignore
    baseUrl = import.meta.env.VITE_API_BASE_URL;
  }
    
  return `${baseUrl}/${endpoint}`;
}; 