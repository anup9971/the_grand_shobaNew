import Image from "next/image";

export default function PetsWelcome() {
  return (
    <section className="py-16 bg-white">







      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-serif mb-4 border-b border-gray-300 pb-2">
            Pets Are Welcome
          </h2>
          <p className="text-gray-700 mb-6">
            We gladly welcome your most cherished travel companions, whether they be dogs or cats.
            Inform us that you will be bringing your pet (or pets) with you at least three days prior 
            to your arrival. Necessities including a bed, food bowl and food will be provided for 
            your pet during your stay with us.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Fees</h3>
              <p><span className="font-medium">Price:</span> ₹2,500 / Stay</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Weight Limits</h3>
              <p><span className="font-medium">Individual pet weight limit:</span> 22 kilograms</p>
              <p><span className="font-medium">Combined pets weight limit:</span> 35 kilograms</p>
              <p className="italic text-sm">Maximum number of pets is 2.</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
   {/* Right Image Section */}
<div className="flex-1 relative">
  {/* Blue Brush Background */}
  <div className="absolute -inset-4 z-0">
    <div className="w-full h-full bg-[url('/images/blue-brush.png')] bg-contain bg-no-repeat" />
  </div>

  {/* Dog Image */}
  <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
    <Image
      src="/images/v-hotel-new2.jpg"
      alt="Dog relaxing"
      width={500}
      height={650} // taller ratio
      className="object-cover w-full h-auto" // let height grow naturally
    />
  </div>
</div>

      </div>
    </section>
  );
}



