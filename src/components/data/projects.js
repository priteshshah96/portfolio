import { FaDatabase, FaBrain, FaRobot, FaChartLine, FaTools } from 'react-icons/fa';

export const allProjects = [
  {
    title: 'Natural Language Data Analysis Platform',
    description: 'Designed and implemented a Text-to-SQL data visualization tool using LangGraph and FastAPI, enabling business users to generate SQL queries and visualizations through natural language prompts.',
    tags: ['Python', 'NLP', 'LangGraph', 'FastAPI', 'React'],
    imageUrl: '/assets/projects/nlp-data-analysis.png',
    icon: FaDatabase, // Database-related icon
    projectUrl: '',
  },
  {
    title: 'Electricity Demand Forecasting',
    description: 'Developed an electrical demand forecasting platform using XGBoost and LightGBM with conformal prediction. Deployed on AWS SageMaker with auto-scaling, achieving 71.45% prediction coverage and MAE of 12.90 kWh across 50K+ data points.',
    tags: ['Python', 'Machine Learning', 'XGBoost', 'LightGBM', 'AWS SageMaker'],
    imageUrl: '/assets/projects/electricity-demand-forecasting.png',
    icon: FaChartLine, // Chart-related icon
    projectUrl: 'https://github.com/priteshshah96/mlops-timeseries',
  },
  {
    title: 'Financial 10-k RAG',
    description: 'Developed an automated RAG system using SEC’s EDGAR API and LlamaParse to process 10-K filings, implementing FAISS vectorstore with BGE embeddings and LangChain for orchestration, achieving 72% QA accuracy on financial queries.',
    tags: ['Python', 'NLP', 'RAG', 'LangChain', 'FAISS'],
    imageUrl: '/assets/projects/financial-10k-rag.png',
    icon: FaDatabase, // Database-related icon
    projectUrl: 'https://github.com/priteshshah96/10-K-Rag',
  },
  {
    title: 'Haiku Generator',
    description: 'AI-powered haiku generator using LLaMa 2 and GPT-J 6B, featuring sentiment analysis and word cloud visualization.',
    tags: ['Python', 'NLP', 'Deep Learning', 'LLaMa 2'],
    imageUrl: '/assets/projects/haiku-generator.png',
    icon: FaBrain, // Brain-related icon for AI
    projectUrl: 'https://github.com/priteshshah96/HaikuGenerator',
  },
  {
    title: 'Workforce Scheduling',
    description: 'Comprehensive dashboards for shift duty scheduling and raw material procurement optimization using Tableau and Random Forest algorithms.',
    tags: ['Python', 'Machine Learning', 'Tableau', 'Optimization'],
    imageUrl: '/assets/projects/workforce-scheduling.png',
    icon: FaTools, // Tools-related icon
  },
  {
    title: 'Smart Energy Prediction',
    description: 'Time series forecasting model for energy consumption prediction using LSTM networks and weather data integration.',
    tags: ['Python', 'Deep Learning', 'Time Series', 'LSTM'],
    imageUrl: '/assets/projects/energy-prediction.png',
    icon: FaRobot, // Robot-related icon for prediction
  },
];
