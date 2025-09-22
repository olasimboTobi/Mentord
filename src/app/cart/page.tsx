'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks/redux';
import { clearCart } from '@/lib/slices/cartSlice';
import CartItem from '@/components/molecules/CartItem/CartItem';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import Link from 'next/link';
import { ShoppingBag, Trash2 } from 'lucide-react';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <Typography variant="h2" className="text-gray-900 mb-4">
          Your cart is empty
        </Typography>
        <Typography variant="body" className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you have not added anything to your cart yet. Start shopping to fill it up!
        </Typography>
        <Link href="/products">
          <Button size="lg">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h1" className="text-gray-900">
          Shopping Cart ({items.length} item{items.length !== 1 ? 's' : ''})
        </Typography>
        
        <Button
          variant="outline"
          onClick={handleClearCart}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <Typography variant="h3" className="text-gray-900 mb-4">
              Order Summary
            </Typography>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(total * 0.08)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <Typography variant="h4" className="text-gray-900">
                    Total
                  </Typography>
                  <Typography variant="h4" className="text-blue-600">
                    {formatPrice(total * 1.08)}
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}