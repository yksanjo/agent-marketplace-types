/**
 * TypeScript type definitions for Agent Marketplace API
 */

// Agent category types
export type AgentCategory = 
  | 'Development' 
  | 'Data' 
  | 'Creative' 
  | 'Security' 
  | 'Productivity' 
  | 'Communication';

// Agent stats
export interface AgentStats {
  deployments: number;
  uptime: number;
}

// Main Agent interface
export interface Agent {
  id: string;
  name: string;
  vendor: string;
  category: AgentCategory;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  icon: string;
  featured: boolean;
  tags: string[];
  stats: AgentStats;
}

// Deployed agent
export interface DeployedAgent {
  id: string;
  agentId: string;
  agent: Agent;
  config: Record<string, unknown>;
  status: 'running' | 'stopped';
  deployedAt: string;
  stats: {
    apiCalls: number;
    uptime: number;
  };
}

// Workflow node
export interface WorkflowNode {
  id: string;
  agentId: string;
  name: string;
  icon: string;
}

// Workflow edge
export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}

// Workflow
export interface Workflow {
  id: string;
  name: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  status: 'active' | 'inactive' | 'running';
  createdAt: string;
  lastRun: string | null;
}

// Dashboard statistics
export interface DashboardStats {
  totalDeployed: number;
  activeWorkflows: number;
  totalApiCalls: number;
  uptime: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Deploy request
export interface DeployRequest {
  agentId: string;
  config?: Record<string, unknown>;
}

// Update deployed agent request
export interface UpdateDeployedRequest {
  status?: 'running' | 'stopped';
  config?: Record<string, unknown>;
}

// Create workflow request
export interface CreateWorkflowRequest {
  name?: string;
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
}

// Update workflow request
export interface UpdateWorkflowRequest {
  name?: string;
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
  status?: 'active' | 'inactive' | 'running';
}

// Filter options for agents
export interface AgentFilters {
  category?: AgentCategory;
  search?: string;
  sort?: 'popularity' | 'rating' | 'price-low' | 'price-high';
}
