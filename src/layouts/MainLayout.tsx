import React from 'react';
import clsx from 'clsx';
import  LeftMenu  from '../components/leftMenu/LeftMenu';
import Header from '../components/header/Header';
import { SideComments } from '@/components/sideComments/SideComments';

interface MainLayoutProps {
  children: React.ReactNode;
  hideComments?: boolean;
  hideLeftMenu?: boolean;
  contentFullWidth?: string;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth = false,
  className,
  hideComments = false,
  hideLeftMenu = false,
}) => {
  return (
    <div>
        <Header />
        <div className={clsx('pt-[90px] flex justify-between align-center', className)}>
            <div className="leftSide">
            {!hideLeftMenu &&<LeftMenu/>}
            </div>
            <div style={{width: '1000px'}} className={`content top-[90px] absolute inset-0 m-auto `}>
                <main>{children}</main>
            </div>
            <div>
                {!hideComments && <SideComments />}
            </div>
        </div>
    </div>
  );
};
