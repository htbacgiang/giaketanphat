"use client"
import Link from "next/link";
import Logo from "./logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon, Phone } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between ">
        <Logo />
        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-1 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px]">Trang chủ</Link>
            <Link href="/gioi-thieu" className="mx-1 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px]">Giới thiệu</Link>
            <Link href="/san-pham" className="mx-1 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px]">Sản phẩm</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-1 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px] ">Trang chủ</Link>
            <Link href="/gioi-thieu" className="mx-2 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px]">Giới thiệu</Link>
            <Link href="/san-pham" className="mx-2 relative before:content-[''] 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 
                before:origin-[100%, 50%] before:transition-all 
                before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] 
                before:will-change-transform hover:before:origin-[100%,0%]
                hover:before:scale-x-[1] hover:before:scale-y-[1] 
                hover:before:scale-z-[1] pb-[1px]">Sản phẩm</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        <div className=" hidden sm:flex items-center">
            <a href={siteMetadata.facebook} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a className="inline-block w-6 h-6 mr-2" aria-label="Check my profile on Dribbble" target="_blank"><Phone className="hover:scale-125 transition-all ease duration-200" /></a>
            <div
                className="relative cursor-pointer contact text-xl text-[#ff5e00fb] dark:text-light font-bold "
              >
                <p>0866.572.271</p>
              </div>
        </div>
    </header>
  )
}

export default Header;