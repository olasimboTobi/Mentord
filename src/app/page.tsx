import Hero from '@/components/organisms/Hero/Hero';
import Typography from '@/components/atoms/Typography/Typography';
import Link from 'next/link';
import Button from '@/components/atoms/Button/Button';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center text-blue-600 mb-2">
                <Star className="w-8 h-8" />
              </div>
              <Typography variant="h2" className="text-gray-900">
                4.8/5
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Customer Rating
              </Typography>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-green-600 mb-2">
                <Users className="w-8 h-8" />
              </div>
              <Typography variant="h2" className="text-gray-900">
                50K+
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Happy Customers
              </Typography>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-purple-600 mb-2">
                <Award className="w-8 h-8" />
              </div>
              <Typography variant="h2" className="text-gray-900">
                1000+
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Products Available
              </Typography>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-white mb-4">
            Ready to Start Shopping?
          </Typography>
          <Typography variant="body" className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Explore our extensive collection of products and find exactly what you are looking for.
          </Typography>
          <Link href="/products">
            <Button variant="secondary" size="lg" className="group">
              Browse Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}