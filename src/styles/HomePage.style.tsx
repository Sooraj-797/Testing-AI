import styled from 'styled-components';

export const HomeContainer = styled.div`
    min-height: 100vh;
    background: #0D0F12;
    color: #fff;
    padding: 70rem 3rem 2rem 3rem;
    box-sizing: border-box;
`;

export const TopSection = styled.div`
    margin-bottom: -5rem;
`;

export const MetricsBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 0.75rem;
    margin-bottom: 2rem;
`;

export const MetricCard1 = styled.div`
    position: absolute;
    top: 78px;
    left: 40px;
    width: 440px;
    height: 210px;
    background: #191B1F66;
    box-shadow: 0px 2px 4px #00000012, 0px 0px 0px #171a1f00; 
    backdrop-filter: blur(4px); 
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    padding: 0.75rem 0.75rem;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const CardTitleWithIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const CardIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(13, 15, 18, 0.8);
    border: 1px solid rgba(45, 49, 57, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
        color: #007BFF;
    }
`;

export const SystemOptimalBadge = styled.div`
    font-size: 0.625rem;
    font-weight: 600;
    color: #007BFF;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0.25rem 0.75rem;
    border: 1px solid rgba(0, 123, 255, 0.3);
    border-radius: 12px;
`;

export const MetricCard2 = styled.div`
    position: absolute;
    top: 78px;
    left: 500px;
    width: 440px;
    height: 210px;
    background: #191B1F66;
    box-shadow: 0px 2px 4px #00000012, 0px 0px 0px #171a1f00; 
    backdrop-filter: blur(4px); 
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    padding: 0.75rem 0.75rem;
`;

export const MetricCard3 = styled.div`
    position: absolute;
    top: 78px;
    left: 960px;
    width: 440px;
    height: 210px;
    background: #191B1F66;
    box-shadow: 0px 2px 4px #00000012, 0px 0px 0px #171a1f00; 
    backdrop-filter: blur(4px); 
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    padding: 1rem 1.25rem;
`;

export const ThroughputContent = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
`;

export const ThroughputLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;

export const ThroughputRight = styled.div`
    flex: 1;
    position: relative;
`;

export const MetricLabel = styled.div`
    font-size: 0.625rem;
    font-weight: 600;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
`;

export const MetricValue = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.125rem;
    font-weight: 700;
    color: #FFF;
`;

export const CircularProgress = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
`;

export const ProgressSVG = styled.svg`
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
`;

export const ProgressCircle = styled.circle<{ progress: number }>`
    fill: none;
    stroke: #007BFF;
    stroke-width: 8;
    stroke-dasharray: ${props => `${props.progress * 2.827}, 282.7`};
    transition: stroke-dasharray 0.3s ease;
    stroke-linecap: round;
`;

export const SystemOptimal = styled.div`
    font-size: 0.625rem;
    font-weight: 600;
    color: #4ADE80;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
`;

export const ResourceItem = styled.div`
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const ResourceName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #9CA3AF;
    margin-bottom: 0.375rem;
    text-transform: uppercase;
`;

export const ResourceLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ResourceDot = styled.div<{ color: string }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.color};
`;

export const ResourcePercent = styled.span`
    color: #FFF;
    font-weight: 600;
`;

export const ResourceBar = styled.div`
    width: 100%;
    height: 6px;
    background: #2D3139;
    border-radius: 3px;
    overflow: hidden;
`;

export const ResourceFill = styled.div<{ width: number; color: string }>`
    height: 100%;
    width: ${props => props.width}%;
    background: ${props => props.color};
    border-radius: 3px;
    transition: width 0.3s ease;
`;

export const LLMContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;
`;

export const LLMLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const LLMRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LLMItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 0;
    border-bottom: 1px solid rgba(45, 49, 57, 0.3);
`;

export const LLMName = styled.div`
    font-size: 0.75rem;
    color: #9CA3AF;
`;

export const LLMPercent = styled.div`
    font-size: 0.75rem;
    color: #FFF;
    font-weight: 600;
