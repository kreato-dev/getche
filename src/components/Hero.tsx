
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-open-sans text-sm font-500 animate-fade-in">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Welcome to getche();
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-800 text-secondary leading-tight">
                <span className="block animate-fade-in">Trusted</span>
                <span className="block text-primary animate-fade-in" style={{animationDelay: '0.2s'}}>Software</span>
                <span className="block animate-fade-in" style={{animationDelay: '0.4s'}}>Development</span>
                <span className="block text-highlight animate-fade-in" style={{animationDelay: '0.6s'}}>for Business Success.</span>
              </h1>
              
              <p className="text-xl font-open-sans text-slate-grey leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.8s'}}>
                We deliver cutting-edge software solutions that drive growth, innovation, and success for businesses worldwide. Transform your digital presence with our expert development team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-open-sans font-600 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-open-sans font-600 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-open-sans text-slate-grey font-500">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-open-sans text-slate-grey font-500">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            {/* Professional Image Placeholder */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-accent rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-montserrat font-800 text-primary">100%</span>
                      <span className="text-sm font-open-sans text-slate-grey">Client Satisfaction</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full animate-[width_2s_ease-in-out]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite]">
                <Globe className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-open-sans font-600 text-secondary">Web Dev</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite_0.5s]">
                <Smartphone className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-open-sans font-600 text-secondary">Mobile</span>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite_1s]">
                <Code className="h-8 w-8 text-highlight mb-2" />
                <span className="text-sm font-open-sans font-600 text-secondary">Custom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{animationDelay: '1.4s'}}>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors">50+</div>
            <div className="font-open-sans text-slate-grey">Projects Delivered</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors">30+</div>
            <div className="font-open-sans text-slate-grey">Happy Clients</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors">5+</div>
            <div className="font-open-sans text-slate-grey">Years Experience</div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-montserrat font-800 text-primary mb-2 group-hover:text-accent transition-colors">24/7</div>
            <div className="font-open-sans text-slate-grey">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
