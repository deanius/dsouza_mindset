import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/guides">Guides</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
