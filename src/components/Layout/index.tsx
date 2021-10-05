import React, { ReactNode } from 'react';
import { LayoutStyle, Title } from './index.style';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <LayoutStyle>
      {title && <Title>{title}</Title>}
      {children}
    </LayoutStyle>
  );
};

export default Layout;
