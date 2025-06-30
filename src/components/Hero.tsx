
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-800 text-secondary leading-tight">
                Trusted Software
                <br />
                <span className="text-primary">Development</span>
                <br />
                for Business Success.
              </h1>
              <p className="text-lg md:text-xl font-open-sans text-slate-grey leading-relaxed max-w-lg">
                We build modern, scalable software solutions that drive growth and innovation for businesses of all sizes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-open-sans font-500 px-8 py-3"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white font-open-sans font-500 px-8 py-3"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-montserrat font-800 text-primary">100%</div>
                <div className="font-open-sans text-slate-grey text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-montserrat font-800 text-primary">50+</div>
                <div className="font-open-sans text-slate-grey text-sm">Projects Delivered</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-montserrat font-800 text-primary">5+</div>
                <div className="font-open-sans text-slate-grey text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Service Cards */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-700 text-secondary mb-2">Web Development</h3>
                <p className="font-open-sans text-slate-grey text-sm">Modern, responsive web applications</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-montserrat font-700 text-secondary mb-2">Mobile Apps</h3>
                <p className="font-open-sans text-slate-grey text-sm">Native and cross-platform solutions</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-4">
                <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-highlight" />
                </div>
                <h3 className="font-montserrat font-700 text-secondary mb-2">Custom Software</h3>
                <p className="font-open-sans text-slate-grey text-sm">Tailored enterprise solutions</p>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white">
                <h3 className="font-montserrat font-700 mb-2">Ready to Start?</h3>
                <p className="font-open-sans text-sm mb-4 opacity-90">Let's discuss your project</p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="secondary"
                  size="sm"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
