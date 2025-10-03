import React from 'react';
import { Facebook, Instagram, ShoppingCart, Menu, X } from 'lucide-react';
import authorImage from './assets/image/philip scranton.jpg';
import authorBooks from './assets/image/scranton book mockup.webp';

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
              <a href="/" className="focus:outline-none">
                <h1 className="text-2xl font-bold text-gray-900 font-playfair">
                  J. Philip Scranton
                </h1>
              </a>
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
              <a
                href="https://www.amazon.com/Samson-Christ-Marvelous-Opener-Gates/dp/1615793127/ref=sr_1_2?dib=eyJ2IjoiMSJ9.B-6MnnFnrnZppHZsy-R5YPchIpoQWpNUJMgzr8X2s725cNCUifg2v4WvBJdS1skj.WRFq1xA1czeJPJAkw_w2LxH0Xpd3L0_g6Viul8PMeWs&dib_tag=se&qid=1749847492&refinements=p_27%3AJ.+Philip+Scranton&s=books&sr=1-2&text=J.+Philip+Scranton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2 font-poppins"
              >
                <ShoppingCart size={16} />
                Buy Now
              </a>
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
                <a
                  href="https://www.amazon.com/Samson-Christ-Marvelous-Opener-Gates/dp/1615793127/ref=sr_1_2?dib=eyJ2IjoiMSJ9.B-6MnnFnrnZppHZsy-R5YPchIpoQWpNUJMgzr8X2s725cNCUifg2v4WvBJdS1skj.WRFq1xA1czeJPJAkw_w2LxH0Xpd3L0_g6Viul8PMeWs&dib_tag=se&qid=1749847492&refinements=p_27%3AJ.+Philip+Scranton&s=books&sr=1-2&text=J.+Philip+Scranton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 font-poppins"
                >
                  Buy The Book
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
  <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 py-8 sm:px-0 sm:py-0">
    {/* Gradient background for mobile/tablet only */}
    <div className="absolute inset-0 w-full h-full overflow-hidden md:hidden">
      <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200"></div>
    </div>
    {/* Desktop video background */}
    <div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
      <div className="relative w-full h-full pt-[56.25%]">
        <iframe
          src="https://www.youtube.com/embed/WWJ672iZKNQ?autoplay=1&mute=1&controls=0&loop=1&playlist=WWJ672iZKNQ&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
          title="Background video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50"></div>
    </div>
    <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 blur-lg"></div>
                <img 
                  src={authorBooks}
                  alt="The Journey Within - Book Cover"
                  className="relative w-64 h-96 sm:w-auto sm:h-[600px] object-fit rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left px-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-playfair">
                J Philip Scranton<br/>
                <span className="text-amber-700">Book Collection</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-poppins">
               J. Philip Scranton is a graduate of Mid-Continent University with a degree in Biblical Studies and has pursued graduate work in Biblical Languages.
              </p>
              <a
                href="https://www.amazon.com/Samson-Christ-Marvelous-Opener-Gates/dp/1615793127/ref=sr_1_2?dib=eyJ2IjoiMSJ9.B-6MnnFnrnZppHZsy-R5YPchIpoQWpNUJMgzr8X2s725cNCUifg2v4WvBJdS1skj.WRFq1xA1czeJPJAkw_w2LxH0Xpd3L0_g6Viul8PMeWs&dib_tag=se&qid=1749847492&refinements=p_27%3AJ.+Philip+Scranton&s=books&sr=1-2&text=J.+Philip+Scranton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 font-poppins"
              >
                Buy The Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
  <section id="about" className="min-h-screen py-12 px-2 sm:px-6 lg:px-8 bg-white flex items-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-20 font-playfair">
            About the Author
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_65%] gap-12 items-center">
  <div className="order-1 flex justify-center lg:order-2 mb-8 lg:mb-0">
              <img 
                src={authorImage}
                alt="J Philip Scranton - Author"
                className="relative w-auto h-96 sm:w-auto sm:h-[400px] rounded-lg object-fit shadow-2xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 font-playfair">
                J. Philip Scranton
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
                J. Philip Scranton is a graduate of Mid-Continent University with a degree in Biblical Studies and has pursued graduate work in Biblical Languages. He served as pastor of two churches, has spoken at numerous conferences, and has authored several magazine articles, particularly in Old Testament studies. Samson as Christ: The Marvelous Opener of the Gates is another title available by the author.
              </p>
            </div>
          </div>
          
        </div>
      </section>

        {/* About the Book Section 1*/}
  <section id="book" className="py-12 px-2 sm:px-6 lg:px-8 bg-gray-50 relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-20 font-playfair">
            About the Book
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-center mb-20">
            <div className='order-2 flex justify-center lg:justify-end lg:order-2 mb-8 lg:mb-0'>
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg opacity-20 blur-lg"></div> */}
                <img
                  src="https://m.media-amazon.com/images/I/71vYLrA2LbL._SL1360_.jpg"
                  alt="Samson As Christ: The Marvelous Opener of the Gates "
                  className="relative w-3/4 h-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
 
            <div className='order-1 w-fit'>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-playfair text-amber-800">
               Samson As Christ: The Marvelous Opener of the Gates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-poppins">
                Deep in the heart of every believer is the hunch, if not the conviction, that somewhere the Bible must sketch a portrait of the Lord Jesus Christ like this one. He must be the strong Man of God Who can fight against incredible odds and win the victory decisively. The purpose of the narrative on Samson in the book of Judges is to give us that portrayal, so we can realize and glory in the accomplishments of Jesus Christ like never before. Samson provides that unparalleled picture of Christ for us. Some will protest, "Samson was a womanizer! He can't be a type of Christ!" Squeamish commentators have thought that for years.
              </p>
              <a
                href="https://www.amazon.com/Samson-Christ-Marvelous-Opener-Gates/dp/1615793127/ref=sr_1_2?dib=eyJ2IjoiMSJ9.B-6MnnFnrnZppHZsy-R5YPchIpoQWpNUJMgzr8X2s725cNCUifg2v4WvBJdS1skj.WRFq1xA1czeJPJAkw_w2LxH0Xpd3L0_g6Viul8PMeWs&dib_tag=se&qid=1749847492&refinements=p_27%3AJ.+Philip+Scranton&s=books&sr=1-2&text=J.+Philip+Scranton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 font-poppins"
              >
                Get Your Copy Now!
              </a>
            </div>
          </div>

          {/* About the Book Section 2*/}
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 sm:gap-12 items-center py-10 sm:py-20">
            <div className='order-1 flex justify-start lg:order-2'>
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg opacity-20 blur-lg"></div> */}
                <img
                  src="https://m.media-amazon.com/images/I/71HJ4wZe3rL._SL1360_.jpg"
                  alt="Journey to and through the Second Death"
                  className="relative w-full sm:w-3/4 h-auto object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
 
            <div className='order-2 '>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-playfair text-amber-800">
               Journey to and through the Second Death
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-poppins">
                Journey to and Through the Second Death begins the study where it should-with the first death. Bible believers hold widely diverse opinions on the first death, so a solid biblical definition of death is established before addressing the second death. Technical issues are explained in everyday language.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 font-poppins">
                This study has two goals. First, it seeks to bring many unanswered and shadowy questions from the back of the mind into open discussion and resolution:
              </p>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed mb-8 font-poppins'>
                <li>Where are the dead?</li>
                <li>Are they conscious?</li>
                <li>Is the second death a repetition of the first?</li>
                <li>Is the lake of fire literal fire?</li>
                <li>Can spiritual beings be tormented by literal fire?</li>
                <li>Why is the lake of fire not called the second death until the Great White Throne judgment?</li>
              </ul>
              <a
                href="https://www.amazon.com/Journey-through-Second-Philip-Scranton/dp/1967776946/ref=sr_1_1?crid=1Q0FY2DY04ERD&dib=eyJ2IjoiMSJ9.ZwokGParaip7RvvsYjxFqWYYX9UiSwb-dZwe8DpB-T2H9jNwpmcyjjDHidl_L-vgFwuGFi70MjLth6RuTJkCZvcxaQLqIEGslSZ6FxYC7fxm5-cuvdCLdn46XKWb0qvS.cFgZF4G9uz9QRLXe0wEfbtooz8m2ObxASTvVdBwLpx4&dib_tag=se&keywords=Journey+to+and+through+the+Second+Death&qid=1753907202&s=books&sprefix=journey+to+and+through+the+second+death%2Cstripbooks%2C564&sr=1-1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 font-poppins"
              >
                Get Your Copy Now!
              </a>
            </div>
          </div>

        </div>
      </section>

 {/* Contact Section Below About the Book Section 2 */}
          <section id="contact-form" className="w-full py-20 px-2 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch md:items-center">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center md:items-start">
                <h2 className="text-2xl font-bold text-center md:text-left text-gray-900 mb-6 font-playfair">Contact Me</h2>
                <form className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                  <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700" required />
                  <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700" required />
                  <textarea name="message" rows={4} placeholder="Your Message" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none" required></textarea>
                  <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition-colors duration-200">Send Message</button>
                </form>
              </div>
              {/* Get in Touch Section */}
              <div className="flex flex-col justify-center items-center md:items-start h-full text-center md:text-left bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Get in Touch</h3>
                <p className="text-gray-700 mb-2 font-poppins">I'd love to hear from you! For inquiries, collaborations, or feedback, reach out via email:</p>
                <a href="mailto:phil.scranton@yahoo.com" className="text-amber-700 font-semibold text-lg break-all hover:underline">phil.scranton@yahoo.com</a>
              </div>
            </div>
          </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center py-8 sm:py-12 px-2">
          <a href="/" className="focus:outline-none">
                <h1 className="text-4xl font-bold font-playfair py-12">
                  J. Philip Scranton
                </h1>
              </a>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
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

          </div>
        </div>
         <div className="bg-black w-full py-4 sm:py-6 text-center px-2">
          <p className="text-gray-400 font-poppins text-xs">
            © J Philip Scranton. All rights reserved. | Powered by <a href='https://authorstranquilitypress.com/' target="_blank" className="text-white hover:text-amber-700">Author's Tranquility Press LLC</a>
          </p>
          </div>
      </footer>
    </div>
  );
}

export default App;