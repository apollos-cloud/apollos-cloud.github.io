import { ClientCard } from './ClientCard';

export const clientsData: ClientCard[] = [
  {
    name: 'EOI',
    location: 'Israel-TLV',
    productType: ['Service provider'],
    imageSrc: 'https://eoi.co.il/wp-content/uploads/2011/07/logo.png',
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
      "Responsive Design"
    ],
    workingTags: ["Frontend","Backend","Fullstack"],
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
        "PHP",
        "Node.js",
        "Socket.io",
        "Webpack",
        "Typescript",
        'SASS',
        'LESS',
        'Javascript',
        'Html',
        'Material UI',
        'Wordpress',
        "Responsive Design"
      ],
      workingTags: ["Frontend","Backend","Fullstack","Project Management","Team Management"],
      companySize: {
        size: 'medium',
        numberOfEmployees: {
          from: 35,
          to: 50
        }
      }
    }
  ,
  {
    name: 'Aikux',
    location: 'Germany-Berlin',
    productType: ['DaaS', 'SaaS', 'PaaS'],
    imageSrc: 'https://www.aikux.com/wp-content/uploads/2013/11/aikux.com_.png',
    description:'Building a single page application, configure the frontend configurations files, creating data visualization, create and customize features in the company website.',
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
      "Responsive Design"
    ],
    workingTags: ["Frontend"],
    companySize: {
      size: 'medium',
      numberOfEmployees: {
        from: 35,
        to: 50
      }
    }
  }
];
