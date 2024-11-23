import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-6xl font-medium leading-tight mb-6">
              Excellence in Every Detail
            </h1>
            <p className="text-xl text-navy-100 mb-8 font-light">
              Crafting exceptional experiences with precision and sophistication. Discover how we can elevate your vision to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-secondary bg-white text-navy-800 hover:bg-navy-50">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-navy-700/30 backdrop-blur-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80"
                alt="Elegant design showcase"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-navy-600/20 backdrop-blur-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-navy-600/20 backdrop-blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}