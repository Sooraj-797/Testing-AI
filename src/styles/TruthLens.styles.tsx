import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  margin: 2.5rem 0;
  background: rgba(20, 20, 26, 0.6);
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #333;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
`;

export const Tab = styled.div<{ active: boolean }>`
  padding: 1rem 2.5rem;
  cursor: pointer;
  text-align: center;
  font-weight: ${props => props.active ? "600" : "400"};
  color: ${props => props.active ? "#ffffff" : "#aaaaaa"};
  transition: all 0.3s ease;
  background: ${props => props.active ? 
    "linear-gradient(135deg, rgba(0, 195, 255, 0.15), rgba(0, 112, 243, 0.15))" : 
    "transparent"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &:hover {
    color: white;
    background: ${props => !props.active && "rgba(0, 195, 255, 0.05)"};
  }
  
  svg, img {
    margin-right: 10px;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%) ${props => props.active ? "scaleX(1)" : "scaleX(0)"};
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #00c3ff, #0070f3);
    border-radius: 3px;
    transition: transform 0.3s ease;
  }
`;

export const TabText = styled.span`
  margin-left: 8px;
`;

export const TabIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #00c3ff, #0070f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TabContent = styled.div`
  padding: 2rem;
  min-height: 400px;
  width: 100%;
  max-width: 800px;
  animation: fadeIn 0.5s ease;
  background: rgba(28, 28, 34, 0.5);
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const Card = styled.div`
  background: rgba(28, 28, 34, 0.7);
  border-radius: 10px;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  border: 1px solid #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #00c3ff, #0070f3);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 195, 255, 0.3);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #00c3ff;
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 0;
    color: #bbbbbb;
    line-height: 1.6;
  }
`;

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  span {
    display: inline-block;
    margin-left: 1rem;
    background: linear-gradient(90deg, #00c3ff, #0070f3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
