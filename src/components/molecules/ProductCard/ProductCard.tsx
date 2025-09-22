'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/api/fakeStoreApi';
import { addToCart } from '@/lib/slices/cartSlice';
import { useAppDispatch } from '@/lib/hooks/redux';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import Badge from '@/components/atoms/Badge/Badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    dispatch(addToCart(product));
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const categoryColors = {
    electronics: 'bg-blue-100 text-blue-800',
    jewelery: 'bg-purple-100 text-purple-800',
    "men's clothing": 'bg-green-100 text-green-800',
    "women's clothing": 'bg-pink-100 text-pink-800',
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
        <div className="aspect-square relative bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge
            className={`absolute top-3 left-3 ${categoryColors[product.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}
            size="sm"
          >
            {product.category}
          </Badge>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating.rate}</span>
            <span>({product.rating.count})</span>
          </div>
          
          <Typography variant="h4" className="text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.title}
          </Typography>
          
          <div className="flex items-center justify-between">
            <Typography variant="h3" className="text-blue-600">
              {formatPrice(product.price)}
            </Typography>
            
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              loading={isAdding}
              className="flex items-center gap-1.5"
            >
              {!isAdding && <ShoppingCart className="w-4 h-4" />}
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;