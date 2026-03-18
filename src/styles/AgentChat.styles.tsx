import styled, { keyframes } from 'styled-components';

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    background-color: rgba(20, 20, 26, 0.8);
    border-bottom: 1px solid #333;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const BrandLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const BrandName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin: 0 0 0 0.75rem;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled.a<{ active?: boolean }>`
    color: ${props => props.active ? '#007BFF' : 'white'};
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${props => props.active ? 'linear-gradient(90deg, #007BFF, #0070f3)' : 'transparent'};
        opacity: ${props => props.active ? 1 : 0};
    }

    &:hover {
        color: #007BFF;
    }
`;

export const AgentHubContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at center, #2a2b32 0%, #1c1c22 50%, #121215 100%);
    color: #ffffff;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255, 0, 87, 0.03) 0%, rgba(0, 195, 255, 0.03) 100%);
        pointer-events: none;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(20, 20, 26, 0.8);
    border-bottom: 1px solid #333;
    margin-top: 40px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoIcon = styled.div`
    background: linear-gradient(135deg, #00c3ff, #8a5cf6);
    border-radius: 12px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 0.85rem;
    color: #a0aec0;
    margin: 0;
`;

export const ControlsSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 0.75rem;
`;

export const SelectContainer = styled.div`
    position: relative;
`;

export const Select = styled.select`
    background-color: rgba(28, 28, 34, 0.7);
    color: white;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid #333;
    appearance: none;
    cursor: pointer;
    font-size: 0.9rem;

    &:focus {
        outline: none;
        border-color: #00c3ff;
    }
`;

export const SelectedCount = styled.div`
    display: flex;
    align-items: center;
    color: #a0aec0;
    font-size: 0.9rem;
    margin: 0 0.5rem;
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'warning' | 'danger' | 'default' }>`
    background: ${props => {
        switch (props.variant) {
            case 'primary': return 'linear-gradient(135deg, #00c3ff, #0070f3)';
            case 'warning': return '#d69e2e';
            case 'danger': return '#e53e3e';
            default: return 'rgba(28, 28, 34, 0.7)';
        }
    }};
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    border: ${props => props.variant ? 'none' : '1px solid #333'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        transform: translateY(1px);
    }
`;

export const ContentSection = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const PersonaSidebar = styled.div`
    width: 280px;
    background-color: rgba(28, 28, 34, 0.7);
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #333;
`;

export const SidebarTitle = styled.h2`
    font-size: 1.1rem;
    margin: 0;
`;

export const AddButton = styled.button`
    background-color: rgba(28, 28, 34, 0.7);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;

    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
        border-color: rgba(0, 123, 255, 0.3);
    }

    svg {
        color: white;
        width: 18px;
        height: 18px;
        stroke: white;
    }

    &.icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ExportButton = styled(AddButton)`
    margin-left: 0.5rem;

    svg {
        color: white;
        width: 18px;
        height: 18px;
        stroke: white;
    }
`;

export const PersonaList = styled.div`
    padding: 1rem;
`;

export const SelectAllContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #cbd5e1;
`;

export const SelectAllButtons = styled.div`
    display: flex;
    margin-left: auto;
`;

export const SelectButton = styled.button`
    background-color: transparent;
    color: #cbd5e1;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
        background-color: #1e293b;
        color: #007BFF;
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.5rem;
    cursor: pointer;
`;

export const PersonaItem = styled.div`
    background-color: rgba(28, 28, 34, 0.7);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    border: 1px solid #333;

    &:hover {
        background-color: rgba(40, 40, 46, 0.8);
        border-color: rgba(0, 123, 255, 0.3);
    }
`;

export const PersonaName = styled.h3`
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PersonaDescription = styled.p`
    font-size: 0.85rem;
    color: #a0aec0;
    margin: 0 0 0.5rem 0;
`;

export const PersonaTag = styled.span`
    background-color: rgba(20, 20, 26, 0.6);
    color: #a0aec0;
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    display: inline-block;
    margin-bottom: 0.25rem;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const MessageCount = styled.span`
    font-size: 0.75rem;
    color: #a0aec0;
    display: block;
    margin-top: 0.5rem;
`;

export const ChatContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: transparent;
`;

export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 2rem;
    border-bottom: 1px solid #333;
    background-color: rgba(28, 28, 34, 0.5);
`;

export const ChatTitle = styled.h3`
    font-size: 1.1rem;
    margin: 0;
`;

export const ViewToggle = styled.div`
    display: flex;
    background-color: rgba(20, 20, 26, 0.6);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #333;
`;

export const ViewButton = styled.button<{ active?: boolean }>`
    background-color: ${props => props.active ? 'rgba(40, 40, 46, 0.8)' : 'transparent'};
    color: white;
    padding: 0.4rem 0.75rem;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
        background-color: ${props => props.active ? 'rgba(40, 40, 46, 0.8)' : 'rgba(30, 30, 36, 0.7)'};
    }
