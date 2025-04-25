import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, Search, User, ShoppingCart, Heart } from 'lucide-react';

export default function NariBazaarLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer" />
          <img src="/logo.png" alt="NariBazaar Logo" className="h-10" />
        </div>
        <div className="w-full max-w-xl mx-auto">
          <div className="relative">
            <Input placeholder="Search product" className="pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <User className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
        </div>
      </header>

      {/* Body Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r p-4 space-y-3 hidden lg:block">
          {[
            'Traditional Wear', 'Western Wear', 'Swim & Beachwear',
            'Winter Wear', 'Beauty & Grooming', 'Jewellery',
            'Appliances', 'International Brands', 'Foot Wear',
            'Watches', 'Accessories'
          ].map((category, idx) => (
            <Button variant="ghost" className="w-full justify-start" key={idx}>{category}</Button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Banner Section */}
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow">
            <h2 className="text-xl font-semibold">Biggest Offer Revealed</h2>
            <p className="text-3xl font-bold mt-2">MORE DEALS INSIDE UP TO 50% OFF</p>
          </div>

          {/* Deals of the Day */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Deals of the Day</h3>
              <span className="text-red-500 font-bold">20 : 45 : 12 Left</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <img src="/product.png" alt="Product" className="w-full h-32 object-contain mb-2" />
                    <p className="font-medium">Sample Product</p>
                    <p className="text-sm text-gray-500">₹4500 <span className="line-through ml-2">₹7300</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-4 space-y-6 hidden xl:block">
          <div>
            <h4 className="font-semibold mb-2">Recently Viewed</h4>
            <img src="/bag.png" alt="Recently Viewed" className="rounded-xl w-full" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Suggestions for You</h4>
            <img src="/backpack.png" alt="Suggested Product" className="rounded-xl w-full" />
          </div>
        </aside>
      </div>
    </div>
  );
}
