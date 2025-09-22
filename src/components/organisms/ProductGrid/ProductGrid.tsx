'use client';

import { useGetProductsQuery } from '@/lib/api/fakeStoreApi';
import ProductCard from '@/components/molecules/ProductCard/ProductCard';
import Typography from '@/components/atoms/Typography/Typography';

const ProductGrid: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded w-20" />
                <div className="h-8 bg-gray-200 rounded w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <Typography variant="h3" className="text-red-600 mb-2">
          Error loading products
        </Typography>
        <Typography variant="body" className="text-gray-600">
          Please try again later
        </Typography>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <Typography variant="h3" className="text-gray-600 mb-2">
          No products found
        </Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;