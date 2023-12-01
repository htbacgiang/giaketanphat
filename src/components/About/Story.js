// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import img1 from "../../../public/images/img-square-1-min.jpg";
// import img2 from "../../../public/images/img-square-2-min.jpg";
// import img3 from "../../../public/images/img-square-3-min.jpg";
// import img4 from "../../../public/images/img-square-4-min.jpg";
// import img5 from "../../../public/images/img-square-5-min.jpg";

// import post1 from "../../../public/images/post-1-min.jpg";
// import post2 from "../../../public/images/post-2-min.jpg";

// const storyContent = {
//   column1: {
//     imgs: [
//       {
//         img: img5,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//       {
//         img: img1,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//     ],
//   },
//   column2: {
//     imgs: [
//       {
//         img: img2,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//       {
//         img: post2,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//       {
//         img: img4,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//     ],
//   },
//   column3: {
//     imgs: [
//       {
//         img: post1,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//       {
//         img: img3,
//         alt: "",
//         width: 1188,
//         height: 1413,
//         tailwindClass: "h-56 lg:h-96",
//       },
//     ],
//   },
//   storyText: {
//     heading: "Chất lượng và Uy tín hàng đầu trong lĩnh vực giải pháp kệ hàng ",
//     p1: "Giá kệ siêu thị Tân Phát, với gần một thập kỷ hoạt động trong ngành cung cấp giải pháp kệ hàng, đã nhanh chóng trở thành một trong những tên tuổi uy tín và đáng tin cậy tại Việt Nam. Thành lập vào năm 2015, Tân Phát đã ghi dấu ấn mạnh mẽ bằng sự cam kết về chất lượng, dịch vụ chuyên nghiệp, và sự đa dạng trong sản phẩm.",
//     p2: "Với sự cam kết về chất lượng, dịch vụ chuyên nghiệp, và khách hàng trải khắp cả Bắc Việt Nam, Tân Phát là lựa chọn hàng đầu cho mọi doanh nghiệp cần giải pháp kệ hàng. Hãy để chúng tôi hỗ trợ bạn xây dựng không gian kinh doanh hoàn hảo và tối ưu hóa hiệu suất kinh doanh của bạn.",
//     p3: "Tân Phát cam kết cung cấp giá kệ siêu thị và giải pháp kệ hàng tuân theo các tiêu chuẩn chất lượng cao nhất, bao gồm tiêu chuẩn Châu Âu. Sản phẩm của chúng tôi không chỉ đáp ứng mà còn vượt qua các yêu cầu khắt khe về độ bền, an toàn và thiết kế hiện đại. Điều này đảm bảo rằng bạn đang đầu tư vào những sản phẩm có khả năng phục vụ lâu dài và giúp bạn nâng cao trải nghiệm mua sắm của khách hàng."
//   },
// };


// const Story = ({ className }) => {
//   return (
//     <section className={`${className}`}>
//       <div className="container px-4 mx-auto">
//         {/* <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7">
//           <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
//             {storyContent.column1.imgs.map((item, idx) => {
//               idx *= 0.5;
//               return (
//                 <motion.div
//                   inherit={{ opacity: 0, y: 20 }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                     transition: {
//                       delay: idx,
//                       duration: 0.5,
//                     },
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   <Image
//                     src={item.img}
//                     width={item.width}
//                     height={item.height}
//                     alt={item.alt}
//                     className={`${
//                       item.tailwindClass ? item.tailwindClass : ""
//                     } !max-w-full object-cover object-center`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//           <div className="md:w-4/12 space-y-7 mb-7 md:mb-0">
//             {storyContent.column2.imgs.map((item, idx) => {
//               idx *= 0.5;
//               return (
//                 <motion.div
//                   inherit={{ opacity: 0, y: 20 }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                     transition: {
//                       delay: idx,
//                       duration: 0.5,
//                     },
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   <Image
//                     src={item.img}
//                     width={item.width}
//                     height={item.height}
//                     alt={item.alt}
//                     className={`${
//                       item.tailwindClass ? item.tailwindClass : ""
//                     } !max-w-full object-cover object-center`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//           <div className="md:w-4/12 self-center space-y-7">
//             {storyContent.column3.imgs.map((item, idx) => {
//               idx *= 0.5;
//               return (
//                 <motion.div
//                   inherit={{ opacity: 0, y: 20 }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                     transition: {
//                       delay: idx,
//                       duration: 0.5,
//                     },
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   <Image
//                     src={item.img}
//                     width={item.width}
//                     height={item.height}
//                     alt={item.alt}
//                     className={`${
//                       item.tailwindClass ? item.tailwindClass : ""
//                     } !max-w-full object-cover object-center`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div> */}
//         <motion.div 
//         inherit={{ opacity: 0, y: 20 }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//           transition: {
//             delay: 0.8,
//             duration: 0.5,
//           },
//         }}
//         viewport={{ once: true }}
//         className="lg:flex flex-col mt-5 text-left w-full lg:w-6/12 mx-auto ">
//         {storyContent.storyText.heading && (
//             <h2 className="text-center uppercase font-bold text-[#ff5e00fb] text-2xl md:text-3xl text-gray-800 mb-5 dark:text-light">
//             {storyContent.storyText.heading}
//             </h2>
//         )}
//          {storyContent.storyText.p1 && (
//             <h2 className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-light">
//             {storyContent.storyText.p1}
//             </h2>
//         )}
//          {storyContent.storyText.p2 && (
//             <h2 className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-light">
//             {storyContent.storyText.p2}
//             </h2>
//         )}
//         {storyContent.storyText.p3 && (
//             <h2 className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-light">
//             {storyContent.storyText.p3}
//             </h2>
//         )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Story;
