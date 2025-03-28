import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LensConnect - Photography Marketplace',
  description: 'Connect with talented photographers for your special events, portraits, weddings and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-600">LensConnect</div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="/photographers" className="text-gray-700 hover:text-indigo-600">Photographers</a>
              <a href="/services" className="text-gray-700 hover:text-indigo-600">Services</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
            </nav>
            <div className="flex space-x-4">
              <a href="/login" className="text-gray-700 hover:text-indigo-600">Log in</a>
              <a href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Sign up</a>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white pt-12 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LensConnect</h3>
                <p className="text-gray-400">
                  A marketplace connecting talented photographers with clients for capturing life's precious moments.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="/photographers" className="text-gray-400 hover:text-white">Find Photographers</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white">Photography Services</a></li>
                  <li><a href="/how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                  <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">For Photographers</h4>
                <ul className="space-y-2">
                  <li><a href="/join" className="text-gray-400 hover:text-white">Join as Photographer</a></li>
                  <li><a href="/resources" className="text-gray-400 hover:text-white">Resources</a></li>
                  <li><a href="/photographer-faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                  <li><a href="/success-stories" className="text-gray-400 hover:text-white">Success Stories</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} LensConnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}