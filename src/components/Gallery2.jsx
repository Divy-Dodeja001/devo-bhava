// const images = [
//   { src: "/public/gallery2_1.jpg", direction: "left" },
//   { src: "/public/gallery2_2.jpg", direction: "right" },
//   { src: "/public/gallery2_3.jpg", direction: "center" },
//   { src: "/public/gallery2_4.jpg", direction: "left" },
//   { src: "/public/gallery2_5.jpg", direction: "right" },
// ];

// const variants = {
//   hiddenLeft: { opacity: 0, x: -100 },
//   hiddenRight: { opacity: 0, x: 100 },
//   hiddenCenter: { opacity: 0, y: -50 },
//   visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
// };

// const Gallery2 = () => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });
  
//     return (
//       <motion.div
//         ref={ref}
//         initial={
//           direction === "left"
//             ? "hiddenLeft"
//             : direction === "right"
//             ? "hiddenRight"
//             : "hiddenCenter"
//         }
//         animate={isInView ? "visible" : undefined}
//         variants={variants}
//         className="absolute"
//       >
//         <Image src={src} alt="Gallery" width={400} height={400} />
//       </motion.div>
//     );
//   };
  
//   export default function GalleryGrid() {
//     return (
//       <div className="relative flex flex-col items-center justify-center h-[150vh]">
//         <div className="relative w-full h-[600px] flex items-center justify-center">
//           <GalleryImage src={images[0].src} direction={images[0].direction} />
//           <GalleryImage src={images[1].src} direction={images[1].direction} />
//           <GalleryImage src={images[2].src} direction={images[2].direction} />
//           <GalleryImage src={images[3].src} direction={images[3].direction} />
//           <GalleryImage src={images[4].src} direction={images[4].direction} />
//         </div>
//       </div>
//     );
//   }};

// export default Gallery2;
