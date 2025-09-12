import React, { useState } from "react";
import { BenchmarkIcon } from "../../utils/Icons";
import LiveRuns from "../../components/LiveRuns";
import { 
    BenchmarkContainer, 
    BenchmarkHeader, 
    HeaderLeft, 
    IconContainer, 
    TitleSection, 
    BenchmarkTitle, 
    BenchmarkSubtitle, 
    HeaderRight,
    ContentArea,
    SidebarContainer,
    MainContentContainer,
    SectionTitle,
    ButtonGroup,
    SmallButton,
    CategoryContainer,
    CategoryCheckbox,
    SubCategoryContainer,
    SubCategoryCheckbox,
    Card,
    ModelSelectionContainer,
    ModelColumn,
    ModelLabel,
    ModelDropdown,
    TestCasesContainer,
    TestCasesHeader,
    TestCasesSubtitle,
    TestCasesContent,
    TestCasesColumn,
    UploadSection,
    UploadHeader,
    UploadDescription,
    FileInputContainer,
    BrowseButton,
    FileDisplay,
    UploadButton,
    GenerateSection,
    GenerateDescription,
    GenerateButton,
    TabsContainer,
    Tab,
    SelectedTagsContainer,
    SelectedTag,
    UploadButtonContainer,
    FormGroup,
    FormLabel,
    FormInput
} from "../../styles/Benchmarking.styles";
import {
    PlayButton,
    ActionButton,
    SelectedCount
} from "../../styles/AgentChat.styles";

// Model options as enums
enum ModelA {
    INFORMATION_AND_ELIGIBILITY = "Information & Eligibility",
    GRIEVANCE = "Grievance",
    OUTBOUND_INTENT = "Outbound Intent"
}

enum ModelB {
    GPT_4 = "GPT-4",
    GPT_5 = "GPT-5"
}

// Category type definitions
interface SubCategory {
    id: string;
    name: string;
    selected: boolean;
}

interface Category {
    id: string;
    name: string;
    selected: boolean;
    subCategories: SubCategory[];
}

