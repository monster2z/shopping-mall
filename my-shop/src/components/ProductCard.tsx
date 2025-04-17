import { Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-lg font-bold mt-2">{product.price.toLocaleString()}원</p>
        <Link 
          href={`/products/${product.id}`}
          className="mt-3 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          상세 보기
        </Link>
      </div>
    </div>
  );
}