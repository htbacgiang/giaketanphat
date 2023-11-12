import Image from "next/image"
import Link from "next/link"
import logoImg from "@/public/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-start text-dark">
        <div className="logo rounded-full overflow-hiden">
            <Image src={logoImg} alt="logo tân phát express chuyển hàng trọn gói" className="w-full h-auto rounded-full "/>
        </div>
    </Link>
  )
}

export default Logo