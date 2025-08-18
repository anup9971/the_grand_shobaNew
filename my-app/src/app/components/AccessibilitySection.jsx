"use client";
import React from "react";

export default function AccessibilitySection() {
  return (
    <section className="bg-black text-black py-16 flex justify-center">
      <div className="relative bg-[url('/images/paper-texture.png')] bg-cover bg-center rounded-lg max-w-4xl w-full shadow-lg overflow-hidden">
        
        {/* White overlay to make text readable */}
        <div className="absolute inset-0 bg-white/85"></div>
        
        {/* Content */}
        <div className="relative text-center px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-black mb-4">
            Accessibility at Our Hotel
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed mb-8">
            We are committed to providing equal access and opportunity for
            individuals with disabilities. The features also make this hotel more
            accessible for older individuals with changing abilities to ensure a
            seamless experience. Our overall goal is to improve usability
            throughout the hotel for all guests.
          </p>
          <button className="border border-black px-6 py-2 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition">
            VIEW ACCESSIBILITY FEATURES
          </button>
        </div>
      </div>
    </section>
  );
}
