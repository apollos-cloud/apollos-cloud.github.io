export type TechLanguage =
  | 'Javascript'
  | 'Typescript'
  | 'Bash'
  | 'Python'
  | 'YAML'
  | 'PHP'
  | 'C#'
  | "Html"
  | "SASS"
  | "LESS"
  | "CSS"
export type Backend =
  | 'Node.js'
  | 'CDK'
  | 'Cloud Formation'
  | 'SQS'
  | 'SNS'
  | 'Api Gateway'
  | 'AppSync'
  | 'EC2'
  | 'CDN'
  | 'Event Bridge'
  | 'Lambda'
  | 'Step Function'
  | 'State Machine'
  | 'S3'
  | 'DynamoDB'
  | 'SQL'
  | 'Postgress'
  | 'Neo4J'
  | 'MongoDB';
export type Frontend =
  | 'React'
  | 'Vanila Javascript'
  | 'Jquery'
  | 'D3'
  | 'Material UI'
  | 'Bootstrap'
  | "Kendo"
  | "Redux"
  | "Mobx"
| "React-intl"
export type CloudProvider = 'AWS' | 'Azure' | 'GCP' | 'Heroku';
export type Compiler = 'Babel' | "Webpack" | "esBuild" | "Polyfil";
export type Library = '';
export type Linter = 'tsLint' | "esLint" | "prettier";
export type ThirdPartyProvider = 'Twilo' | 'ChargeBee' | "Wordpress Plugins";
export type DevOps = 'Git' | "Github Actions" | "Jenkins" | "CircleCI";
export type Test = "Jest" | "Mocha" | "Chai" | "Selenium" | "Cucamber" | "Enzyme"
export type PackageManager = "npm" | "nvm" | "volta" | "yarn"
export type FrameWork = "express" | "nest" | "Larvel" | "hapi" | "Wordpress"
export type Technology = TechLanguage | Backend | Frontend | CloudProvider | Compiler | Library | Linter | ThirdPartyProvider | DevOps | Test |PackageManager |FrameWork