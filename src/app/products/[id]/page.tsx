'use client';

import { useGetProductQuery } from '@/lib/api/fakeStoreApi';
import { addToCart } from '@/lib/slices/cartSlice';
import { useAppDispatch } from '@/lib/hooks/redux';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import Badge from '@/components/atoms/Badge/Badge';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id);
  const { data: product, error, isLoading } = useGetProductQuery(productId);
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!product) return;
    
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

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-square bg-gray-200 rounded-lg" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-1/3" />
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-32 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Typography variant="h2" className="text-red-600 mb-4">
          Product not found
        </Typography>
        <Link href="/products">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const categoryColors = {
    electronics: 'bg-blue-100 text-blue-800',
    jewelery: 'bg-purple-100 text-purple-800',
    "men's clothing": 'bg-green-100 text-green-800',
    "women's clothing": 'bg-pink-100 text-pink-800',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/products">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <Badge
              className={categoryColors[product.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}
            >
              {product.category}
            </Badge>
          </div>

          <Typography variant="h1" className="text-gray-900">
            {product.title}
          </Typography>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating.rate}</span>
            </div>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>

          <Typography variant="h2" className="text-blue-600">
            {formatPrice(product.price)}
          </Typography>

          <div>
            <Typography variant="h3" className="text-gray-900 mb-2">
              Description
            </Typography>
            <Typography variant="body" className="text-gray-600 leading-relaxed">
              {product.description}
            </Typography>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleAddToCart}
              loading={isAdding}
              className="flex-1 sm:flex-none"
            >
              {!isAdding && <ShoppingCart className="w-5 h-5 mr-2" />}
              {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
            </Button>
            
            <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}