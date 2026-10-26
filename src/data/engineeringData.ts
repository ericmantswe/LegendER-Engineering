import {
  ServiceItem,
  TechnologyCategory,
  ProcessStep,
  ProjectItem,
} from '../types';

export const BRAND_DATA = {
  name: 'legendER engineering',
  shortName: 'legendER',
  tagline: 'Your Challenges. Our Engineering. Measurable Results.',
  heroHeadline: 'We Engineer Solutions. You Grow Your Business.',
  heroSupportingText: 'Intelligent automation, embedded electronics, and CAD design to cut costs and scale output.',
  contactPlaceholder: {
    email: 'ericmantswe3@gmail.com',
    phone: '+267 72 326 496',
    whatsapp: '+267 72 326 496',
    whatsappUrl: 'https://wa.me/26772326496',
    location: 'Palapye, Botswana',
    workingHours: 'Mon – Fri: 08:00 – 17:00 (CAT)',
  },
};

export const BUSINESS_VALUES = [
  {
    title: 'SOLVE PROBLEMS',
    description: 'Targeted root-cause engineering for plant and process bottlenecks.',
    focus: 'ROOT-CAUSE',
  },
  {
    title: 'REDUCE COSTS',
    description: 'Eliminate downtime, minimise scrap, and lower operating expenses.',
    focus: 'LEAN OPERATION',
  },
  {
    title: 'DRIVE GROWTH',
    description: 'Scale line speed, throughput consistency, and machine capacity.',
    focus: 'OUTPUT SCALE',
  },
];

export const FOUNDER_DATA = {
  name: 'Eric Obakeng Mantswe',
  title: 'Founder | Mechatronics & Industrial Instrumentation',
  degree: 'BEng Mechatronics & Industrial Instrumentation',
  bio: `Mechatronics & Industrial Instrumentation Engineer focused on industrial automation, embedded hardware, and creating practical commercial value from engineering.`,
  quote: 'Engineering must do more than function—it must create measurable business value.',
  coreCompetencies: [
    'PLC Control',
    'Instrumentation',
    'Microchip PIC',
    'Fusion 360 CAD',
    'Telemetry Web Apps',
    'System Integration',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    shortDescription: 'Automate repetitive lines and ensure deterministic machine cycle times.',
    capabilities: [
      'PLC programming & ladder logic',
      'Photoelectric & proximity sensors',
      'Automated packaging & conveyance',
    ],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'process-optimisation',
    title: 'Process Optimisation',
    shortDescription: 'Eliminate shop-floor bottlenecks and accelerate throughput.',
    capabilities: [
      'Bottleneck & workflow analysis',
      'Downtime reduction strategies',
      'Waste & cycle time reduction',
    ],
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'software-web-dev',
    title: 'Software & Web Applications',
    shortDescription: 'Operational web interfaces for real-time telemetry and management.',
    capabilities: [
      'Custom operational web apps',
      'Real-time telemetry dashboards',
      'API & database integration',
    ],
    icon: 'Terminal',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mechanical-design',
    title: 'Mechanical Design & CAD',
    shortDescription: 'Parametric 3D solid modelling and DFM prototype verification.',
    capabilities: [
      'Autodesk Fusion 360 3D CAD',
      'Custom brackets, grippers & housings',
      'Kinematic & stress analysis',
    ],
    icon: 'Box',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'electronics-embedded',
    title: 'Electronics & Embedded',
    shortDescription: 'Dedicated Microchip PIC hardware for sensing and control.',
    capabilities: [
      'Microchip PIC microcontrollers',
      'Bare-metal Embedded C firmware',
      'Custom PCB design & prototyping',
    ],
    icon: 'CircuitBoard',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    shortDescription: 'Unify mechanical equipment, sensors, controllers, and software.',
    capabilities: [
      'Hardware–software bus communication',
      'Machine & line telemetry',
      'Centralized operator alarms',
    ],
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
  },
];

