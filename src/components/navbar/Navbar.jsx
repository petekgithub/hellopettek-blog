import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/medium.png" alt="medium" width={30} height={30} />
        <Image src="/twitter.png" alt="twitter" width={25} height={25} />
        <Image src="/instagram.png" alt="instagram" width={25} height={25} />
      </div>
      <div className={styles.logo}>hellopettekblog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
