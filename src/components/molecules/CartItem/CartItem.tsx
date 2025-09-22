'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/lib/slices/cartSlice';
import { updateQuantity, removeFromCart } from '@/lib/slices/cartSlice';
import { useAppDispatch } from '@/lib/hooks/redux';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          className="rounded-md object-contain bg-gray-50 p-2"
        />
      </div>
      
      <div className="flex-1 space-y-2">
        <Typography variant="h4" className="line-clamp-2">
          {item.title}
        </Typography>
        
        <Typography variant="caption">
          {item.category}
        </Typography>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-8 h-8 p-0"
            >
              <Minus className="w-3 h-3" />
            </Button>
            
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-8 h-8 p-0"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Typography variant="h4" className="text-blue-600">
              {formatPrice(item.price * item.quantity)}
            </Typography>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;