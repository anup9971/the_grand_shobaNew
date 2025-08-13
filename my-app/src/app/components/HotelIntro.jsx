export default function HotelInfoSection() {
  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/file.svg')", // background image path
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/hotel-img.jpg" // left side image path
            alt="Hotel Andaz"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          {/* Decorative Brush */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[url('/images/brush-red.png')] bg-cover"></div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            5-Star Luxury Lifestyle Hotel in Aerocity, New Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Located just a 7-minute drive from IGI Airport, Andaz Delhi, by Hyatt
            offers seamless connectivity with direct access to key hubs across
            Gurgaon, Dwarka, and Yashobhoomi via the newly opened Dwarka
            Expressway tunnel—reducing travel time by approximately 15 minutes.
            Some rooms offer stunning runway views, while the hotel itself blends
            contemporary luxury with a strong sense of place. With the largest
            guest rooms in the area, each space features one of 401 unique art
            pieces inspired by Delhi’s vibrant culture—bringing the soul of the
            city into every stay.
          </p>
        </div>
      </div>
    </section>
  );
}
