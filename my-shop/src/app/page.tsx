import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold">내 쇼핑몰</h1>
    <p className="text-xl">Next.js로 만든 쇼핑몰에 오신 것을 환영합니다!</p>
    <a href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      상품 보기
    </a>
  </main>
  );
}