`;

export const DotsIndicator = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;

    div {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #2D3139;

        &:nth-child(3) {
            background: #007BFF;
        }
    }
`;

export const ChartSVG = styled.svg`
    width: 100%;
    height: 90px;
`;

export const ChartLine = styled.path`
    fill: none;
    stroke: #007BFF;
    stroke-width: 2;
    stroke-linecap: round;
`;

export const ChartGradient = styled.linearGradient``;

export const ChartArea = styled.path`
    fill: url(#chartGradient);
    opacity: 0.3;
`;

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 900px 440px;
    gap: 20px;
    margin-left: -7px;
    width: 1360px;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0rem;
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const TacticalSection = styled.div`
    background: rgba(22, 26, 33, 0.3);
    border: 1px solid rgba(45, 49, 57, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const SectionHeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SectionHeaderRight = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`;

export const SectionTitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0;
`;

export const ModuleBadge = styled.span`
    font-size: 0.625rem;
    font-weight: 600;
    color: #9CA3AF;
    background: rgba(45, 49, 57, 0.5);
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const SectionSubtitle = styled.span`
    font-size: 0.625rem;
    font-weight: 500;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ViewButton = styled.button<{ active?: boolean }>`
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.active ? '#FFFFFF' : '#9CA3AF'};
    background: ${props => props.active ? 'rgba(45, 49, 57, 0.6)' : 'transparent'};
    border: 1px solid rgba(45, 49, 57, 0.3);
    border-radius: 6px;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #FFFFFF;
        background: rgba(45, 49, 57, 0.6);
    }
`;

export const ReinitializeButton = styled.button`
    font-size: 0.75rem;
    font-weight: 500;
    color: #007BFF;
    background: transparent;
    border: 1px solid rgba(0, 123, 255, 0.3);
    border-radius: 6px;
    padding: 0.375rem 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(0, 123, 255, 0.1);
        border-color: rgba(0, 123, 255, 0.5);
    }
`;

export const ToolGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`;

export const ToolCard = styled.div`
    background: rgba(13, 15, 18, 0.5);
    border: 1px solid rgba(45, 49, 57, 0.3);
    border-radius: 8px;
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:hover {
        border-color: rgba(0, 123, 255, 0.5);
        background: rgba(22, 26, 33, 0.6);
    }
`;

export const ToolCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ToolCardBadges = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const LiveBadge = styled.div`
    font-size: 0.6875rem;
    font-weight: 600;
    color: #007BFF;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ToolIcon = styled.div<{ color?: string }>`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: ${props => props.color ? `${props.color}15` : '#007BFF15'};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: ${props => props.color || '#007BFF'};
    }
`;

export const ToolInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`;

export const ToolName = styled.h3`
    font-size: 1.0625rem;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0;
`;

export const ToolDescription = styled.p`
    font-size: 0.8125rem;
    color: #9CA3AF;
    margin: 0;
    line-height: 1.5;
`;

export const ToolActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(45, 49, 57, 0.3);
`;

export const ActionButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 0.8125rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    transition: color 0.2s ease;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover {
        color: #007BFF;
    }
`;

export const StatusBadge = styled.div<{ status?: string }>`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    background: ${props => {
        if (props.status === 'active') return '#4ADE8015';
        if (props.status === 'queued') return '#FBBF2415';
        return '#6B728015';
    }};
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => {
        if (props.status === 'active') return '#4ADE80';
        if (props.status === 'queued') return '#FBBF24';
        return '#6B7280';
    }};
`;

export const StatusDot = styled.div<{ status?: string }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => {
        if (props.status === 'active') return '#4ADE80';
        return '#6B7280';
    }};
`;

export const SettingsButton = styled.button`
    background: transparent;
    border: none;
    color: #6B7280;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
        color: #007BFF;
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const IntelligenceHub = styled.div`
    background: rgba(22, 26, 33, 0.3);
    border: 1px solid rgba(45, 49, 57, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
`;

