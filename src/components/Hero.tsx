
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-accent/5 via-white to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-accent/10 rounded-full text-accent font-open-sans text-xs sm:text-sm font-500 animate-slide-in-left">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Welcome to getche();
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-800 text-secondary leading-tight">
                <span className="block animate-fade-in-up">Trusted</span>
                <span className="block text-primary animate-fade-in-up" style={{animationDelay: '0.2s'}}>Software</span>
                <span className="block animate-fade-in-up" style={{animationDelay: '0.4s'}}>Development</span>
                <span className="block text-highlight animate-fade-in-up" style={{animationDelay: '0.6s'}}>for Business Success.</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl font-open-sans text-slate-grey leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                We deliver cutting-edge software solutions that drive growth, innovation, and success for businesses worldwide. Transform your digital presence with our expert development team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-left" style={{animationDelay: '1s'}}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-open-sans font-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-open-sans font-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-6 sm:pt-8 animate-slide-in-right" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent animate-bounce-slow" />
                <span className="font-open-sans text-slate-grey font-500 text-sm sm:text-base">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent animate-bounce-slow" style={{animationDelay: '0.5s'}} />
                <span className="font-open-sans text-slate-grey font-500 text-sm sm:text-base">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right order-1 lg:order-2" style={{animationDelay: '0.4s'}}>
            {/* Professional Image Placeholder */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-float">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl font-montserrat font-800 text-primary">100%</span>
                      <span className="text-xs sm:text-sm font-open-sans text-slate-grey">Client Satisfaction</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full animate-[width_2s_ease-in-out]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-float">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-open-sans font-600 text-secondary">Web Dev</span>
              </div>

              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-accent mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-open-sans font-600 text-secondary">Mobile</span>
              </div>

              <div className="absolute top-1/2 -right-4 sm:-right-8 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-highlight mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-open-sans font-600 text-secondary">Custom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
          <div className="text-center group hover:scale-110 transition-transform duration-300 p-4 rounded-xl hover:bg-white/50">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors animate-pulse-slow">50+</div>
            <div className="font-open-sans text-slate-grey text-xs sm:text-sm lg:text-base">Projects Delivered</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 p-4 rounded-xl hover:bg-white/50">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors animate-pulse-slow" style={{animationDelay: '0.5s'}}>30+</div>
            <div className="font-open-sans text-slate-grey text-xs sm:text-sm lg:text-base">Happy Clients</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 p-4 rounded-xl hover:bg-white/50">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors animate-pulse-slow" style={{animationDelay: '1s'}}>5+</div>
            <div className="font-open-sans text-slate-grey text-xs sm:text-sm lg:text-base">Years Experience</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 p-4 rounded-xl hover:bg-white/50">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors animate-pulse-slow" style={{animationDelay: '1.5s'}}>24/7</div>
            <div className="font-open-sans text-slate-grey text-xs sm:text-sm lg:text-base">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
