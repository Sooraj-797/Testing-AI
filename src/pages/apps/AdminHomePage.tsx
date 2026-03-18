import React from "react";
import { Users, Mail, Activity, Archive, Target, Server, Shield, Zap, CheckCircle, ArrowUpDown, Clock, Terminal, ShieldAlert, Download } from "lucide-react";
import {
    AdminContainer,
    HeaderSection,
    CommandCenterTitle,
    CommandCenterSubtitle,
    TopButtonsGroup,
    SystemLogsButton,
    AddPersonnelButton,
    StatsGrid,
    StatCard,
    StatIcon,
    StatLabel,
    StatValue,
    LargeStatCard,
    LargeStatIcon,
    LargeStatLabel,
    LargeStatValue,
    ContentSection,
    EntityRegistry,
    AuditStream,
    SectionHeader,
    SectionTitle,
    SectionTitleWrapper,
    SectionSubtitle,
    SectionIconBox,
    ViewExpandedLink,
    LiveBadge,
    SearchInput,
    SortButton,
    EntityTable,
    EntityRow,
    EntityAvatar,
    EntityInfo,
    EntityName,
    EntityId,
    GovernanceRole,
    ActivityWindow,
    AuditEntry,
    AuditIcon,
    AuditDetails,
    AuditUser,
    AuditTime,
    AuditAction,
    SecurityProtocol,
    ProtocolHeader,
    ProtocolTitle,
    ProtocolMessage,
    ReviewManifestButton,
    SeeMoreLink,
    StatusContainer,
    StatusBadge,
    StatusDot,
    StatusText,
    VersionText
} from "../../styles/AdminHomePage.styles";

