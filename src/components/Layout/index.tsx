import React, { ReactNode } from 'react';
import { LayoutStyle, Title } from './index.style';
import Header from './Header';

interface LayoutProps {
  title?: string;
  isHome: boolean;
  children: ReactNode;
}

const Layout = ({ title, isHome, children }: LayoutProps) => {
  return (
    <>
      <Header {...{ isHome }} />
      <LayoutStyle>
        {title && <Title>{title}</Title>}
        {children}
      </LayoutStyle>
    </>
  );
};

export default Layout;
