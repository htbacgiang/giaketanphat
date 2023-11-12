import {allBlogs} from "contentlayer/generated";
import RecentPosts from "../components/Home/RecentPosts";
import Banner from "../components/Banner";
import FacebookMsg from "../components/FacebookMsg";
export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <Banner />
      <RecentPosts blogs={allBlogs} />
      <FacebookMsg />
    </main>
  )
}