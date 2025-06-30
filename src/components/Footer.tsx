
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-800">
              getche<span className="text-primary">();</span>
            </h3>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              Professional software development agency specializing in modern web applications, mobile apps, and enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary font-600">in</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary font-600">tw</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary font-600">gh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-700">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block font-open-sans text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block font-open-sans text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block font-open-sans text-gray-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block font-open-sans text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-700">Services</h4>
            <div className="space-y-3 font-open-sans text-gray-300">
              <div>Web Development</div>
              <div>Mobile Apps</div>
              <div>Custom Software</div>
              <div>Database Solutions</div>
              <div>Cloud Services</div>
              <div>Maintenance & Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-700">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-open-sans text-gray-300 text-sm">
                  123 Innovation Drive<br />Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-open-sans text-gray-300 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-open-sans text-gray-300 text-sm">
                  hello@getche.dev
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-open-sans text-gray-300 text-sm">
              © {currentYear} getche(); All rights reserved.
            </div>
            <div className="flex space-x-6 font-open-sans text-gray-300 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
