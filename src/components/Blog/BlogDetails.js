import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
     {blog.title}
      
    </div>
  );
};

export default BlogDetails;