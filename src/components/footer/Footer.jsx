import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/hellopettek.png"
            alt="hellopettek blog"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>hellopettek</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <div className={styles.icons}>
          <Image src="/twitter.png" alt="twitter" width={20} height={20} />
          <Image src="/medium.png" alt="medium" width={20} height={20} />
          <Image src="/behance.png" alt="behance" width={20} height={20} />
          <Image src="/github.png" alt="github" width={20} height={20} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Twitter</Link>
          <Link href="/">Medium</Link>
          <Link href="/">Behance</Link>
          <Link href="/">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
