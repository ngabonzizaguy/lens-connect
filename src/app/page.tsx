import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* We'd use a real image here, but for now a background color */}
            <div className="absolute inset-0 bg-indigo-900"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Capture Your Special Moments
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connect with talented photographers for your special events, portraits, weddings and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/photographers"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md text-center"
              >
                Find a Photographer
              </Link>
              <Link
                href="/booking"
                className="inline-block bg-white hover:bg-gray-100 text-indigo-600 font-medium px-6 py-3 rounded-md text-center"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Photographers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Photographers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover some of our most talented photographers, specializing in various styles and photography types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photographer Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-indigo-600 mb-3">Wedding Photography</p>
                <p className="text-gray-600 mb-4">
                  Specializing in capturing candid, emotional moments on your special day.
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-gray-600 ml-2">5.0 (42 reviews)</span>
                </div>
                <Link
                  href="/photographers/photographer1"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md"
                >
                  View Profile
                </Link>
              </div>
            </div>
            
            {/* Photographer Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Thompson</h3>
                <p className="text-indigo-600 mb-3">Portrait Photography</p>
                <p className="text-gray-600 mb-4">
                  Creating stunning portraits that capture personality and emotion.
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-gray-600 ml-2">4.9 (38 reviews)</span>
                </div>
                <Link
                  href="/photographers/photographer2"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md"
                >
                  View Profile
                </Link>
              </div>
            </div>
            
            {/* Photographer Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
                <p className="text-indigo-600 mb-3">Family Photography</p>
                <p className="text-gray-600 mb-4">
                  Experienced in creating beautiful family portraits and candid moments.
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-gray-600 ml-2">4.8 (45 reviews)</span>
                </div>
                <Link
                  href="/photographers/photographer3"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/photographers"
              className="inline-block bg-white hover:bg-gray-100 text-indigo-600 font-medium px-6 py-3 rounded-md border border-indigo-600"
            >
              View All Photographers
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Photography Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From weddings to corporate events, we have photographers specializing in various types of photography.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wedding Photography</h3>
              <p className="text-gray-600">
                Capture every special moment of your wedding day with our professional photographers.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Portrait Sessions</h3>
              <p className="text-gray-600">
                Professional portraits for individuals, couples, and families at any location.
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Photography</h3>
              <p className="text-gray-600">
                Professional images for your business, products, and corporate events.
              </p>
            </div>
            
            {/* Service Card 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Event Photography</h3>
              <p className="text-gray-600">
                From birthdays to corporate events, we capture all your special moments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finding and booking the perfect photographer for your needs is simple and straightforward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Photographers</h3>
              <p className="text-gray-600">
                Explore our curated list of professional photographers and find the one that matches your style and needs.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Session</h3>
              <p className="text-gray-600">
                Choose a package, select your preferred date and time, and complete your booking online.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Session</h3>
              <p className="text-gray-600">
                Meet with your photographer, have a great session, and receive your professionally edited photos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Photography Session?</h2>
            <p className="text-xl text-white/90 mb-8">
              Start your journey to capturing beautiful moments that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/photographers"
                className="inline-block bg-white hover:bg-gray-100 text-indigo-600 font-medium px-6 py-3 rounded-md"
              >
                Find a Photographer
              </Link>
              <Link
                href="/booking"
                className="inline-block bg-indigo-800 hover:bg-indigo-900 text-white font-medium px-6 py-3 rounded-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}