import React, { useRef, useEffect } from "react";
import styles from "../../styles/third.module.css";
import Image from "next/image";
import gsap, { Power0 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Third = () => {
  gsap.registerPlugin(ScrollTrigger);
  const animate = useRef();
  const containerref = useRef();
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: Power0.easeInOut },
      scrollTrigger: {
        trigger: containerref.current,
        start: "top 80%",
        end: "80% 80%",
      },
    });
    tl.fromTo(
      animate.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: Power0.easeInOut }
    );
    tl.fromTo(
      "#img3",
      { y: 350, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: Power0.easeInOut }
    );
    return () => {
      gsap.killTweensOf("#img3");
      gsap.killTweensOf(animate.current);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerref}>
      <div className={styles.inner_container}>
        <Image
          id="img3"
          src="/3.png"
          height={500}
          width={500}
          className={styles.img}
        />
        <div className={styles.content} ref={animate}>
          <p>12.5MM DRIVER LDAC AND ANC</p>
          <p className={styles.quality}>DEEP BASS</p>
          <p className={styles.quality}>DEEP BASS</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
