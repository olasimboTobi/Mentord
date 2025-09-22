'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/redux';
import { toggleCart } from '@/lib/slices/cartSlice';
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import Badge from '@/components/atoms/Badge/Badge';
import { ShoppingCart, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Package className="w-8 h-8 text-blue-600" />
            <Typography variant="h3" className="text-gray-900">
              ShopHub
            </Typography>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-4'
                    : 'text-gray-600'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge
                    variant="error"
                    size="sm"
                    className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center p-0"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center space-x-8 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-600'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;