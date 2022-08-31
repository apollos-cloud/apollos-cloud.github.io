import { ClientCard } from './ClientCard';
import EoiLogo from 'assets/images/companiesLogo/eoi.logo.png';
import AdeccoLogo from 'assets/images/companiesLogo/addeco.logo.png';
import AikuxLogo from 'assets/images/companiesLogo/aikux.logo.png';
import JadudaLogo from 'assets/images/companiesLogo/jaduda.logo.png';
import LendisLogo from 'assets/images/companiesLogo/lendis.logo.png';
import VivyLogo from 'assets/images/companiesLogo/vivy.logo.png';
import WebinyLogo from 'assets/images/companiesLogo/webiny.logo.png';
import ChocoLogo from 'assets/images/companiesLogo/choco.logo.png';

export const clientsData: ClientCard[] = [
  {
    name: 'EOI',
    location: 'Israel-TLV',
    productType: ['Service provider'],
    imageSrc: EoiLogo,
    description:
      'creating responsive design for websites for mobile, tablet and pc & developing new features and customizing WordPress plugins and themes according to client specifications',
    technologyTags: [
      'Javascript',
      'Vanila Javascript',
      'CSS',
      'Wordpress Plugins',
      'Jquery',
      'SASS',
      'LESS',
      'Javascript',
      'Typescript',
      'Html',
      'Material UI',
      'Wordpress',
      'Responsive Design'
    ],
    responsibilityTags: ['Frontend', 'Backend', 'Fullstack'],
    workingEnvironmentTags: ['Kanban', 'Remote'],
    companySize: {
      size: 'small',
      numberOfEmployees: {
        from: 1,
        to: 5
      }
    }
  },
  {
    name: 'Entycore',
    location: 'Ukraine Kiev',
    productType: ['Service provider'],
    description:
      'creating responsive design for websites for mobile, tablet and pc & developing new features and customizing WordPress plugins and themes according to client specifications',
    technologyTags: [
      'Javascript',
      'Vanila Javascript',
      'CSS',
      'Wordpress Plugins',
      'PHP',
      'Node.js',
      'Socket.io',
      'Webpack',
      'Typescript',
      'SASS',
      'LESS',
      'Javascript',
      'Html',
      'Material UI',
      'Wordpress',
      'Responsive Design',
      'SPA'
    ],
    responsibilityTags: [
      'Frontend',
      'Backend',
      'Fullstack',
      'Project Management',
      'Team Management'
    ],
    workingEnvironmentTags: ['Kanban', 'Jira', 'Remote'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 35,
        to: 50
      }
    }
  },
  {
    name: 'Aikux - Migraven',
    location: 'Germany-Berlin',
    productType: ['DaaS', 'SaaS', 'PaaS'],
    imageSrc: AikuxLogo,
    description:
      'Building a single page application, configure the frontend configurations files, creating data visualization, create and customize features in the company website.',
    technologyTags: [
      'React',
      'Node.js',
      'Redux',
      'D3',
      'Webpack',
      'Babel',
      'React-intl',
      'npm',
      'Jest',
      'Kendo',
      'Jquery',
      'SASS',
      'LESS',
      'Javascript',
      'Typescript',
      'Html',
      'Material UI',
      'Wordpress',
      'Responsive Design',
      'SPA',
      'Neo4J',
      'Postgress'
    ],
    responsibilityTags: ['Frontend'],
    workingEnvironmentTags: ['Scrum', 'Jira'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 35,
        to: 50
      }
    }
  },
  {
    name: 'Jaduda - Splicky',
    location: 'Germany-Berlin',
    productType: ['SaaS', 'PaaS'],
    imageSrc: JadudaLogo,
    description:
      'Migrating the legacy application from php to SPA based on react and node, Building and maintaining the Splicky application and improving the CI/CD and SLDC.',
    technologyTags: [
      'React',
      'Node.js',
      'Redux',
      'D3',
      'Webpack',
      'Babel',
      'React-intl',
      'npm',
      'Jest',
      'SASS',
      'LESS',
      'Typescript',
      'Html',
      'Material UI',
      'Responsive Design',
      'SPA',
      'Git',
      'Github Actions',
      'GraphQL',
      'Jenkins',
      'PHP',
      'Javascript',
      'Sequalize',
      'SQL',
      'Docker',
      'Docker Compose',
      'CI/CD'
    ],
    responsibilityTags: ['Frontend', 'Backend', 'Fullstack'],
    workingEnvironmentTags: ['Scrum', 'Jira'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 35,
        to: 50
      }
    }
  },
  {
    name: 'Vivy',
    location: 'Germany-Berlin',
    productType: ['PaaS'],
    imageSrc: VivyLogo,
    description:
      'Building an MVP based on micro frontend architecture for Vivy portal, with a mockup server based on node.js and GraphQL entrypoint, which was connected to Vivy  IOS and Android  applications, microservice backend on AWS.',
    technologyTags: [
      'React',
      'Node.js',
      'Redux',
      'D3',
      'Webpack',
      'Babel',
      'React-intl',
      'npm',
      'Jest',
      'SASS',
      'LESS',
      'Typescript',
      'Html',
      'Material UI',
      'Responsive Design',
      'SPA',
      'Git',
      'GraphQL',
      'CI/CD',
      'S3',
      'Api Gateway',
      'AWS',
      'Micro Frontend',
      'Micro Services'
    ],
    responsibilityTags: ['Frontend', 'Backend', 'Fullstack'],
    workingEnvironmentTags: ['Scrum', 'Jira', 'Remote'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 50,
        to: 100
      }
    }
  },
  {
    name: 'UST / Adecco',
    location: 'Germany-Berlin',
    productType: ['PaaS'],
    imageSrc: AdeccoLogo,
    description:
      'Building a fault tolerance, scalable application, based on micro service architecture on azure cloud, the application was migrated from an HAPI framework into NEST in a TDD/BDD approach and integrating third parties services(API) and building the azure infrastructure , as well building  a client application based on react .',
    technologyTags: [
      'React',
      'Node.js',
      'nest',
      'hapi',
      'Webpack',
      'Babel',
      'npm',
      'Typescript',
      'SPA',
      'Git',
      'CI/CD',
      'Azure',
      'Micro Services',
      'Postgress'
    ],
    responsibilityTags: ['Frontend', 'Backend', 'Fullstack'],
    workingEnvironmentTags: ['Scrum', 'Jira', 'Trello', 'Kanban', 'Remote'],
    companySize: {
      size: 'large',
      numberOfEmployees: {
        from: 1000,
        to: 5000
      }
    }
  },
  {
    name: 'Lendis',
    location: 'Germany-Berlin',
    productType: ['PaaS', 'SaaS'],
    imageSrc: LendisLogo,
    description:
      'Designed and Built a backend application from scratch ,In Node based on AWS cloud as microservices architecture,REST API,event driven architecture. Connecting the application with third parties api providers and Internal backend in PHP Laravel And google cloud.The app includes different components from AWS such as lambda function,authorizer, dynamodb, api gateway,vpc,secret manager,SQS,SNS,step function.',
    technologyTags: [
      'Node.js',
      'Webpack',
      'npm',
      'Typescript',
      'Git',
      'CI/CD',
      'Github Actions',
      'SOA',
      'Micro Services',
      'DynamoDB',
      'AWS',
      'Api Gateway',
      'CDK',
      'S3',
      'PHP',
      'Larvel',
      'Lambda',
      'State Machine',
      'EC2',
      'Docker',
      'Docker Compose',
      'CDN',
      'Secret Manager',
      'Event Bridge',
      'Algolia',
      'Event Driven'
    ],
    responsibilityTags: [
      'Backend',
      'Leadership',
      'Team Management',
      'Architecture Design',
      'Clients Management',
      'Stackholders Management'
    ],
    workingEnvironmentTags: ['Scrum', 'Jira', 'Remote'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 50,
        to: 100
      }
    }
  },
  {
    name: 'Webiny',
    location: 'United Kingdom - London',
    productType: ['PaaS', 'SaaS', 'IaaS', 'Open Source'],
    imageSrc: WebinyLogo,
    description:
      'Designed and Built a backend application , in Node.js with Pulumi infrastructure as Code with different resources on AWS like, secret manager, lambda function, step function, dynamodb,Api gateway,Cognito,VPC.\nDesign and Build a frontend application, in React, as Single page application with webpack, babel and more compiler optimization.',
    technologyTags: [
      'Node.js',
      'Webpack',
      'npm',
      'Typescript',
      'Git',
      'CI/CD',
      'Github Actions',
      'Micro Services',
      'DynamoDB',
      'AWS',
      'Api Gateway',
      'CDK',
      'S3',
      'Lambda',
      'State Machine',
      'CDN',
      'Secret Manager'
    ],
    responsibilityTags: [
      'Backend',
      'Frontend',
      'Fullstack',
      'Architecture Design',
      'Clients Management',
      'Stackholders Management'
    ],
    workingEnvironmentTags: ['Scrum', 'Jira', 'Remote'],
    companySize: {
      size: 'small',
      numberOfEmployees: {
        from: 5,
        to: 10
      }
    }
  },
  {
    name: 'Choco',
    location: 'Germany - Berlin',
    productType: ['PaaS'],
    imageSrc: ChocoLogo,
    description:
      'Designed and Built the client notification system with internal monitoring system to ensure the reliability,useability,reusability, scalability.\nThe new system was implemented with CDK, Rest api gateway, State machine, alarms, SNS,SQS, DynamoDB and third parties api such as Twilio, Whatsapp message provider.',
    technologyTags: [
      'Node.js',
      'Webpack',
      'npm',
      'Typescript',
      'Git',
      'CI/CD',
      'Github Actions',
      'Micro Services',
      'DynamoDB',
      'AWS',
      'Api Gateway',
      'CDK',
      'Lambda',
      'State Machine'
    ],
    responsibilityTags: [
      'Backend',
      'Leadership',
      'Team Management',
      'Architecture Design',
      'Clients Management',
      'Stackholders Management'
    ],
    workingEnvironmentTags: ['Scrum', 'Jira', 'Remote'],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 50,
        to: 100
      }
    }
  }
];
