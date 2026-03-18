import React from "react";
import { MessageSquare, Eye, Terminal, BarChart3, GitBranch, Cpu, Shield, Activity, AlertCircle, Lock, Database, Radio, Server, Settings, CheckCircle2, XCircle, Clock, BookOpen, Video, Layers, Cloud } from "lucide-react";
import {
    HomeContainer,
    TopSection,
    MetricsBar,
    MetricCard1,
    MetricCard2,
    MetricCard3,
    CardHeader,
    CardTitleWithIcon,
    CardIcon,
    SystemOptimalBadge,
    MetricLabel,
    MetricValue,
    CircularProgress,
    ProgressSVG,
    ProgressCircle,
    SystemOptimal,
    ResourceItem,
    ResourceName,
    ResourceLabel,
    ResourceDot,
    ResourceBar,
   ResourceFill,
    ResourcePercent,
    LLMContent,
    LLMLeft,
    LLMRight,
    LLMItem,
    LLMName,
    LLMPercent,
    ThroughputContent,
    ThroughputLeft,
    ThroughputRight,
    ChartSVG,
    ChartLine,
    ChartGradient,
    ChartArea,
    MainContent,
    LeftColumn,
    RightColumn,
    TacticalSection,
    SectionHeader,
    SectionHeaderLeft,
    SectionHeaderRight,
    SectionTitleRow,
    SectionTitle,
    ModuleBadge,
    SectionSubtitle,
    ViewButton,
    ReinitializeButton,
    ToolGrid,
    ToolCard,
    ToolCardTop,
    ToolCardBadges,
    LiveBadge,
    ToolIcon,
    ToolInfo,
    ToolName,
    ToolDescription,
    ToolActions,
    ActionButton,
    StatusBadge,
    StatusDot,
    SettingsButton,
    IntelligenceHub,
    ServiceNodes,
    ListItem,
    ItemIcon,
    ItemText,
    ItemBadge,
    ItemArrow,
    SystemTelemetry,
    TelemetryItem,
    TelemetryDot,
    TelemetryContent,
    TelemetryTop,
    TelemetryJobId,
    TelemetryLabel,
    TelemetrySource,
    TelemetryBottom,
    TelemetryValue,
    TelemetryStatus,
    TelemetryTime,
    EnterpriseRelay,
    RelayHeader,
    RelayTitle,
    RelayDescription,
    RelayFeature,
    RelayButton,
    ServiceGrid,
    ServiceCard,
    ServiceName,
    ServiceId,
    ServiceStatus
} from "../../styles/HomePage.style";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <TopSection>
                <MetricsBar>
                    <MetricCard1>
                        <CardHeader>
                            <CardTitleWithIcon>
                                <CardIcon>
                                    <Server size={16} />
                                </CardIcon>
                                <MetricLabel style={{ margin: 0 }}>RESOURCE ALLOCATION</MetricLabel>
                            </CardTitleWithIcon>
                            <SystemOptimalBadge>System Optimal</SystemOptimalBadge>
                        </CardHeader>
                        <div>
                            <ResourceItem>
                                <ResourceName>
                                    <ResourceLabel>
                                        <ResourceDot color="#007BFF" />
                                        <span>CPU/LOAD</span>
                                    </ResourceLabel>
                                    <ResourcePercent>74%</ResourcePercent>
                                </ResourceName>
                                <ResourceBar>
                                    <ResourceFill width={74} color="#007BFF" />
                                </ResourceBar>
                            </ResourceItem>
                            <ResourceItem>
                                <ResourceName>
                                    <ResourceLabel>
                                        <ResourceDot color="#4ADE80" />
                                        <span>MEMORY</span>
                                    </ResourceLabel>
                                    <ResourcePercent>41%</ResourcePercent>
                                </ResourceName>
                                <ResourceBar>
                                    <ResourceFill width={41} color="#007BFF" />
                                </ResourceBar>
                            </ResourceItem>
                            <ResourceItem>
                                <ResourceName>
                                    <ResourceLabel>
                                        <ResourceDot color="#6B7280" />
                                        <span>GPU POOL</span>
                                    </ResourceLabel>
                                    <ResourcePercent>12%</ResourcePercent>
                                </ResourceName>
                                <ResourceBar>
                                    <ResourceFill width={12} color="#007BFF" />
                                </ResourceBar>
                            </ResourceItem>
                        </div>
                    </MetricCard1>
                    
                    <MetricCard2>
                        <CardHeader>
                            <CardTitleWithIcon>
                                <CardIcon>
                                    <Cpu size={16} />
                                </CardIcon>
                                <MetricLabel style={{ margin: 0 }}>LLM ORCHESTRATION</MetricLabel>
                            </CardTitleWithIcon>
                            <div style={{ fontSize: '0.625rem', fontWeight: '600', color: '#007BFF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Today: 1.2M Tokens
                            </div>
                        </CardHeader>
                        <LLMContent>
                            <CircularProgress>
                                <ProgressSVG viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2D3139" strokeWidth="8" />
                                    <ProgressCircle cx="50" cy="50" r="45" progress={40} />
                                </ProgressSVG>
                                <MetricValue>40%</MetricValue>
                            </CircularProgress>
                            <LLMLeft>
                                <LLMItem>
                                    <LLMName>GPT-4 Turbo</LLMName>
                                    <LLMPercent>40%</LLMPercent>
                                </LLMItem>
                                <LLMItem>
                                    <LLMName>GPT-3.5 Legacy</LLMName>
                                    <LLMPercent>60%</LLMPercent>
                                </LLMItem>
                                <LLMItem style={{ borderBottom: 'none' }}>
                                    <LLMName>CALLS TODAY</LLMName>
                                    <LLMPercent>14,204</LLMPercent>
                                </LLMItem>
                            </LLMLeft>
                        </LLMContent>
                    </MetricCard2>
                    
                    <MetricCard3>
                        <CardHeader>
                            <CardTitleWithIcon>
                                <CardIcon>
                                    <Activity size={16} />
                                </CardIcon>
                                <MetricLabel style={{ margin: 0 }}>ACTIVE THROUGHPUT</MetricLabel>
                            </CardTitleWithIcon>
                            <div style={{ fontSize: '0.625rem', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                SYNCING
                            </div>
                        </CardHeader>
                        <ThroughputContent>
                            <ThroughputLeft>
                                <div style={{ fontSize: '3.5rem', fontWeight: '700', color: '#FFF', lineHeight: '1' }}>104</div>
                                <div style={{ fontSize: '0.75rem', color: '#007BFF', marginTop: '0.25rem', fontWeight: '600' }}>+12% VS HOURLY</div>
                            </ThroughputLeft>
                            <ThroughputRight>
                                <ChartSVG viewBox="0 0 280 100" preserveAspectRatio="none">
                                    <defs>
                                        <ChartGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#007BFF" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
                                        </ChartGradient>
                                    </defs>
                                    <ChartArea d="M 0,60 L 40,55 L 80,58 L 120,50 L 160,45 L 200,38 L 240,28 L 280,20 L 280,100 L 0,100 Z" />
                                    <ChartLine d="M 0,60 L 40,55 L 80,58 L 120,50 L 160,45 L 200,38 L 240,28 L 280,20" />
                                </ChartSVG>
                            </ThroughputRight>
                        </ThroughputContent>
                    </MetricCard3>
                </MetricsBar>
            </TopSection>

            <MainContent>
                <LeftColumn>
                    <TacticalSection>
                        <SectionHeader>
                            <SectionHeaderLeft>
                                <SectionTitleRow>
                                    <SectionTitle>Tactical Toolset</SectionTitle>
                                    <ModuleBadge>06 MODULES</ModuleBadge>
                                </SectionTitleRow>
                                <SectionSubtitle>ENGINEERED VALIDATION ENVIRONMENTS</SectionSubtitle>
                            </SectionHeaderLeft>
                            <SectionHeaderRight>
                                <ViewButton active>Grid</ViewButton>
                                <ViewButton>List</ViewButton>
                                <ReinitializeButton>Re-initialize Nodes</ReinitializeButton>
                            </SectionHeaderRight>
                        </SectionHeader>
                        
                        <ToolGrid>
                            <ToolCard onClick={() => navigate('/agentchat')}>
                                <ToolIcon><MessageSquare size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>Agent Chat</ToolName>
                                    <ToolDescription>Administer LLM agents simulating user behavior in production-grade systems.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="active">
                                        <StatusDot status="active" />
                                        <span>Active</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>

                            <ToolCard onClick={() => navigate('/truthlens')}>
                                <ToolIcon color="#4ADE80"><Eye size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>TruthLens</ToolName>
                                    <ToolDescription>Compare system output for automated visual regression unit at a glance.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="idle">
                                        <StatusDot status="idle" />
                                        <span>Idle</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>

                            <ToolCard onClick={() => navigate('/scriptsmith')}>
                                <ToolIcon><Terminal size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>Script Smith</ToolName>
                                    <ToolDescription>Develop infrastructure complex natural language to Python/JS/Go code.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="idle">
                                        <StatusDot status="idle" />
                                        <span>Idle</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>

                            <ToolCard onClick={() => navigate('/benchmark')}>
                                <ToolIcon><BarChart3 size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>Benchmark</ToolName>
                                    <ToolDescription>Distributed load testing utility for measuring latency and system throughput.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="active">
                                        <StatusDot status="active" />
                                        <span>Active</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>

                            <ToolCard onClick={() => navigate('/flowsmith')}>
                                <ToolIcon color="#F59E0B"><GitBranch size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>Flow Smith</ToolName>
                                    <ToolDescription>Logic-gate workflows for high-level mapping complex asynchronous CI/CD testing.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="idle">
                                        <StatusDot status="idle" />
                                        <span>Idle</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>

                            <ToolCard>
                                <ToolIcon><Cpu size={24} /></ToolIcon>
                                <ToolInfo>
                                    <ToolName>Core Kernel</ToolName>
                                    <ToolDescription>Deep-level microservices to database integrity and expose SQL/NoSQL consistency.</ToolDescription>
                                </ToolInfo>
                                <ToolActions>
                                    <ActionButton>
                                        <Terminal size={16} />
                                        <span>Launch</span>
                                    </ActionButton>
                                    <StatusBadge status="idle">
                                        <StatusDot status="idle" />
                                        <span>Idle</span>
                                    </StatusBadge>
                                </ToolActions>
                            </ToolCard>
                        </ToolGrid>
                    </TacticalSection>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                        <IntelligenceHub>
                            <SectionHeader>
                                <CardTitleWithIcon>
                                    <CardIcon>
                                        <BookOpen size={20} />
                                    </CardIcon>
                                    <div>
                                        <SectionTitle>INTELLIGENCE HUB</SectionTitle>
                                        <SectionSubtitle style={{ fontSize: '0.6875rem', marginTop: '0.25em' }}>OPERATOR TRAINING & DOCS</SectionSubtitle>
                                    </div>
                                </CardTitleWithIcon>
                                <div style={{ fontSize: '0.75rem', color: '#007BFF', fontWeight: '500', cursor: 'pointer' }}>Browse All</div>
                            </SectionHeader>
                            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <ListItem>
                                    <ItemIcon><Video size={20} /></ItemIcon>
                                    <div style={{ flex: 1 }}>
                                        <ItemText>LLM Agent Persona Tuning</ItemText>
                                        <ItemBadge>VIDEO • 5M READ</ItemBadge>
                                    </div>
                                    <ItemArrow>›</ItemArrow>
                                </ListItem>
                                <ListItem>
                                    <ItemIcon><Terminal size={20} /></ItemIcon>
                                    <div style={{ flex: 1 }}>
                                        <ItemText>Distributed Load Parameters</ItemText>
                                        <ItemBadge>TECH • 12M READ</ItemBadge>
                                    </div>
                                    <ItemArrow>›</ItemArrow>
                                </ListItem>
                                <ListItem>
                                    <ItemIcon><Layers size={20} /></ItemIcon>
                                    <div style={{ flex: 1 }}>
                                        <ItemText>Security Schema Validation</ItemText>
                                        <ItemBadge>SPEC • 8M READ</ItemBadge>
                                    </div>
                                    <ItemArrow>›</ItemArrow>
                                </ListItem>
                            </div>
                        </IntelligenceHub>

                        <ServiceNodes>
                            <SectionHeader>
                                <CardTitleWithIcon>
                                    <CardIcon>
                                        <Shield size={20} />
                                    </CardIcon>
                                    <div>
                                        <SectionTitle>SERVICE NODES</SectionTitle>
                                        <SectionSubtitle style={{ fontSize: '0.6875rem', marginTop: '0.25rem' }}>INTEGRATION HEALTH CHECK</SectionSubtitle>
                                    </div>
                                </CardTitleWithIcon>
                                <div style={{ fontSize: '0.75rem', color: '#FFFFFF', fontWeight: '600', padding: '0.375rem 0.875rem', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px' }}>GLOBAL GREEN</div>
                            </SectionHeader>
                            <ServiceGrid>
                                <ServiceCard>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <div style={{ color: '#9CA3AF' }}><Cloud size={20} /></div>
                                        <ServiceName>AWS Relay</ServiceName>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <ServiceStatus status="active">ACTIVE</ServiceStatus>
                                        <div style={{ fontSize: '0.875rem', color: '#007BFF', fontWeight: '600' }}>18ms</div>
                                    </div>
                                </ServiceCard>
                                <ServiceCard>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <div style={{ color: '#9CA3AF' }}><GitBranch size={20} /></div>
                                        <ServiceName>GitHub CI</ServiceName>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <ServiceStatus status="active">ACTIVE</ServiceStatus>
                                        <div style={{ fontSize: '0.875rem', color: '#007BFF', fontWeight: '600' }}>64ms</div>
                                    </div>
                                </ServiceCard>
                                <ServiceCard>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <div style={{ color: '#9CA3AF' }}><Server size={20} /></div>
                                        <ServiceName>Edge Nodes</ServiceName>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <ServiceStatus status="degraded">DEGRADED</ServiceStatus>
                                        <div style={{ fontSize: '0.875rem', color: '#007BFF', fontWeight: '600' }}>892ms</div>
                                    </div>
                                </ServiceCard>
                                <ServiceCard>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <div style={{ color: '#9CA3AF' }}><Layers size={20} /></div>
                                        <ServiceName>API Gateway</ServiceName>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <ServiceStatus status="active">ACTIVE</ServiceStatus>
                                        <div style={{ fontSize: '0.875rem', color: '#007BFF', fontWeight: '600' }}>22ms</div>
                                    </div>
                                </ServiceCard>
                            </ServiceGrid>
                            <ActionButton style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '0.75rem' }}>
                                <span>Cluster Manager Console</span>
                            </ActionButton>
                        </ServiceNodes>
                    </div>
                </LeftColumn>

                <RightColumn>
                    <SystemTelemetry>
                        <SectionHeader>
                            <CardTitleWithIcon>
                                <CardIcon>
                                    <Activity size={16} />
                                </CardIcon>
                                <SectionTitle>SYSTEM TELEMETRY</SectionTitle>
                            </CardTitleWithIcon>
                            <SectionSubtitle style={{ fontSize: '0.65rem', color: '#007BFF' }}>LIVE</SectionSubtitle>
                        </SectionHeader>
                        <div style={{ marginTop: '1.5rem', flex: '1', overflow: 'auto' }}>
                            <TelemetryItem>
                                <TelemetryDot color="#FBBF24" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-802</TelemetryJobId>
                                        <TelemetryTime>Just now</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Auth Flow Validation</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>FLOW SMITH</TelemetrySource>
                                        <TelemetryStatus status="pending">
                                            <Clock size={14} />
                                            PENDING
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#10B981" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-801</TelemetryJobId>
                                        <TelemetryTime>2m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Image CDN Latency</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>BENCHMARK</TelemetrySource>
                                        <TelemetryStatus status="success">
                                            <CheckCircle2 size={14} />
                                            SUCCESS
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#10B981" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-889</TelemetryJobId>
                                        <TelemetryTime>3m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Persona Stress Test</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>AGENT CHAT</TelemetrySource>
                                        <TelemetryStatus status="success">
                                            <CheckCircle2 size={14} />
                                            SUCCESS
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#EF4444" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-884</TelemetryJobId>
                                        <TelemetryTime>12m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>CSS Var Regression</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>TRUTHLENS</TelemetrySource>
                                        <TelemetryStatus status="error">
                                            <XCircle size={14} />
                                            FAILED
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#10B981" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-888</TelemetryJobId>
                                        <TelemetryTime>18m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>SQL Injection Audit</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>CORE KERNEL</TelemetrySource>
                                        <TelemetryStatus status="success">
                                            <CheckCircle2 size={14} />
                                            SUCCESS
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#10B981" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-882</TelemetryJobId>
                                        <TelemetryTime>24m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Legacy API Proxy</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>SCRIPT SMITH</TelemetrySource>
                                        <TelemetryStatus status="success">
                                            <CheckCircle2 size={14} />
                                            SUCCESS
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#10B981" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-879</TelemetryJobId>
                                        <TelemetryTime>30m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Mobile Layout Check</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>TRUTHLENS</TelemetrySource>
                                        <TelemetryStatus status="success">
                                            <CheckCircle2 size={14} />
                                            SUCCESS
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                            <TelemetryItem>
                                <TelemetryDot color="#EF4444" />
                                <TelemetryContent>
                                    <TelemetryTop>
                                        <TelemetryJobId>JOB-875</TelemetryJobId>
                                        <TelemetryTime>43m ago</TelemetryTime>
                                    </TelemetryTop>
                                    <TelemetryLabel>Cart State Recovery</TelemetryLabel>
                                    <TelemetryBottom>
                                        <TelemetrySource>FLOW SMITH</TelemetrySource>
                                        <TelemetryStatus status="error">
                                            <XCircle size={14} />
                                            FAILED
                                        </TelemetryStatus>
                                    </TelemetryBottom>
                                </TelemetryContent>
                            </TelemetryItem>
                        </div>
                        <ActionButton style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', padding: '0.75rem' }}>
                            <span>Access Archives</span>
                        </ActionButton>
                    </SystemTelemetry>

                    <EnterpriseRelay>
                        <RelayHeader>
                            <Lock size={20} />
                            <RelayTitle>ENTERPRISE RELAY</RelayTitle>
                        </RelayHeader>
                        <RelayDescription>
                            Enabling your SSO-provisioned sudden requests and Enterprise Cluster channels.
                        </RelayDescription>
                        <div>
                            <RelayFeature><Radio size={14} /> Direct committee setup</RelayFeature>
                            <RelayFeature><Shield size={14} /> Organization-level access</RelayFeature>
                            <RelayFeature><Database size={14} /> Multi-environment</RelayFeature>
                        </div>
                        <RelayButton>
                            <span>Request access</span>
                            <span style={{ marginLeft: '0.5rem' }}>→</span>
                        </RelayButton>
                    </EnterpriseRelay>
                </RightColumn>
            </MainContent>
        </HomeContainer>
    );
};

export default HomePage;