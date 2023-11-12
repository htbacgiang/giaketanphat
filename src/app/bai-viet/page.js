import React from 'react'
import Blogs from '@/src/components/Blog/Blog'

export const metadata = {
    title: "Bài viết - Giá kệ Tân Phát",
    description:  "Bài viết về giá kệ siêu thị"
}

const page = () => {
  return (
    <>
      <Blogs className="pt-0 pb-52 mt-3" itemsPerPage={4} />
    </>
    )
}

export default page