export const ServiceNodes = styled.div`
    background: rgba(22, 26, 33, 0.3);
    border: 1px solid rgba(45, 49, 57, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: rgba(13, 15, 18, 0.6);
    border: 1px solid rgba(45, 49, 57, 0.3);
    border-radius: 8px;
    transition: background 0.2s ease;
    cursor: pointer;

    &:hover {
        background: rgba(13, 15, 18, 0.8);
    }
`;

export const ItemIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(0, 123, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg {
        color: #007BFF;
    }
`;

export const ItemText = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    font-weight: 500;
    margin-bottom: 0.25rem;
`;

export const ItemBadge = styled.div`
    font-size: 0.6875rem;
    color: #9CA3AF;
    font-weight: 500;
    letter-spacing: 0.3px;
`;

export const ItemArrow = styled.div`
    color: #6B7280;
    font-size: 1.25rem;
`;

export const SystemTelemetry = styled.div`
    background: rgba(22, 26, 33, 0.3);
    border: 1px solid rgba(45, 49, 57, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 600px;
`;

export const TelemetryItem = styled.div`
    display: flex;
    gap: 0.75rem;
    padding: 0.875rem 0;
    border-bottom: 1px solid rgba(45, 49, 57, 0.3);

    &:last-child {
        border-bottom: none;
    }
`;

export const TelemetryDot = styled.div<{ color?: string }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color || '#6B7280'};
    flex-shrink: 0;
    margin-top: 0.25rem;
`;

export const TelemetryContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

export const TelemetryTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TelemetryJobId = styled.div`
    font-size: 0.6875rem;
    color: #6B7280;
    font-weight: 500;
`;

export const TelemetryTime = styled.div`
    font-size: 0.6875rem;
    color: #6B7280;
    font-weight: 400;
`;

export const TelemetryLabel = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    font-weight: 500;
`;

export const TelemetrySource = styled.div`
    font-size: 0.6875rem;
    color: #9CA3AF;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const TelemetryBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TelemetryValue = styled.div`
    font-size: 0.75rem;
    color: #9CA3AF;
    margin-bottom: 0.25rem;
`;

export const TelemetryStatus = styled.div<{ status?: string }>`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => {
        if (props.status === 'success') return '#10B981';
        if (props.status === 'error') return '#EF4444';
        if (props.status === 'pending') return '#6B7280';
        return '#6B7280';
    }};
    
    svg {
        width: 14px;
        height: 14px;
    }
`;

export const EnterpriseRelay = styled.div`
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.08) 0%, rgba(0, 123, 255, 0.15) 100%);
    border: 1px solid rgba(0, 123, 255, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
`;

export const RelayHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    svg {
        color: #007BFF;
    }
`;

export const RelayTitle = styled.h3`
    font-size: 0.875rem;
    font-weight: 700;
    color: #007BFF;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
`;

export const RelayDescription = styled.p`
    font-size: 0.8125rem;
    color: #9CA3AF;
    line-height: 1.5;
    margin: 0 0 1rem 0;
`;

export const RelayFeature = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    color: #FFFFFF;
    margin-bottom: 0.625rem;

    svg {
        color: #007BFF;
    }
`;

export const RelayButton = styled.button`
    width: 100%;
    background: #007BFF;
    border: none;
    border-radius: 6px;
    padding: 0.75rem;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #0066D6;
    }
`;

export const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin-top: 1rem;
`;

export const ServiceCard = styled.div`
    background: rgba(13, 15, 18, 0.6);
    border: 1px solid rgba(45, 49, 57, 0.3);
    border-radius: 8px;
    padding: 1rem 1.25rem;
`;

export const ServiceName = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    font-weight: 500;
`;

export const ServiceId = styled.div`
    font-size: 0.6875rem;
    color: #6B7280;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`;

export const ServiceStatus = styled.div<{ status?: string }>`
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${props => {
        if (props.status === 'active') return '#9CA3AF';
        if (props.status === 'degraded') return '#9CA3AF';
        return '#6B7280';
    }};
`;