const BenchmarkPage: React.FC = () => {
    // State for model selection
    const [modelA, setModelA] = useState<ModelA>(ModelA.INFORMATION_AND_ELIGIBILITY);
    const [modelB, setModelB] = useState<ModelB>(ModelB.GPT_4);
    
    // State for selected items
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [activeItems, setActiveItems] = useState<number[]>([]);
    
    // State for file upload
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState<'agentChat' | 'liveRuns' | 'dashboard'>('agentChat');
    
    // State for live runs (empty by default)
    const [liveRuns, setLiveRuns] = useState<Array<{name: string, passed: number, failed: number, total: number}>>([]);
    
    // State for retriever UI
    const [topK, setTopK] = useState<string>("5");
    
    // State for categories
    const [categories, setCategories] = useState<Category[]>([
        {
            id: "reliability",
            name: "Reliability & Stability",
            selected: true,
            subCategories: [
                { id: "breaking", name: "Breaking of system", selected: true },
                { id: "corruption", name: "Output corruption", selected: true },
                { id: "infinite", name: "Infinite loop / stuck reasoning", selected: true }
            ]
        },
        {
            id: "factual",
            name: "Factual Accuracy",
            selected: true,
            subCategories: [
                { id: "hallucination", name: "Hallucination", selected: true },
                { id: "incorrect", name: "Incorrect retrieval", selected: true },
                { id: "source", name: "Source misattribution", selected: true }
            ]
        },
        {
            id: "understanding",
            name: "Understanding & Clarity",
            selected: true,
            subCategories: [
                { id: "disambiguation", name: "Disambiguation", selected: true },
                { id: "instruction", name: "Instruction adherence", selected: true },
                { id: "context", name: "Context carryover", selected: true }
            ]
        },
        {
            id: "reasoning",
            name: "Reasoning & Problem Solving",
            selected: true,
            subCategories: [
                { id: "logical", name: "Logical consistency", selected: true },
                { id: "multihop", name: "Multi-hop reasoning", selected: true },
                { id: "mathematical", name: "Mathematical accuracy", selected: true }
            ]
        },
        {
            id: "ethical",
            name: "Ethical & Safety Alignment",
            selected: true,
            subCategories: [
                { id: "toxicity", name: "Toxicity", selected: true },
                { id: "prompt", name: "Prompt injection susceptibility", selected: true },
                { id: "sensitive", name: "Sensitive data leakage", selected: true }
            ]
        },
        {
            id: "robustness",
            name: "Robustness to Adversarial Inputs",
            selected: true,
            subCategories: [
                { id: "typo", name: "Typo tolerance", selected: true },
                { id: "code", name: "Code injection handling", selected: true },
                { id: "jailbreak", name: "Jailbreak resilience", selected: true }
            ]
        },
        {
            id: "domain",
            name: "Domain-Specific Competence",
            selected: true,
            subCategories: [
                { id: "specialist", name: "Specialist knowledge", selected: true },
                { id: "terminology", name: "Terminology accuracy", selected: true },
                { id: "edge", name: "Edge case handling", selected: true }
            ]
        }
    ]);
    
    // Count selected subcategories
    const selectedSubCategories = categories.flatMap(cat => 
        cat.subCategories.filter(sub => sub.selected)
    );
    
    // Handle category checkbox change
    const handleCategoryChange = (categoryId: string) => {
        setCategories(prev => prev.map(cat => {
            if (cat.id === categoryId) {
                const newSelected = !cat.selected;
                return {
                    ...cat,
                    selected: newSelected,
                    // If main category is selected, enable all subcategories
                    // If main category is deselected, disable all subcategories
                    subCategories: cat.subCategories.map(sub => ({
                        ...sub,
                        selected: newSelected ? true : false
                    }))
                };
            }
            return cat;
        }));
    };
    
    // Handle subcategory checkbox change
    const handleSubCategoryChange = (categoryId: string, subCategoryId: string) => {
        setCategories(prev => prev.map(cat => {
            if (cat.id === categoryId) {
                const updatedSubCategories = cat.subCategories.map(sub => {
                    if (sub.id === subCategoryId) {
                        return { ...sub, selected: !sub.selected };
                    }
                    return sub;
                });
                
                // Check if any subcategory is selected
                const anySubCategorySelected = updatedSubCategories.some(sub => sub.selected);
                
                return {
                    ...cat,
                    // Update main category based on subcategories
                    selected: anySubCategorySelected,
                    subCategories: updatedSubCategories
                };
            }
            return cat;
        }));
    };
    
    // Handle select all categories
    const handleSelectAll = () => {
        setCategories(prev => prev.map(cat => ({
            ...cat,
            selected: true,
            subCategories: cat.subCategories.map(sub => ({
                ...sub,
                selected: true
            }))
        })));
    };
    
    // Handle select none categories
    const handleSelectNone = () => {
        setCategories(prev => prev.map(cat => ({
            ...cat,
            selected: false,
            subCategories: cat.subCategories.map(sub => ({
                ...sub,
                selected: false
            }))
        })));
    };
    
    // Button handlers
    const handleStartSelected = () => {
        // Switch to live runs tab without adding mock data
        setActiveTab('liveRuns');
    };

    const handlePauseAll = () => {
        // Pause all functionality will go here
    };

    const handleReset = () => {
        // Reset functionality
        setSelectedItems([]);
        setActiveItems([]);
        setLiveRuns([]);
        handleSelectNone();
    };

    const handleStopAll = () => {
        // Stop all functionality
        setActiveItems([]);
        setLiveRuns([]);
    };
    
    // File handlers
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };
    
    const handleUpload = () => {
        // Upload functionality will go here
        console.log("Uploading file:", selectedFile);
    };
    
    // Generate chunks
    const handleGenerateChunks = () => {
        // Generate chunks functionality will go here
        console.log("Generating chunks with Top K:", topK);
    };

    return (
        <BenchmarkContainer>
            <BenchmarkHeader>
                <HeaderLeft>
                    <IconContainer>
                        <BenchmarkIcon />
                    </IconContainer>
                    <TitleSection>
                        <BenchmarkTitle>Benchmark Hub</BenchmarkTitle>
                        <BenchmarkSubtitle>Evaluate and compare AI agent performance</BenchmarkSubtitle>
                    </TitleSection>
                </HeaderLeft>
                
                <HeaderRight>
                    <SelectedCount>
                        Selected: {selectedSubCategories.length}
                    </SelectedCount>
                    
                    <PlayButton 
                        disabled={selectedSubCategories.length === 0}
                        onClick={handleStartSelected}
                    >
                        ▶ Start Selected
                    </PlayButton>
                    
                    <ActionButton 
                        variant="warning"
                        onClick={handlePauseAll}
                        disabled={activeItems.length === 0}
                    >
                        ⏸ Pause
                    </ActionButton>
                    
                    <ActionButton 
                        onClick={handleReset}
                    >
                        ↺ Reset
                    </ActionButton>
                    
                    <ActionButton 
                        variant="danger"
                        onClick={handleStopAll}
                        disabled={activeItems.length === 0}
                    >
                        ⏹ Stop All
                    </ActionButton>
                </HeaderRight>
            </BenchmarkHeader>
            
            {/* Tab Navigation */}
            <TabsContainer>
                <Tab 
                    active={activeTab === 'agentChat'} 
                    onClick={() => setActiveTab('agentChat')}
                >
                    Configure & Create
                </Tab>
                <Tab 
                    active={activeTab === 'liveRuns'} 
                    onClick={() => setActiveTab('liveRuns')}
                >
                    Live Runs
                </Tab>
                <Tab 
                    active={activeTab === 'dashboard'} 
                    onClick={() => setActiveTab('dashboard')}
                >
                    Reporting & Dashboard
                </Tab>
            </TabsContainer>
            
            <ContentArea>
                {activeTab === 'agentChat' && (
                    <>
                        {/* Left Sidebar - Categories */}
                        <SidebarContainer>
                            <SectionTitle>
                                Personas (Categories)
                                <ButtonGroup>
                                    <SmallButton className={selectedSubCategories.length === categories.flatMap(c => c.subCategories).length ? "active" : ""} onClick={handleSelectAll}>All</SmallButton>
                                    <SmallButton className={selectedSubCategories.length === 0 ? "active" : ""} onClick={handleSelectNone}>None</SmallButton>
                                </ButtonGroup>
                            </SectionTitle>
                            
                            {categories.map(category => (
                                <CategoryContainer key={category.id}>
                                    <CategoryCheckbox>
                                        <input 
                                            type="checkbox" 
                                            id={`category-${category.id}`} 
                                            checked={category.selected} 
                                            onChange={() => handleCategoryChange(category.id)}
                                        />
                                        <label htmlFor={`category-${category.id}`}>{category.name}</label>
                                    </CategoryCheckbox>
                                    
                                    {category.subCategories.length > 0 && (
                                        <SubCategoryContainer>
                                            {category.subCategories.map(subCategory => (
                                                <SubCategoryCheckbox key={subCategory.id}>
                                                    <input 
                                                        type="checkbox" 
                                                        id={`subcat-${subCategory.id}`} 
                                                        checked={subCategory.selected} 
                                                        onChange={() => handleSubCategoryChange(category.id, subCategory.id)}
                                                        disabled={!category.selected}
                                                    />
                                                    <label htmlFor={`subcat-${subCategory.id}`}>{subCategory.name}</label>
                                                </SubCategoryCheckbox>
                                            ))}
                                        </SubCategoryContainer>
                                    )}
                                </CategoryContainer>
                            ))}
                        </SidebarContainer>
                        
                        {/* Main Content Area */}
                        <MainContentContainer>
                            {/* Model Selection */}
                            <Card>
                                <TestCasesHeader>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Model Selection
                                </TestCasesHeader>
                                
                                <ModelSelectionContainer>
                                    <ModelColumn>
                                        <ModelLabel>Model A (in-house)</ModelLabel>
                                        <ModelDropdown 
                                            value={modelA} 
                                            onChange={(e) => setModelA(e.target.value as ModelA)}
                                        >
                                            {Object.values(ModelA).map(model => (
                                                <option key={model} value={model}>{model}</option>
                                            ))}
                                        </ModelDropdown>
                                    </ModelColumn>
                                    
                                    <ModelColumn>
                                        <ModelLabel>Model B (baseline)</ModelLabel>
                                        <ModelDropdown 
                                            value={modelB} 
                                            onChange={(e) => setModelB(e.target.value as ModelB)}
                                        >
                                            {Object.values(ModelB).map(model => (
                                                <option key={model} value={model}>{model}</option>
                                            ))}
                                        </ModelDropdown>
                                    </ModelColumn>
                                </ModelSelectionContainer>
                            </Card>
                            
                            {/* Test Cases */}
                            <Card>
                                <TestCasesHeader>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Test Cases
                                </TestCasesHeader>
                                
                                <TestCasesSubtitle>
                                    {selectedSubCategories.length > 0 
                                        ? `Selected sub-categories` 
                                        : 'Pick at least one sub-category from the left to enable test case actions.'}
                                </TestCasesSubtitle>
                                
                                {selectedSubCategories.length > 0 && (
                                    <SelectedTagsContainer>
                                        {categories.map(category => 
                                            category.subCategories
                                                .filter(sub => sub.selected)
                                                .map(sub => (
                                                    <SelectedTag key={`${category.id}-${sub.id}`}>
                                                        {`${category.name.split(' ')[0]}: ${sub.name}`}
                                                    </SelectedTag>
                                                ))
                                        )}
                                        {categories.find(cat => cat.id === "domain")?.selected && (
                                            <>
                                                <SelectedTag>Interaction: Coherence</SelectedTag>
                                                <SelectedTag>Interaction: Engagement</SelectedTag>
                                                <SelectedTag>Interaction: Politeness/tone</SelectedTag>
                                            </>
                                        )}
                                    </SelectedTagsContainer>
                                )}
                                
                                <TestCasesContent>
                                    <TestCasesColumn>
                                        <UploadSection>
                                            <UploadHeader>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Upload test cases
                                            </UploadHeader>
                                            <UploadDescription>
                                                Accepts JSON or CSV. Each row should include: prompt, expected_format, evaluator, sub_category.
                                            </UploadDescription>
                                            
                                            <FileInputContainer>
                                                <BrowseButton>Browse...</BrowseButton>
                                                <FileDisplay>
                                                    {selectedFile ? selectedFile.name : 'No file selected.'}
                                                </FileDisplay>
                                            </FileInputContainer>
                                            
                                            <UploadButtonContainer>
                                                <UploadButton onClick={handleUpload}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    Upload
                                                </UploadButton>
                                            </UploadButtonContainer>
                                        </UploadSection>
                                    </TestCasesColumn>
                                    
                                    <TestCasesColumn>
                                        <UploadSection>
                                            <UploadHeader>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Generate chunks (retriever)
                                            </UploadHeader>
                                            
                                            <FormGroup style={{ marginTop: '1rem' }}>
                                                <FormLabel>Top K</FormLabel>
                                                <FormInput 
                                                    type="number" 
                                                    value={topK}
                                                    onChange={(e) => setTopK(e.target.value)}
                                                    style={{ width: '100%' }}
                                                />
                                            </FormGroup>
                                            
                                            <FormGroup style={{ marginTop: '1rem' }}>
                                                <FormLabel>Attach chunks to</FormLabel>
                                                <ModelDropdown>
                                                    <option>Baseline-B only (Model-A retrieves internally)</option>
                                                </ModelDropdown>
                                            </FormGroup>
                                            
                                            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#a0aec0' }}>
                                                Chunks will be generated per test case and stored with Baseline-B payload.
                                            </div>
                                            
                                            <UploadButtonContainer>
                                                <GenerateButton onClick={handleGenerateChunks}>
                                                    Generate
                                                </GenerateButton>
                                            </UploadButtonContainer>
                                        </UploadSection>
                                    </TestCasesColumn>
                                </TestCasesContent>
                                
                                <GenerateSection>
                                    <GenerateDescription>
                                        <div>Generate starter test cases</div>
                                        <div>Creates a small pack per selected sub-category (you wire this to your generator).</div>
                                    </GenerateDescription>
                                    
                                    <GenerateButton 
                                        onClick={handleGenerateChunks}
                                        disabled={selectedSubCategories.length === 0}
                                    >
                                        Generate
                                    </GenerateButton>
                                </GenerateSection>
                            </Card>
                        </MainContentContainer>
                    </>
                )}

                {activeTab === 'liveRuns' && (
                    <MainContentContainer>
                        <Card>
                            <LiveRuns runs={liveRuns} />
                        </Card>
                    </MainContentContainer>
                )}

                {activeTab === 'dashboard' && (
                    <MainContentContainer>
                        <Card>
                            <TestCasesHeader>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Reporting & Dashboard
                            </TestCasesHeader>
                            <div style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>
                                Dashboard content will be implemented soon.
                            </div>
                        </Card>
                    </MainContentContainer>
                )}
            </ContentArea>
        </BenchmarkContainer>
    );
};

export default BenchmarkPage; 