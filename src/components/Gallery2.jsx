import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenCenter: { opacity: 0, y: -50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
};

const Gallery2 = ({ src, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={
        direction === "left"
          ? "hiddenLeft"
          : direction === "right"
          ? "hiddenRight"
          : "hiddenCenter"
      }
      animate={isInView ? "visible" : undefined}
      variants={variants}
      className="absolute"
    >
      <img src={src} alt="Gallery" className="img-fluid" />
    </motion.div>
  );
};

export default Gallery2;
