// src/components/AddToCartButton.tsx
'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { dispatch } = useCart();
  
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product
    });
    
    alert(`${product.name}이(가) 장바구니에 추가되었습니다.`);
  };
  
  return (
    <button 
      onClick={handleAddToCart}
      className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
    >
      장바구니에 추가
    </button>
  );
}