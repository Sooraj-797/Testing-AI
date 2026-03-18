import styled from 'styled-components';

export const AdminContainer = styled.div`
    min-height: 100vh;
    background: #000;
    color: #fff;
    padding: 35rem 3rem 2rem 3rem;
    box-sizing: border-box;
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    padding-top: 0;
`;

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
`;

export const StatusBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #007BFF0D;
    border: 1px solid #007BFF33;
    border-radius: 9999px;
    padding: 0.375rem 0.875rem;
`;

export const StatusDot = styled.div`
    width: 8px;
    height: 8px;
    background: #007BFF;
    border-radius: 50%;
`;

export const StatusText = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 700;
    color: #007BFF;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const VersionText = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0px;
`;

export const CommandCenterTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 0 0 0.5rem 0;
    letter-spacing: -0.5px;
`;

export const CommandCenterSubtitle = styled.p`
    font-size: 0.875rem;
    color: #6B7280;
    max-width: 700px;
    line-height: 1.5;
    margin: 0;
`;

export const TopButtonsGroup = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`;

export const SystemLogsButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 1px solid #2D3139;
    color: #9CA3AF;
    padding: 0.625rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: #1A1D24;
        border-color: #3D4451;
        color: #fff;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

export const AddPersonnelButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #007BFF;
    border: none;
    color: #FFFFFF;
    padding: 0.625rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);

    &:hover {
        background: #0066D6;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.2);
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
    margin-bottom: 1.5rem;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const StatCard = styled.div`
    background: #161A21;
    border: 1px solid #2D3139;
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
        border-color: #3D4451;
        background: #1A1E26;
    }
`;

export const LargeStatCard = styled.div`
    background: #161A21;
    border: 1px solid #2D3139;
    border-radius: 10px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s ease;

    &:hover {
        border-color: #3D4451;
        background: #1A1E26;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
`;

export const LargeStatIcon = styled.div<{ color: string }>`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: ${props => props.color}15;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};

    svg {
        width: 24px;
        height: 24px;
    }
`;

export const LargeStatValue = styled.div`
    font-size: 1.75rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1;
`;

export const LargeStatLabel = styled.div`
    font-size: 0.8125rem;
    font-weight: 600;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const StatIcon = styled.div<{ color: string }>`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: ${props => props.color}15;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const StatValue = styled.div`
    font-size: 1.75rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1;
`;

export const StatLabel = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ContentSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const EntityRegistry = styled.div`
    background: #161A21;
    border: 1px solid #2D3139;
    border-radius: 12px;
    padding: 1.5rem;
`;

export const AuditStream = styled.div`
    background: #161A21;
    border: 1px solid #2D3139;
    border-radius: 12px;
    padding: 1.5rem;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    > div:first-child {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

export const SectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0;
`;

export const SectionSubtitle = styled.span`
    font-size: 0.75rem;
    font-weight: 500;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const SectionIconBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #007BFF15;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
        color: #007BFF;
    }
`;

export const ViewExpandedLink = styled.a`
    display: block;
    text-align: center;
    color: #007BFF;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: #0066D6;
        text-decoration: underline;
    }
`;

export const SearchInput = styled.input`
    background: #1A1D24;
    border: 1px solid #2D3139;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    color: #fff;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s ease;

    &::placeholder {
        color: #6B7280;
    }

    &:focus {
        border-color: #007BFF;
    }
`;

export const SortButton = styled.button`
    background: #1A1D24;
    border: 1px solid #2D3139;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    color: #fff;
    font-size: 0.875rem;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    min-width: 40px;
    height: 36px;

    svg {
        color: #9CA3AF;
    }

    &:hover {
        border-color: #007BFF;
        background: #007BFF15;
        
        svg {
            color: #007BFF;
        }
    }
`;

export const EntityTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const EntityRow = styled.tr`
    border-bottom: 1px solid #2D3139;
    transition: all 0.2s ease;

    &:hover {
        background: #1A1E26;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const EntityAvatar = styled.div<{ color: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
`;

export const EntityInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const EntityName = styled.div`
    font-size: 0.9375rem;
    font-weight: 500;
    color: #FFFFFF;
`;

export const EntityId = styled.div`
    font-size: 0.8125rem;
    color: #6B7280;
    margin-top: 0.125rem;
`;

export const GovernanceRole = styled.div`
    display: inline-block;
    background: #007BFF20;
    color: #007BFF;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

export const ActivityWindow = styled.div`
    font-size: 0.875rem;
    color: #FFFFFF;
    font-weight: 500;
`;

export const AuditEntry = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #2D3139;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const AuditIcon = styled.div<{ category?: string }>`
    width: 45px;
    height: 45px;
    min-width: 45px;
    border-radius: 50%;
    background: ${props => {
        if (props.category === 'security') return '#EF444420';
        if (props.category === 'export') return '#3B82F620';
        return 'transparent';
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => {
        if (props.category === 'security') return '#EF4444';
        if (props.category === 'export') return '#3B82F6';
        return '#6B7280';
    }};
    flex-shrink: 0;
    margin-top: 2px;

    svg {
        width: auto;
        height: auto;
    }
`;

export const AuditDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding-top: 2px;
`;

export const AuditUser = styled.span`
    font-size: 0.9375rem;
    font-weight: 600;
    color: #FFFFFF;
    margin-right: 0.625rem;
`;

export const AuditTime = styled.span`
    font-size: 0.8125rem;
    color: #6B7280;
    font-weight: 400;
`;

export const AuditAction = styled.div`
    font-size: 0.875rem;
    color: #9CA3AF;
    line-height: 1.5;
`;

export const SecurityProtocol = styled.div`
    margin-top: 1.5rem;
    background: #007BFF10;
    border: 1px solid #007BFF30;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.875rem;

    > svg {
        flex-shrink: 0;
    }
`;

export const ProtocolHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
`;

export const ProtocolTitle = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
    color: #007BFF;
    letter-spacing: 0.5px;
`;

export const ProtocolMessage = styled.div`
    font-size: 0.8125rem;
    color: #9CA3AF;
    line-height: 1.4;
`;

export const ReviewManifestButton = styled.button`
    background: #007BFF;
    border: none;
    color: #FFFFFF;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
        background: #0066D6;
    }
`;

export const SeeMoreLink = styled.a`
    color: #007BFF;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: #0066D6;
        text-decoration: underline;
    }
`;

export const LiveBadge = styled.div`
    background: #1A1D24;
    border: 1px solid #2D3139;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    color: #9CA3AF;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;
