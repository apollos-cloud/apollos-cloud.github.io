import { ClientCard } from './ClientCard';

export const clientsData: ClientCard[] = [
  {
    name: 'EOI',
    location: 'Israel-TLV',
    productType: ['Service provider'],
    imageSrc: 'https://eoi.co.il/wp-content/uploads/2011/07/logo.png',
    description:
      'creating responsive design for websites for mobile, tablet and pc & developing new features and customizing WordPress plugins and themes according to client specifications',
    tags: [
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
      'Wordpress'
    ],
    companySize: {
      size: 'small',
      numberOfEmployees: {
        from: 1,
        to: 5
      }
    }
  },
  {
    name: 'Aikux',
    location: 'Germany-Berlin',
    productType: ['DaaS', 'SaaS', 'PaaS'],
    imageSrc: 'https://www.aikux.com/wp-content/uploads/2013/11/aikux.com_.png',
    description:
      'Building and supporting migraven features, configure the frontend configurations files, creating data visualization, create and customize features in the company website.',
    tags: [
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
      'Wordpress'
    ],
    companySize: {
      size: 'meduim',
      numberOfEmployees: {
        from: 35,
        to: 50
      }
    }
  }
];
