# ShopHub - Advanced Product Catalog Web App

A modern, responsive e-commerce product catalog built with Next.js, React, TypeScript, and Redux Toolkit. Features a clean atomic design architecture and seamless shopping experience.

## 🚀 Features

### Core Functionality
- **Homepage**: Compelling hero section with navigation and feature highlights
- **Product Catalog**: Grid layout with real-time data from Fake Store API
- **Product Details**: Comprehensive individual product pages
- **Shopping Cart**: Full cart management with Redux state persistence
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Advanced Features
- **State Management**: Redux Toolkit with RTK Query for API calls
- **Atomic Design**: Clean component architecture following atomic design principles
- **Loading States**: Skeleton loading for better UX
- **Error Handling**: Graceful error states and user feedback
- **Micro-interactions**: Smooth animations and hover effects
- **Persistent Cart**: Cart state maintained across page refreshes

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + RTK Query
- **Icons**: Lucide React
- **API**: Fake Store API
- **Deployment**: Vercel-ready

## 📁 Project Structure (Atomic Design)

```
components/
├── atoms/           # Basic building blocks
│   ├── Button/
│   ├── Typography/
│   └── Badge/
├── molecules/       # Simple component combinations
│   ├── ProductCard/
│   └── CartItem/
├── organisms/       # Complex component groups
│   ├── Navigation/
│   ├── ProductGrid/
│   └── Hero/
└── providers/       # Context providers
    └── ReduxProvider/

lib/
├── store.ts         # Redux store configuration
├── api/             # RTK Query API slices
├── slices/          # Redux slices
└── hooks/           # Custom hooks

app/                 # Next.js App Router pages
├── page.tsx         # Homepage
├── products/        # Products pages
└── cart/            # Shopping cart
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-catalog-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Key Implementation Decisions

### State Management
- **Redux Toolkit**: Chosen for predictable state management and excellent DevTools
- **RTK Query**: Integrated for efficient API data fetching and caching
- **Persistent Cart**: Cart state survives page refreshes for better UX

### Architecture
- **Atomic Design**: Ensures scalable and maintainable component structure
- **TypeScript**: Provides type safety and better developer experience
- **Modular Structure**: Each component has its own folder with clear responsibilities

### Performance Optimizations
- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic with Next.js App Router
- **API Caching**: RTK Query handles intelligent caching and background updates

## 🌟 Features in Detail

### Homepage
- Hero section with compelling value proposition
- Feature highlights with icons and descriptions
- Statistics section showing credibility metrics
- Call-to-action directing users to product catalog

### Product Catalog
- Responsive grid layout (1-4 columns based on screen size)
- Product cards with images, ratings, prices, and quick add-to-cart
- Loading skeletons for smooth user experience
- Category badges for easy product identification

### Product Details
- Full-screen product images
- Comprehensive product information
- Customer ratings and review counts
- Add to cart and buy now functionality
- Breadcrumb navigation

### Shopping Cart
- Complete cart management (add, remove, update quantities)
- Real-time price calculations including tax
- Order summary with itemized costs
- Empty cart state with call-to-action
- Clear cart functionality with confirmation

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for smaller screens
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px
- **Touch-friendly**: Appropriate button sizes and spacing for mobile

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Trust and professionalism
- **Secondary**: Emerald (#10B981) - Success and positive actions
- **Accent**: Amber (#F59E0B) - Call attention and warnings
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter - Clean, readable, and modern
- **Hierarchy**: Clear heading structure (h1-h4)
- **Line Heights**: Optimized for readability (120-150%)

## 🔄 State Management Flow

### Cart Operations
1. **Add to Cart**: Dispatches `addToCart` action with product data
2. **Update Quantity**: Uses `updateQuantity` for increment/decrement
3. **Remove Item**: `removeFromCart` removes item completely
4. **Calculate Total**: Automatically recalculated on each cart modification

### API Data Flow
1. **Products**: Fetched via RTK Query on products page load
2. **Product Details**: Individual product fetched by ID
3. **Caching**: RTK Query handles automatic caching and invalidation

## 🚀 Deployment

The application is optimized for Vercel deployment:

```bash
npm run build
```

Deploy to Vercel by connecting your GitHub repository or using the Vercel CLI.


## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
