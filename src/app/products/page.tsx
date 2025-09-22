import ProductGrid from '@/components/organisms/ProductGrid/ProductGrid';
import Typography from '@/components/atoms/Typography/Typography';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Typography variant="h1" className="text-gray-900 mb-4">
          Our Products
        </Typography>
        <Typography variant="body" className="text-gray-600 max-w-2xl">
          Discover our carefully curated collection of high-quality products across multiple categories.
        </Typography>
      </div>
      
      <ProductGrid />
    </div>
  );
}