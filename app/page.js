'use client';

import '../styles/styles.css';  // ✅ Must come after 'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Top Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-2xl font-bold text-pink-600">NariBazaar</div>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login" className="text-pink-600">Login</Link>
          </nav>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="bg-pink-50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
            >
              <div>
                <img src="/carousel1.jpg" alt="Ad 1" className="w-full h-72 object-cover" />
              </div>
              <div>
                <img src="/carousel2.jpg" alt="Ad 2" className="w-full h-72 object-cover" />
              </div>
              <div>
                <img src="/carousel3.jpg" alt="Ad 3" className="w-full h-72 object-cover" />
              </div>
            </Carousel>
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to NariBazaar!</h1>
            <p className="text-lg text-gray-600 mt-2">Empowering women entrepreneurs 🌸</p>
          </div>
        </div>
      </section>

      {/* Info Tiles */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center border p-4 rounded-xl shadow hover:shadow-md">
            <p className="font-semibold">Easy Seller Registration</p>
            <p className="text-sm text-gray-600 mt-2">Simple onboarding process for women-led brands.</p>
          </div>
          <div className="text-center border p-4 rounded-xl shadow hover:shadow-md">
            <p className="font-semibold">Free Listing</p>
            <p className="text-sm text-gray-600 mt-2">List up to 10 products for free.</p>
          </div>
          <div className="text-center border p-4 rounded-xl shadow hover:shadow-md">
            <p className="font-semibold">Pan India Reach</p>
            <p className="text-sm text-gray-600 mt-2">Sell across India, easily filter by city or state.</p>
          </div>
          <div className="text-center border p-4 rounded-xl shadow hover:shadow-md">
            <p className="font-semibold">Seller Support</p>
            <p className="text-sm text-gray-600 mt-2">Assistance from Karishma Care Foundation</p>
          </div>
        </div>
      </section>

      {/* Highlight Tiles */}
      <section className="bg-pink-50 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-lg font-bold text-pink-600">Meet Our Sellers</p>
            <p className="text-sm text-gray-600 mt-1">Stories of inspiring women behind the brands.</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-lg font-bold text-pink-600">Top Rated Products</p>
            <p className="text-sm text-gray-600 mt-1">Handpicked based on buyer reviews & likes.</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-lg font-bold text-pink-600">Special Discount Bundles</p>
            <p className="text-sm text-gray-600 mt-1">Festival and limited-time offers for buyers.</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-lg font-bold text-pink-600">Real Testimonials</p>
            <p className="text-sm text-gray-600 mt-1">Hear from women who’ve grown with NariBazaar.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
