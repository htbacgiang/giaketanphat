import InsightRoll from "@/src/components/Blog/InsightRoll";


const insights = [
  "Nếu bạn có nhu cầu lắp đặt kệ siêu thị, kệ tạp hoá, kệ siêu thị sữa, kệ kho hàng...",
  "Đừng ngại nhấc máy lên gọi vào số hotline 0866.57.2271 ",
  "Giá kệ siêu thị Tân Phát - địa chỉ Thị trấn Phùng, huyện Đan Phượng, tp Hà Nội",
];
export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}