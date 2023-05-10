import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import Footer from './Footer/Footer';

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1" />
      </Head>
      <Link href="/">The Dean Dsouza Mindset</Link>
      <Navbar />
      <ThemeToggle/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