export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    id: 'tech-automation',
    category: 'Industrial Automation',
    description: 'Deterministic plant control & sensing',
    technologies: [
      { name: 'PLC Programming', description: 'Ladder logic & structured control' },
      { name: 'Allen-Bradley', description: 'Industrial controllers where applicable' },
      { name: 'Industrial Sensors', description: 'Photoelectric, inductive, pressure' },
      { name: 'Closed-Loop Control', description: 'Feedback regulation' },
    ],
  },
  {
    id: 'tech-software',
    category: 'Software & Web',
    description: 'Operational visibility & telemetry',
    technologies: [
      { name: 'Web Applications', description: 'Responsive operational interfaces' },
      { name: 'Live Dashboards', description: 'Real-time telemetry & logs' },
      { name: 'Database Architecture', description: 'Structured sensor data storage' },
      { name: 'REST APIs', description: 'Factory-to-cloud data bridge' },
    ],
  },
  {
    id: 'tech-cad',
    category: 'CAD & Prototyping',
    description: 'Parametric 3D design & DFM',
    technologies: [
      { name: 'Autodesk Fusion 360', description: 'Parametric 3D CAD modeling' },
      { name: 'Kinematic Assemblies', description: 'Linkages & mechanism motion' },
      { name: 'Stress Analysis (FEA)', description: 'Structural load verification' },
      { name: 'DFM Prototyping', description: 'Tolerances for fabrication' },
    ],
  },
  {
    id: 'tech-embedded',
    category: 'Electronics & Embedded',
    description: 'Microchip PIC hardware & firmware',
    technologies: [
      { name: 'Microchip PIC', description: 'PIC16, PIC18, PIC32 MCUs' },
      { name: 'Embedded C', description: 'Deterministic bare-metal code' },
      { name: 'Sensor Busses', description: 'I2C, SPI, UART, RS-485' },
      { name: 'Custom PCBs', description: 'Dedicated physical hardware' },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Audit workflow & bottleneck',
    focus: 'Problem Definition',
    deliverables: ['Workflow audit', 'Scope & target outcome'],
  },
  {
    number: '02',
    title: 'Analyse',
    summary: 'Assess feasibility & constraints',
    focus: 'Feasibility',
    deliverables: ['Feasibility matrix', 'Budget alignment'],
  },
  {
    number: '03',
    title: 'Design',
    summary: 'Architect schematics & CAD',
    focus: 'Architecture',
    deliverables: ['System schematics', 'CAD blueprints'],
  },
  {
    number: '04',
    title: 'Develop',
    summary: 'Code, program & prototype',
    focus: 'Build',
    deliverables: ['PLC/firmware code', 'Hardware prototype'],
  },
  {
    number: '05',
    title: 'Test',
    summary: 'Calibrate & verify safety',
    focus: 'Verification',
    deliverables: ['Validation checklist', 'Safety verification'],
  },
  {
    number: '06',
    title: 'Deliver',
    summary: 'Commission & document',
    focus: 'Commissioning',
    deliverables: ['Commissioned unit', 'Operating manual'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'plc-packaging-controller',
    title: 'Packaging Line PLC Control Cabinet',
    category: 'Industrial Automation',
    categoryType: 'automation',
    shortDescription: 'Modular PLC cabinet for multi-stage conveyance, photoelectric indexing, and safety interlocking.',
    image: '/src/assets/images/project_plc_automation_1792416357958.jpg',
    problem: 'Line indexing variance and lack of automatic jam shutoffs.',
    solution: 'Industrial PLC panel with ladder logic and Category 3 E-stop circuit.',
    outcomeStatus: 'Testbed Verified',
    outcomeDetails: 'Verified cycle repeatability, sub-20ms shutdown, and clean DIN-rail architecture.',
    technologies: ['PLC Architecture', 'Ladder Logic', 'Sensors', 'Safety Relays'],
    specifications: {
      Control: '16 Digital I/O PLC',
      Safety: 'Cat 3 E-Stop Relay',
      Enclosure: 'IP54 Cabinet',
      Response: '< 20ms logic cycle',
    },
  },
  {
    id: 'pic-telemetry-acquisition',
    title: 'PIC32 Sensor Telemetry Node',
    category: 'Electronics & Embedded',
    categoryType: 'embedded',
    shortDescription: 'Custom PCB with Microchip PIC32 for multi-channel physical sensor logging.',
    image: '/src/assets/images/project_embedded_pic_1792416358366.jpg',
    problem: 'Commercial loggers are costly and lack flexible custom sensor busses.',
    solution: 'Dedicated PCB with Microchip PIC running bare-metal C with OLED display.',
    outcomeStatus: 'PCB Prototyped',
    outcomeDetails: 'Low power draw, reliable non-volatile logging, and stable sensor polling.',
    technologies: ['Microchip PIC32', 'Embedded C', 'Custom PCB', 'I2C / SPI'],
    specifications: {
      MCU: 'Microchip PIC32',
      Sampling: '10Hz – 1kHz ADC',
      Output: 'UART / OLED',
      Power: '3.3V Regulated',
    },
  },
  {
    id: 'fusion360-robotic-arm',
    title: 'Parametric Multi-Axis End-Effector',
    category: 'Mechanical Design',
    categoryType: 'cad',
    shortDescription: 'Kinematic 3D CAD modeling in Autodesk Fusion 360 for automated pick-and-place manipulation.',
    image: '/src/assets/images/about_engineering_design_1792416356440.jpg',
    problem: 'Standard grippers fail to hold non-standard parts securely.',
    solution: 'Custom mechanical linkages, gear reduction, and DFM fit clearances in Fusion 360.',
    outcomeStatus: 'CAD Simulated',
    outcomeDetails: 'Kinematic range verified, FEA stress checked, prototype fit validated.',
    technologies: ['Fusion 360', 'Parametric CAD', 'FEA Analysis', 'DFM Prototyping'],
    specifications: {
      Tool: 'Fusion 360',
      Kinematics: 'Multi-Axis',
      Tolerance: '± 0.2mm',
      Material: 'Polymer / CNC Al',
    },
  },
  {
    id: 'industrial-iot-dashboard',
    title: 'Plant Telemetry Web Application',
    category: 'Software & Web',
    categoryType: 'software',
    shortDescription: 'Real-time dashboard providing plant managers with live uptime tracking and shift metrics.',
    image: '/src/assets/images/hero_industrial_automation_1792416355566.jpg',
    problem: 'Paper logs cause delays in identifying machine stoppages.',
    solution: 'Responsive telemetry dashboard with shift log aggregation and alerts.',
    outcomeStatus: 'Architecture Tested',
    outcomeDetails: 'Sub-second updates and instant tabular inspection of plant KPIs.',
    technologies: ['TypeScript & React', 'Telemetry APIs', 'Operational Dashboards'],
    specifications: {
      Platform: 'React Web App',
      Target: 'Desktop & Tablet',
      Latency: '< 150ms',
      Access: 'Role-Based',
    },
  },
];

export const WHY_WORK_WITH_US = [
  {
    title: 'BUSINESS FOCUS',
    description: 'Every decision aims directly at productivity, cost reduction, and profit.',
    pillar: 'COMMERCIAL',
  },
  {
    title: 'TAILORED SOLUTIONS',
    description: 'Root-cause diagnosis before selecting hardware, controllers, or code.',
    pillar: 'CUSTOM FIT',
  },
  {
    title: 'COST-CONSCIOUS',
    description: 'Low operating overhead, accessible parts, and long-term durability.',
    pillar: 'VALUE',
  },
  {
    title: 'INTEGRATED SYNERGY',
    description: 'Mechanical design, electronics, automation, and software in one workflow.',
    pillar: 'MECHATRONICS',
  },
];

export const MISSION_VISION = {
  mission: 'Solve technical problems, cut waste, and improve business profitability through practical engineering.',
  vision: 'Build trusted industrial technology solutions across Botswana and Southern Africa.',
};
