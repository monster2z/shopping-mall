import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Product } from '@/data/products';

async function getProduct(id: string): Promise<Product | null> {
  // 서버 컴포넌트에서 데이터 패칭
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">
        ← 상품 목록으로 돌아가기
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="relative h-96 w-full">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        
        <div>
          <span className="text-gray-500">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mt-4">
            {product.price.toLocaleString()}원
          </p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold">상품 설명</h2>
            <p className="mt-2 text-gray-700">{product.description}</p>
          </div>
          
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full">
            장바구니에 추가
          </button>
        </div>
      </div>
    </div>
  );
}