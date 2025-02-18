import { gallery1 } from "../data/data";
import "../css/gallery.css";
import { motion } from "framer-motion";

const Gallery1 = () => {
  return (
    <div className="grid-row">
      <div className="grid-column">
        {gallery1.slice(0, 2).map((image, index) => (
          <div key={image.id}>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            >
              <img src={image.url} className="img-fluid" />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="grid-column">
        {gallery1.slice(2, 4).map((image, index) => (
          <div key={image.id}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <img src={image.url} className="img-fluid" />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="grid-column">
        {gallery1.slice(4, 7).map((image, index) => (
          <div key={image.id}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <img src={image.url} className="img-fluid" />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="grid-column">
        {gallery1.slice(7, 9).map((image, index) => (
          <div key={image.id}>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <img src={image.url} className="img-fluid" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery1;
{
  gallery1;
}
