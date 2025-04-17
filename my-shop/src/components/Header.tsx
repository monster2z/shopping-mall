// src/components/Header.tsx
import Link from 'next/link';
import CartStatus from './CartStatus';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">내 쇼핑몰</Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">홈</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">상품</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">소개</Link></li>
            </ul>
          </nav>
          <CartStatus />
        </div>
      </div>
    </header>
  );
}