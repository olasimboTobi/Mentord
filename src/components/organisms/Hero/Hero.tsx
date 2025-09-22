import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import { ArrowRight, Package, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Typography 
            variant="h1" 
            className="text-gray-900 mb-6 max-w-4xl mx-auto"
          >
            Discover Amazing Products at 
            <span className="text-blue-600"> Unbeatable Prices</span>
          </Typography>
          
          <Typography 
            variant="body" 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Explore our curated collection of electronics, fashion, jewelry, and more. 
            Quality products, competitive prices, and fast shipping guaranteed.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/products">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <Typography variant="h4" className="text-gray-900 mb-2">
                Quality Products
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Carefully selected items from trusted brands and manufacturers
              </Typography>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <Typography variant="h4" className="text-gray-900 mb-2">
                Secure Shopping
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Your privacy and security are our top priority
              </Typography>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <Typography variant="h4" className="text-gray-900 mb-2">
                Fast Delivery
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Quick and reliable shipping to your doorstep
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;