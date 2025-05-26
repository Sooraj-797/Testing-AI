import React, { useState } from "react";
import { Heading2 } from "../../styles/HomePage.style";
import { Container } from "../../styles/LoginPage.styles";
import {
  PageContainer,
  TabsContainer,
  Tab,
  TabText,
  TabIcon,
  TabContent,
  Card,
  TabHeader
} from "../../styles/TruthLens.styles";

const TruthLensPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Test Results", icon: "📊" },
    { name: "Analysis", icon: "🔍" },
    { name: "Insights", icon: "💡" }
  ];

  return (
    <Container>
      <PageContainer>
        
        <TabsContainer>
          {tabs.map((tab, index) => (
            <Tab 
              key={index} 
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              <TabIcon>{tab.icon}</TabIcon>
              <TabText>{tab.name}</TabText>
            </Tab>
          ))}
        </TabsContainer>
        
        <TabContent>
          {activeTab === 0 && (
            <>
              <TabHeader>
                <TabIcon>{tabs[0].icon}</TabIcon> <span>Recent Test Results</span>
              </TabHeader>
              <Card>
                <h3>API Integration Tests</h3>
                <p>Last run: 2 hours ago • 42/45 tests passed</p>
              </Card>
              <Card>
                <h3>Frontend Unit Tests</h3>
                <p>Last run: 4 hours ago • 128/130 tests passed</p>
              </Card>
              <Card>
                <h3>End-to-End Tests</h3>
                <p>Last run: Yesterday • 18/20 tests passed</p>
              </Card>
            </>
          )}
          
          {activeTab === 1 && (
            <>
              <TabHeader>
                <TabIcon>{tabs[1].icon}</TabIcon> <span>Test Analysis</span>
              </TabHeader>
              <Card>
                <h3>Failure Patterns</h3>
                <p>Analysis of recurring test failures and potential root causes</p>
              </Card>
              <Card>
                <h3>Performance Metrics</h3>
                <p>Response time and resource utilization during test execution</p>
              </Card>
              <Card>
                <h3>Coverage Reports</h3>
                <p>Code coverage analysis and improvement recommendations</p>
              </Card>
            </>
          )}
          
          {activeTab === 2 && (
            <>
              <TabHeader>
                <TabIcon>{tabs[2].icon}</TabIcon> <span>AI Insights</span>
              </TabHeader>
              <Card>
                <h3>Test Optimization</h3>
                <p>AI-generated suggestions to improve test efficiency</p>
              </Card>
              <Card>
                <h3>Risk Assessment</h3>
                <p>Potential areas of code that need additional testing</p>
              </Card>
              <Card>
                <h3>Quality Trends</h3>
                <p>Long-term quality trends and predictive analytics</p>
              </Card>
            </>
          )}
        </TabContent>
      </PageContainer>
    </Container>
  );
};

export default TruthLensPage;