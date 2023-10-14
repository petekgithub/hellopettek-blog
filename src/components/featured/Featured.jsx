import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>
      <b className={styles.bold}>Hello!</b> Discover my stories and creative ideas
    </h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}></div>
      <div>
        <h1 className={styles.postTitle}>Title</h1>
        <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui facilis recusandae cupiditate velit? Dicta distinctio 
          labore perferendis ratione vel, rem ipsum, unde nisi dolore 
          quas corporis quos officiis recusandae iure?
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  </div>;
};

export default Featured;
