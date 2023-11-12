"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiHardHat,BiCertification, BiSolidGift,BiSolidTruck } from "react-icons/bi";
import Image from "next/image";

const WhyUsContent = {
  heading: {
    title: "Tại sao nên chọn giá kệ siêu thị tại Tân Phát",
  },
  WhyUsItems: [
    {
      icon: BiHardHat,
      title: "Sản phẩm đáp ứng tiêu chuẩn Châu Âu",
      description:
        "Một trong những điểm mạnh của Tân Phát là họ cung cấp các sản phẩm giá kệ siêu thị theo tiêu chuẩn Châu Âu.",
    },
    {
      icon: BiSolidGift,
      title: "Giá thành hợp lý",
      description:
        "Tân Phát cam kết cung cấp giá kệ siêu thị với mức giá hợp lý, giúp bạn tiết kiệm chi phí đầu tư cho cửa hàng hoặc siêu thị của mìn",
    },
    {
      icon: BiCertification,
      title: "Sự đa dạng trong sản phẩm",
      description:
        "Tân Phát có sẵn nhiều loại giá kệ khác nhau để đáp ứng nhu cầu của mọi loại hình kinh doanh và không gian cửa hàng. Bạn có thể tìm thấy giá kệ siêu thị, giá kệ kho, giá kệ trưng bày sản phẩm, và nhiều sản phẩm khác.",
    },
    {
      icon: BiSolidTruck,
      title: "Hỗ trợ vận chuyển và lắp đặt tận nhà",
      description:
        " Mua sắm giá kệ không chỉ là về việc chọn sản phẩm mà còn liên quan đến việc vận chuyển và lắp đặt chúng một cách hiệu quả. Tân Phát hiểu điều này và cung cấp dịch vụ vận chuyển và lắp đặt tận nhà, kể cả khi bạn chỉ cần một bộ. ",
    },
  ],
};

const WhyUs = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-10 lg:mb-20">
          {WhyUsContent.heading.subTitle && (
            <motion.span
              inherit={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="uppercase tracl-[3px] text-[12.5px] mb-5 inline-block text-gray-500 text-dark dark:text-light"
            >
              {WhyUsContent.heading.subTitle}
            </motion.span>
          )}
          {WhyUsContent.heading.title && (
            <motion.h2
              inherit={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl text-[red] dark:text-light font-bold uppercase"
            >
              {WhyUsContent.heading.title}
            </motion.h2>
          )}
        </div>
        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-start">
            <div className="mb-2 lg:mb-0 lg:w-6/12 lg:order-2">
              <motion.div 
              inherit={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: img1 }}>
                <Image
                  src="/images/img-square-2-min.jpg"
                  className="object-cover !w-full lg:max-w-2xl object-center"
                  width={400}
                  height={300}
                  alt="Image"
                />
              </motion.div>
            </div>
            <div className="lg:w-6/12">
              <motion.ul 
               inherit={{ opacity: 0, y: 10 }}
               whileInView={{
                 opacity: 1,
                 y: 0,
                 transition: {
                   delay: 0.6,
                   duration: 0.5,
                 },
               }}
               viewport={{ once: true }}
              className="list-none">
                {WhyUsContent.WhyUsItems.map((item, idx) => (
                  <li
                    className="flex space-x-4 items-start mb-3"
                    key={item.title}
                  >
                    <span className="text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-[#FB2576]">
                      {<item.icon className="z-20 relative text-white" />}
                    </span>
                    <div>
                      <h3 className="text-gray-800 text-base text-dark dark:text-light font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-dark dark:text-light"> {item.description}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
