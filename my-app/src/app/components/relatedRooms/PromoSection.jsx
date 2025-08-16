"use client";
import Image from "next/image";

export default function PromoSection() {
  return (
    <section className="bg-white pt-20 pb-15">
      <div className="grid md:grid-cols-2 items-center max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/v-hotel-new1.jpg" // apni image path lagao public folder me
            alt="Relaxing by the pool"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-black text-white px-8 py-12 relative">
          {/* Paint Stroke */}
          {/* <div className="absolute top-6 right-6 w-24 h-12">
            <Image
              src="/images/promo.jpg" // ek turquoise paint stroke png use karo
              alt="paint stroke"
              fill
              className="object-contain"
            />
          </div> */}

          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-6">
            TRAVEL LIKE NO <br /> ONE’S WATCHING
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            At The Grand Shoba hotels, we see our name as a rallying cry—a calling to
            provide space for those looking to find and express themselves. We
            empower unapologetic self-expression, inspiring guests to move,
            indulge, play, and be like no one’s watching.
          </p>

          {/* Logo */}
          <p className="text-3xl italic font-light tracking-widest">The Grand Shoba</p>
        </div>
      </div>
    </section>
  );
}