`;

export const EmptyChat = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #a0aec0;
`;

export const EmptyIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.2;
`;

export const EmptyText = styled.p`
    font-size: 1.1rem;
    text-align: center;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const PlayButton = styled.button`
    background-color: #38a169;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #2f855a;
    }

    &:disabled {
        background-color: #2f855a;
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const UploadButton = styled.button`
    background-color: #2d3748;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #4a5568;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

/* ─────────────────────────────────────────────
   DASHBOARD STYLES
   ───────────────────────────────────────────── */

export const DashboardContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: #0d0f14;
    color: #ffffff;
    overflow: hidden;
`;

export const DashboardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.75rem 2rem 1.5rem;
    border-bottom: 1px solid #1a1d28;
    background: #0d0f14;
    flex-shrink: 0;
`;

export const DashboardTitleRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

export const DashboardTitle = styled.h1`
    font-size: 1.9rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.6rem;
`;

export const DashboardSubtitle = styled.p`
    font-size: 0.85rem;
    color: #8a94a6;
    margin: 0;
    max-width: 510px;
    line-height: 1.55;
    white-space: normal;
    overflow-wrap: break-word;
`;

export const DashboardHeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
`;

export const OutlineButton = styled.button`
    background: transparent;
    color: #e2e8f0;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: border-color 0.2s, background 0.2s;

    &:hover {
        background: rgba(255,255,255,0.05);
        border-color: #555;
    }
`;

export const PrimaryButton = styled.button`
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: background 0.2s;

    &:hover {
        background: #0069d9;
    }
`;

export const DashboardBody = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr 340px;
    flex: 1;
    overflow: hidden;
    background: #0d0f14;
    gap: 0.85rem;
    padding: 0.85rem 1.25rem 1rem;
`;

export const DashboardColumn = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #13161f;
    border: 1px solid #1e2235;
    border-radius: 14px;
`;

export const ColumnHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 1.2rem;
    border-bottom: 1px solid #1e2235;
    flex-shrink: 0;
    background: #13161f;
    border-radius: 14px 14px 0 0;
`;

export const ColumnTitle = styled.span`
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #8a94a6;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const ColumnBadge = styled.span`
    background: #1a1e2e;
    border: 1px solid #232640;
    color: #8a94a6;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
`;

export const ColumnScroll = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0.85rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #2a2d3a;
        border-radius: 2px;
    }
`;

/* Model Inventory */
export const ModelItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.875rem 1rem;
    background: #13161f;
    border: 1px solid #1e2235;
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    flex-shrink: 0;

    &:hover {
        background: #171b27;
        border-color: #2a2f45;
    }
`;

export const ModelIconBox = styled.div`
    width: 38px;
    height: 38px;
    background: #1a1e2e;
    border: 1px solid #232640;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1rem;
    color: #8a94a6;
`;

export const ModelInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

export const ModelName = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    color: #e2e8f0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ModelOrg = styled.div`
    font-size: 0.75rem;
    color: #8a94a6;
    margin-top: 1px;
`;

export const ModelMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
`;

export const StatusBadge = styled.span<{ status: 'ready' | 'busy' | 'offline' }>`
    font-size: 0.68rem;
    font-weight: 600;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    background: ${({ status }) =>
        status === 'ready' ? 'rgba(0,123,255,0.15)' :
        status === 'busy' ? 'rgba(214,158,46,0.15)' :
        'rgba(229,62,62,0.15)'};
    color: ${({ status }) =>
        status === 'ready' ? '#007BFF' :
        status === 'busy' ? '#d69e2e' :
        '#e53e3e'};
`;

export const ResponseTime = styled.span`
    font-size: 0.7rem;
    color: #8a94a6;
`;

export const SystemStatusBox = styled.div`
    background: #13161f;
    border: 1px solid #1e2235;
    border-radius: 10px;
    padding: 0.875rem 1rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
`;

export const SystemStatusTitle = styled.div`
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #8a94a6;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
`;

export const SystemStatusText = styled.p`
    font-size: 0.75rem;
    color: #8a94a6;
    margin: 0;
    line-height: 1.5;
`;

/* Test Run Cards */
export const TestRunsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
    padding: 0.85rem 1rem;
    flex: 1;
    overflow-y: auto;
    align-content: start;

    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 2px; }
`;

export const TestRunCard = styled.div`
    background: #13161f;
    border: 1px solid #1e2235;
    border-radius: 12px;
    padding: 1.1rem 1.1rem 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;

    &:hover {
        background: #171b27;
        border-color: #007BFF55;
    }
`;

export const TestRunCardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
`;

export const TestRunTitle = styled.div`
    font-size: 0.9rem;
    font-weight: 600;
    color: #e2e8f0;
    line-height: 1.35;
`;

