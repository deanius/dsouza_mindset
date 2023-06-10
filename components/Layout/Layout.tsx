import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Scrollbar from "../Common/Scrollbar/Scrollbar";
import Socials from "./Socials/Socials";
import Scroller from "../Common/Scroller/Scroller";

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Socials/>
      <Scroller/>
      <Footer />
      <Scrollbar/>
    </>
  );
};

export default Layout;
