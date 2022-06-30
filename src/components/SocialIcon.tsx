import { FC } from 'react';

export interface SocialMediaIconProps {
  githubLink: string;
  linkedinLink: string;
  mediumLink: string;
}

export const companySocialLinks: SocialMediaIconProps = {
  githubLink: 'https://github.com/apollos-cloud/',
  linkedinLink:
    'https://www.linkedin.com/company/apollo-s-cloud/about/?viewAsMember=true',
  mediumLink: 'https://medium.com/@omri.wallach_89139'
};

export const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  githubLink,
  linkedinLink,
  mediumLink
}) => (
  <ul className="social-icons">
    <li>
      <a href={githubLink}>
        <i className="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a href={linkedinLink}>
        <i className="fa fa-linkedin"></i>
      </a>
    </li>
    <li>
      <a href={mediumLink}>
        <i className="fa fa-medium"></i>
      </a>
    </li>
  </ul>
);
