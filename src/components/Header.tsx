
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-slide-in-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in-up">
            <h1 className="text-xl sm:text-2xl font-montserrat font-800 text-secondary hover:scale-105 transition-transform duration-300 cursor-pointer">
              getche<span className="text-primary animate-pulse-slow">();</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <button 
              onClick={() => scrollToSection('home')}
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
            <a 
              href="/blog"
              className="font-open-sans text-slate-grey hover:text-primary transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white font-open-sans font-500 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                Contact
              </button>
              <a 
                href="/blog"
                className="block w-full text-left px-3 py-2 text-slate-grey hover:text-primary font-open-sans transition-colors hover:bg-primary/5 rounded-lg"
              >
                Blog
              </a>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-open-sans font-500 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
