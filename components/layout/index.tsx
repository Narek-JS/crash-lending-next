import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';

import classes from './index.module.css';
import { ScrollTopIcon } from './ScrollTopIcon';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { SidebarProvider } from '@/context/sideBar';

const Layout: React.FC<any> = ({ children, pageTitle = 'My Next App' }) => (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SidebarProvider>
        <Header />
        <SideBar />
      </SidebarProvider>
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
      <ScrollTopIcon />
    </>
);

export default Layout;