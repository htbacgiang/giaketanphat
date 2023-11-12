import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineMail
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <section className="footer text-white bg-[green]">

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4 sm:text-center">
        <ul className="px-5 sm:text-start flex sm:block flex-col items-center">
          <Image
            src={logo}
            alt=""
            style={{ filter: "brightness(0) invert(1)", width: "145px"}}
          />
          <br />
          <p>Theo dõi chúng tôi tại</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
             <AiOutlineMail
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Về Giá kệ Tân Phát</h1>
            <li><Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href="/">
               Giới thiệu về công ty</Link></li>
               <li><Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href="/">
               Hồ sơ năng lực</Link></li>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Hỗ trợ khách hàng</h1>
            <li>
              <Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"href="/">
              Hướng dẫn cài đặt và thanh toán
              </Link></li>
              <li>
              <Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"href="/">
              Chính sách đổi trả
              </Link></li>
              <li>
              <Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"href="/">
              Chính sách giao hàng
              </Link></li>
              <li>
              <Link className=" hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"href="/">
              Chính sách thẻ hội viên
              </Link></li>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Tin tức</h1>
            <li> <Link className=" hover:text-teal-400 duration-300text-sm cursor-pointer leading-6"href="/">
               FAQ
              </Link></li>
        </ul>
      
      </div>

      <div
      >
 <footer className='py-2 pb-5'>
      </footer>
      </div>
    </section>
  );
};

export default Footer;
