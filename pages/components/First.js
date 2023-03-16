import React, { useEffect, useRef } from "react";
import styles from "../../styles/first.module.css";
import Image from "next/image";
import gsap, { Power0 } from "gsap";

const First = () => {
  const target = useRef();
  useEffect(() => {
    gsap.fromTo(
      "#img",
      { y: -100 },
      { y: 0, duration: 2, ease: Power0.easeInOut }
    );
    return () => {
      gsap.killTweensOf("#img");
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.content} ref={target}>
          <p>SONY - WH-XB910N</p>
          <p>Experience Deeper Bass , Lesser Noise</p>
          <button className={styles.btn}>Buy Now</button>
        </div>
        <Image
          src="/1.png"
          id="img"
          height={500}
          width={500}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default First;
