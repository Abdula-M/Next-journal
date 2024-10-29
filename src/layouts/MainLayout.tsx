import React from 'react';
import clsx from 'clsx';
import  LeftMenu  from '../components/leftMenu/LeftMenu';
import Header from '../components/header/Header';
import { SideComments } from '@/components/sideComments/SideComments';

interface MainLayoutProps {
  children: React.ReactNode;
  hideComments?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  className,
  hideComments = false,
}) => {
  return (
    <div>
        <Header />
        <div className={clsx('pt-[90px] flex justify-between align-center', className)}>
            <div className="leftSide">
            <LeftMenu/>
            </div>
            <div className={clsx('content max-w-[1000px] top-[90px] absolute inset-0 m-auto', { 'content--full': contentFullWidth })}>
                <main>{children}</main>
            </div>
            <div>
                {!hideComments && <SideComments />}
            </div>
        </div>
    </div>
  );
};
