'use client';

import useSWR from 'swr';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductList() {
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  if (isLoading) return <div className="text-center py-10">로딩 중...</div>;
  if (error) return <div className="text-center py-10 text-red-500">상품을 불러오는데 실패했습니다.</div>;
  if (!data) return <div className="text-center py-10">상품이 없습니다.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}