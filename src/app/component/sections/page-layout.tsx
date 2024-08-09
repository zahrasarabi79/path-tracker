import { FC } from 'react';
import Header from './header';
import { PageLayoutProps } from '@/type/type';

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <body>
      <Header />
      <main>{children}</main>
    </body>
  );
};

export default PageLayout;
