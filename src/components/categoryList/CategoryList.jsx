import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Coding
        </Link>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.sport}`}
        >
          <Image
            src="/sport.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Sport
        </Link>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href="/blog?cat=sytle"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={52}
            height={52}
            className={styles.image}
          />
          Food
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
