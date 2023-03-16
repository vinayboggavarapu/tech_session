import React, { useRef, useEffect } from "react";
import styles from "../../styles/second.module.css";
import Image from "next/image";
import gsap, { Power0 } from "gsap";

const Second = () => {
  const animate = useRef();
  const contref = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: Power0.easeInOut },
      scrollTrigger: {
        trigger: contref.current,
        start: "top 80%",
        end: "80% 80%",
        scrub: true,
      },
    });
    tl.fromTo(animate.current, { x: -150, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);
  return (
    <div className={styles.container} ref={contref}>
      <div className={styles.inner_container}>
        <Image
          ref={animate}
          src="/2.png"
          height={500}
          width={500}
          className={styles.img}
        />
        <div className={styles.content}>
          <p>BUILT FOR MUSIC LOVERS</p>
          <p className={styles.quality}>
            SOLID <span>BUILD</span>
          </p>
          <p className={styles.quality}>
            SOLID <span>SOUND</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