export const TestRunMeta = styled.div`
    font-size: 0.73rem;
    color: #8a94a6;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.2rem;
`;

export const TestRunProgressLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.72rem;
    color: #8a94a6;
`;

export const ProgressBarWrap = styled.div`
    background: #1a1e2e;
    border-radius: 4px;
    height: 6px;
    overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ pct: number; color?: string }>`
    height: 100%;
    width: ${({ pct }) => pct}%;
    background: ${({ color }) => color || '#007BFF'};
    border-radius: 4px;
    transition: width 0.4s ease;
`;

export const PersonaAvatarRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const PersonaAvatar = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2e3350, #1e2235);
    border: 2px solid #13161f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: 700;
    color: #8a94a6;
    margin-left: -8px;

    &:first-child {
        margin-left: 0;
    }
`;

export const AvatarCount = styled.span`
    font-size: 0.72rem;
    color: #8a94a6;
    margin-left: 0.35rem;
`;

export const TestRunCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.1rem;
`;

export const RunningBadge = styled.span<{ completed?: boolean }>`
    font-size: 0.7rem;
    font-weight: 600;
    color: ${({ completed }) => completed ? '#8a94a6' : '#007BFF'};
`;

export const OpenLink = styled.button`
    background: transparent;
    border: none;
    color: #e2e8f0;
    font-size: 0.78rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0;
    font-weight: 500;

    &:hover {
        color: #007BFF;
    }
`;

export const ViewAllRow = styled.div`
    border-top: 1px solid #1e2235;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    background: #13161f;
    border-radius: 0 0 14px 14px;
`;

export const ViewAllLink = styled.button`
    background: transparent;
    border: none;
    color: #8a94a6;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0;

    &:hover {
        color: #e2e8f0;
    }
`;

/* Performance Metrics */
export const MetricCard = styled.div`
    background: #13161f;
    border: 1px solid #1e2235;
    border-radius: 12px;
    padding: 1rem 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    flex-shrink: 0;
`;

export const MetricIconBox = styled.div`
    width: 40px;
    height: 40px;
    background: #1a1e2e;
    border: 1px solid #232640;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.1rem;
    color: #8a94a6;
`;

export const MetricInfo = styled.div`
    flex: 1;
`;

export const MetricLabel = styled.div`
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    color: #8a94a6;
    text-transform: uppercase;
`;

export const MetricValue = styled.div`
    font-size: 1.55rem;
    font-weight: 700;
    color: #e2e8f0;
    line-height: 1.2;
    margin-top: 2px;
`;

export const MetricDelta = styled.span<{ positive?: boolean }>`
    font-size: 0.72rem;
    font-weight: 600;
    color: ${({ positive }) => (positive ? '#38a169' : '#e53e3e')};
    margin-left: 0.35rem;
`;

/* Live Activity */
export const LiveActivitySection = styled.div`
    border-top: 1px solid #1e2235;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    background: #13161f;
`;

export const LiveActivityHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem 0.5rem;
    flex-shrink: 0;
`;

export const LiveActivityTitle = styled.span`
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #8a94a6;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

export const RealtimeBadge = styled.span`
    font-size: 0.65rem;
    color: #8a94a6;
    background: #1e2130;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    font-weight: 600;
`;

export const ActivityList = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0.25rem 0.85rem 0.85rem;

    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 2px; }
`;

export const ActivityItem = styled.div`
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem 0.75rem;
    border-radius: 10px;
    background: #13161f;
    border: 1px solid #1e2235;
    margin-bottom: 0.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const ActivityIconBox = styled.div<{ type: 'success' | 'info' | 'add' }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    background: ${({ type }) =>
        type === 'success' ? 'rgba(56,161,105,0.18)' :
        type === 'info' ? 'rgba(0,123,255,0.18)' :
        'rgba(138,148,166,0.18)'};
    color: ${({ type }) =>
        type === 'success' ? '#38a169' :
        type === 'info' ? '#007BFF' :
        '#8a94a6'};
    border: 1px solid ${({ type }) =>
        type === 'success' ? 'rgba(56,161,105,0.25)' :
        type === 'info' ? 'rgba(0,123,255,0.25)' :
        'rgba(138,148,166,0.25)'};
`;

export const ActivityContent = styled.div`
    flex: 1;
    min-width: 0;
`;

export const ActivityTitle = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    color: #e2e8f0;
`;

export const ActivityDesc = styled.div`
    font-size: 0.72rem;
    color: #8a94a6;
    margin-top: 2px;
    line-height: 1.4;
`;

export const ActivityTime = styled.div`
    font-size: 0.68rem;
    color: #555e70;
    margin-top: 2px;
`;

export const StatusDot = styled.span<{ color: string }>`
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ color }) => color};
    margin-right: 0.25rem;
`;