const AdminHomePage: React.FC = () => {
    const entities = [
        { name: "Evelyn Thorne", id: "ID-1012", role: "LEAD QUALITY ENGINEER", avatar: "👤", color: "#FF6B6B" },
        { name: "Kaelen Voss", id: "ID-8847", role: "SYSTEM ADMIN", avatar: "👤", color: "#4ECDC4" },
        { name: "Simone Whitaker", id: "ID-2291", role: "QA TESTER", avatar: "👤", color: "#95E1D3" },
        { name: "Julian Morab", id: "ID-6634", role: "COMPLIANCE AUDITOR", avatar: "👤", color: "#F38181" },
        { name: "Sirius Novak", id: "ID-7756", role: "AUTOMATION LEAD", avatar: "👤", color: "#AA96DA" }
    ];

    const auditEntries = [
        { user: "K. Voss", time: "18:42:56", action: "Configured load balancer Cluster-Gamma", category: "terminal", action_highlight: "Cluster-Gamma" },
        { user: "E. Thorne", time: "18:32:18", action: "Approved test suite v2.4.0-Stable", category: "terminal", action_highlight: "v2.4.0-Stable" },
        { user: "Security_Bot", time: "18:31:00", action: "Flagged login attempt User ID-1102", category: "security", action_highlight: "User ID-1102" },
        { user: "J. Marsh", time: "18:20:47", action: "Exported audit report Q3-Compliance", category: "export", action_highlight: "Q3-Compliance" },
        { user: "System", time: "18:15:33", action: "Automated purge Temp_Cache_04", category: "terminal", action_highlight: "Temp_Cache_04" }
    ];

    return (
        <AdminContainer>
            <HeaderSection>
                <div>
                    <StatusContainer>
                        <StatusBadge>
                            <StatusDot />
                            <StatusText>Operational</StatusText>
                        </StatusBadge>
                        <VersionText>v1.0.0</VersionText>
                    </StatusContainer>
                    <CommandCenterTitle>Command Center</CommandCenterTitle>
                    <CommandCenterSubtitle>
                        Manage distributed user nodes, coordinate hierarchy specification, and multi-layout governance protocols across the Forge OS infrastructure.
                    </CommandCenterSubtitle>
                </div>
                <TopButtonsGroup>
                    <SystemLogsButton>
                        <Activity size={16} />
                        System Logs
                    </SystemLogsButton>
                    <AddPersonnelButton>
                        <Users size={16} />
                        Add Personnel
                    </AddPersonnelButton>
                </TopButtonsGroup>
            </HeaderSection>

            <StatsGrid>
                <StatCard>
                    <StatIcon color="#007BFF">
                        <Users size={20} />
                    </StatIcon>
                    <StatValue>4,290</StatValue>
                    <StatLabel>TOTAL USERS</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon color="#007BFF">
                        <Mail size={20} />
                    </StatIcon>
                    <StatValue>128</StatValue>
                    <StatLabel>PENDING INVITES</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon color="#007BFF">
                        <Activity size={20} />
                    </StatIcon>
                    <StatValue>854</StatValue>
                    <StatLabel>ACTIVE TESTERS</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon color="#007BFF">
                        <Archive size={20} />
                    </StatIcon>
                    <StatValue>42</StatValue>
                    <StatLabel>OFFBOARDED</StatLabel>
                </StatCard>
                <StatCard>
                    <StatIcon color="#007BFF">
                        <Target size={20} />
                    </StatIcon>
                    <StatValue>1.2M</StatValue>
                    <StatLabel>TESTS EXECUTED</StatLabel>
                </StatCard>
            </StatsGrid>

            <StatsGrid style={{ marginTop: '1.5rem', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <LargeStatCard>
                    <LargeStatIcon color="#007BFF">
                        <Server size={24} />
                    </LargeStatIcon>
                    <LargeStatValue>12 Nodes</LargeStatValue>
                    <LargeStatLabel>COMPUTE CLUSTERS</LargeStatLabel>
                </LargeStatCard>
                <LargeStatCard>
                    <LargeStatIcon color="#FF4757">
                        <Shield size={24} />
                    </LargeStatIcon>
                    <LargeStatValue>0</LargeStatValue>
                    <LargeStatLabel>SECURITY BREACHES</LargeStatLabel>
                </LargeStatCard>
                <LargeStatCard>
                    <LargeStatIcon color="#007BFF">
                        <Zap size={24} />
                    </LargeStatIcon>
                    <LargeStatValue>12ms</LargeStatValue>
                    <LargeStatLabel>NETWORK LATENCY</LargeStatLabel>
                </LargeStatCard>
                <LargeStatCard>
                    <LargeStatIcon color="#4ADE80">
                        <CheckCircle size={24} />
                    </LargeStatIcon>
                    <LargeStatValue>99.9%</LargeStatValue>
                    <LargeStatLabel>AUTH SUCCESS RATE</LargeStatLabel>
                </LargeStatCard>
            </StatsGrid>

            <ContentSection>
                <EntityRegistry>
                    <SectionHeader>
                        <div>
                            <SectionIconBox>
                                <Users size={24} />
                            </SectionIconBox>
                            <SectionTitleWrapper>
                                <SectionTitle>Entity Registry</SectionTitle>
                                <SectionSubtitle>PERSONNEL & AGENT COUNCIL</SectionSubtitle>
                            </SectionTitleWrapper>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <SearchInput
                                type="text"
                                placeholder="Search by ID or Name"
                            />
                            <SortButton>
                                <ArrowUpDown size={18} />
                            </SortButton>
                        </div>
                    </SectionHeader>

                    <EntityTable>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #2D3139' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6B7280', fontSize: '0.75rem', fontWeight: '600' }}>
                                    REFERENCE & IDENTITY
                                </th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6B7280', fontSize: '0.75rem', fontWeight: '600' }}>
                                    GOVERNANCE ROLE
                                </th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6B7280', fontSize: '0.75rem', fontWeight: '600' }}>
                                    ACTIVITY WINDOW
                                </th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6B7280', fontSize: '0.75rem', fontWeight: '600' }}>
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {entities.map((entity, index) => (
                                <EntityRow key={index}>
                                    <td style={{ padding: '1rem' }}>
                                        <EntityInfo>
                                            <EntityAvatar color={entity.color}>
                                                {entity.avatar}
                                            </EntityAvatar>
                                            <div>
                                                <EntityName>{entity.name}</EntityName>
                                                <EntityId>{entity.id}</EntityId>
                                            </div>
                                        </EntityInfo>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <GovernanceRole>{entity.role}</GovernanceRole>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <ActivityWindow>
                                            {index === 0 ? '2m ago' : index === 1 ? '14m ago' : index === 2 ? '1h ago' : index === 3 ? '1h ago' : 'Just now'}
                                        </ActivityWindow>
                                        <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.25rem' }}>
                                            {index === 0 ? 'Last Edited' : index === 3 ? 'Last Edited' : 'Last Active'}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#6B7280',
                                                cursor: 'pointer',
                                                fontSize: '1.25rem'
                                            }}
                                        >
                                            ⋮
                                        </button>
                                    </td>
                                </EntityRow>
                            ))}
                        </tbody>
                    </EntityTable>

                    <ViewExpandedLink>View Expanded Directory →</ViewExpandedLink>
                </EntityRegistry>

                <AuditStream>
                    <SectionHeader>
                        <div>
                            <SectionIconBox>
                                <Clock size={24} />
                            </SectionIconBox>
                            <SectionTitleWrapper>
                                <SectionTitle>Audit Stream</SectionTitle>
                                <SectionSubtitle>IMMUTABLE EVENT LOGS</SectionSubtitle>
                            </SectionTitleWrapper>
                        </div>
                        <LiveBadge>Live</LiveBadge>
                    </SectionHeader>

                    <div style={{ marginTop: '1.5rem' }}>
                        {auditEntries.map((entry, index) => {
                            const getIconByCategory = (category: string) => {
                                switch(category) {
                                    case 'terminal':
                                        return { icon: <Terminal size={20} />, color: '#6B7280' };
                                    case 'security':
                                        return { icon: <ShieldAlert size={22} />, color: '#EF4444' };
                                    case 'export':
                                        return { icon: <Download size={20} />, color: '#3B82F6' };
                                    default:
                                        return { icon: <Terminal size={20} />, color: '#6B7280' };
                                }
                            };
                            
                            const iconConfig = getIconByCategory(entry.category);
                            
                            return (
                                <AuditEntry key={index}>
                                    <AuditIcon category={entry.category}>
                                        {iconConfig.icon}
                                    </AuditIcon>
                                    <AuditDetails>
                                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <AuditUser>{entry.user}</AuditUser>
                                            <AuditTime>{entry.time}</AuditTime>
                                        </div>
                                        <AuditAction>{entry.action}</AuditAction>
                                    </AuditDetails>
                                </AuditEntry>
                            );
                        })}
                    </div>

                    <SecurityProtocol>
                        <Shield size={20} style={{ color: '#007BFF' }} />
                        <div style={{ flex: 1 }}>
                            <ProtocolHeader>
                                <ProtocolTitle>SECURITY PROTOCOL</ProtocolTitle>
                            </ProtocolHeader>
                            <ProtocolMessage>
                                Automatic key rotation scheduled for Cluster-Gamma on 14th 23m.
                            </ProtocolMessage>
                        </div>
                        <ReviewManifestButton>Review Manifest</ReviewManifestButton>
                    </SecurityProtocol>
                </AuditStream>
            </ContentSection>
        </AdminContainer>
    );
};

export default AdminHomePage;
