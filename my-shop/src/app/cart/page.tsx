// src/app/cart/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { state, dispatch } = useCart();
  
  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id }
    });
  };
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };
  
  if (state.items.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">장바구니</h1>
        <p className="mb-4">장바구니가 비어있습니다.</p>
        <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          쇼핑 계속하기
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {state.items.map(item => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <div className="relative h-20 w-20 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.price.toLocaleString()}원</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-3 py-1 rounded-l"
              >
                -
              </button>
              <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
              <button 
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
            <div className="ml-6 w-24 text-right font-semibold">
              {(item.price * item.quantity).toLocaleString()}원
            </div>
            <button 
              onClick={() => handleRemoveItem(item.id)}
              className="ml-4 text-red-500"
            >
              삭제
            </button>
          </div>
        ))}
        
        <div className="flex justify-end mt-6">
          <div className="text-xl font-bold">
            총 금액: {state.total.toLocaleString()}원
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <Link href="/products" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            쇼핑 계속하기
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}