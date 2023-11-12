"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((blog, index) => {
          index *= 0.05;
          return (
            <motion.div
              className="bg-white relative overflow-hidden group"
              inherit={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index,
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              key={blog.title}
            >
              <Link href={blog.url} className="relative block overflow-hidden">
                <Image
                  src={blog.image.filePath.replace("../public", "")}
                  placeholder="blur"
                  blurDataURL={blog.image.blurhashDataUrl}
                  alt={blog.title}
                  width={blog.image.width}
                  height={blog.image.height}
                  className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
                  sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className="flex flex-col w-full pl-2 pr-2 mb-2">
                <Link href={blog.url} className="inline-block my-1">
                  <h2 className="font-semibold capitalize text-base ">
                    <span
                      className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                    >
                      {blog.title}
                    </span>
                  </h2>
                </Link>
                <p>
             
                  <Link
                    href={blog.url}
                    className="text-[12px] tracking-[2px] uppercase text-[red]"
                  >
                    Đọc thêm
                  </Link>
                </p>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

const Blogs = ({ className, archive = false, params }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);
  const ref = useRef(null);
  const itemsPerPage = 4;
  let items = null;
  if (archive === false) {
    items = allBlogs.sort((a, b) =>
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
  } else {
    if (params?.slug) {
      items = allBlogs.filter((blog) =>
        blog.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/^-+|-+$/g, "") === params.slug
        )
      );
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    if (clickPaginate === true) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 300);
      setClickPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clickPaginate, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto pt-3 ">
        <div className="lg:w-11/12 mx-auto mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Items currentItems={currentItems} />
        </div>

        <div className="lg:w-11/12 mx-auto flex flex-wrap justify-items-center">
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPageDisplayed={2}
            pageCount={pageCount}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};
export default Blogs;
