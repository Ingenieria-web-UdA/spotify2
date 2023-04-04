import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import React from 'react'

interface LayoutProps {
    children: JSX.Element;
}
const Layout = ({children}:LayoutProps) => {
  return (
    <div className="main-container">
        <SideBar/>
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    </div>
  );
}

export {Layout};