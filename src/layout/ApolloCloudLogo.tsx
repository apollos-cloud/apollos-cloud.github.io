import Logo from 'assets/images/logo.svg';
import { CSSProperties } from 'react';

export interface ApolloCloudLogo extends CSSProperties {}

export const ApolloCloudLogo = (style?: ApolloCloudLogo) => (
  <Logo
    style={{
      height: 85,
      width: 100,
      transform: 'scale(1.5, 2)',
      ...style
    }}
  />
);
