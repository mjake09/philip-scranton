import React from 'react';
import { Facebook, Instagram, ShoppingCart, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Author Name */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 font-playfair">
                Sarah Mitchell
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                About
              </a>
              <a href="#book" className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                The Book
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                Contact
              </a>
            </nav>
            
            {/* Buy Now Button */}
            <div className="hidden md:block">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2 font-poppins">
                <ShoppingCart size={16} />
                Buy Now
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="py-4 space-y-4">
                <a href="#home" className="block text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                  Home
                </a>
                <a href="#about" className="block text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                  About
                </a>
                <a href="#book" className="block text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                  The Book
                </a>
                <a href="#contact" className="block text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium font-poppins">
                  Contact
                </a>
                <button className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 font-poppins">
                  <ShoppingCart size={16} />
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/WWJ672iZKNQ?autoplay=1&mute=1&controls=0&loop=1&playlist=WWJ672iZKNQ&playsinline=1"
            className="absolute w-full h-full object-cover scale-150"
            title="Background video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 to-orange-50/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg opacity-20 blur-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="The Journey Within - Book Cover"
                  className="relative w-64 h-96 sm:w-72 sm:h-[432px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-playfair">
                The Journey<br />
                <span className="text-amber-700">Within</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-poppins">
                A transformative tale of self-discovery, resilience, and the power of embracing change. Follow Emma's extraordinary journey as she learns that the greatest adventures begin from within.
              </p>
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 font-poppins">
                <ShoppingCart size={20} />
                Buy Now - $19.99
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
            About the Author
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Sarah Mitchell - Author"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-playfair">
                Sarah Mitchell
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
                Sarah Mitchell is an acclaimed novelist and former travel journalist who has spent over a decade exploring the human condition through storytelling. Her work has been featured in numerous literary magazines and she holds an MFA in Creative Writing from Columbia University.
              </p>
              <p className="text-gray-700 leading-relaxed font-poppins">
                When not writing, Sarah enjoys hiking, photography, and discovering hidden coffee shops around the world. "The Journey Within" is her debut novel, inspired by her own transformative experiences traveling solo across three continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section id="book" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
            About the Book
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                alt="The Journey Within - Scene"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-playfair">
                The Journey Within
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-poppins">
                Emma's comfortable life is turned upside down when she loses her job and relationship on the same day. Rather than wallowing in despair, she makes a bold decision that changes everything: a solo journey across the Scottish Highlands with nothing but a backpack and her grandmother's journal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 font-poppins">
                Through breathtaking landscapes and unexpected encounters with fellow travelers, Emma discovers that the most profound transformations happen not when we're running away from our problems, but when we're brave enough to face them head-on. This is a story about courage, healing, and the surprising ways that adventure can lead us home to ourselves.
              </p>
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 font-poppins">
                <ShoppingCart size={20} />
                Buy Now - $19.99
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 font-playfair">
            Connect with Sarah
          </h3>
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              title="Follow Sarah on Facebook"
              aria-label="Follow Sarah on Facebook"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              title="Follow Sarah on Instagram"
              aria-label="Follow Sarah on Instagram"
            >
              <Instagram size={32} />
            </a>
            <a 
              href="https://amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
              title="Buy Sarah's books on Amazon"
              aria-label="Buy Sarah's books on Amazon"
            >
              <ShoppingCart size={32} />
            </a>
          </div>
          <p className="text-gray-400 font-poppins">
            © 2025 Sarah Mitchell. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;