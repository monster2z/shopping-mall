import ProductList from '@/components/ProductList';

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">상품 목록</h1>
      <ProductList />
    </div>
  );
}