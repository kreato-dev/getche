
import { CheckCircle, Users, Award, Clock, Target, Zap } from "lucide-react";

const About = () => {
  const features = [
    "Modern Technology Stack",
    "Agile Development Process", 
    "24/7 Support & Maintenance",
    "Scalable Architecture",
    "Security-First Approach",
    "Performance Optimized"
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge software solutions that drive innovation, efficiency, and growth in the digital age."
    },
    {
      icon: Zap,
      title: "Our Approach", 
      description: "We combine technical expertise with business acumen to deliver solutions that not only meet your requirements but exceed your expectations."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-xs sm:text-sm font-500 mb-4 sm:mb-6 animate-bounce-slow">
            About getche();
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-secondary mb-4 sm:mb-6">
            Your Trusted Software
            <br />
            <span className="text-primary animate-slide-in-left" style={{animationDelay: '0.3s'}}>Partners and Advisors</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-open-sans text-slate-grey leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            We are a dedicated team of software developers, designers, and strategists committed to delivering exceptional digital solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} 
                     className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                     style={{animationDelay: `${0.1 * index}s`}}>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 group-hover:animate-bounce-slow" />
                  <span className="font-open-sans text-slate-grey font-500 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-100">
              <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-float">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-montserrat font-800 text-secondary animate-pulse-slow">30+</div>
                <div className="font-open-sans text-slate-grey text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors group-hover:animate-float">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl font-montserrat font-800 text-secondary animate-pulse-slow" style={{animationDelay: '0.5s'}}>50+</div>
                <div className="font-open-sans text-slate-grey text-xs sm:text-sm">Projects Done</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-highlight/20 transition-colors group-hover:animate-float">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-highlight" />
                </div>
                <div className="text-2xl sm:text-3xl font-montserrat font-800 text-secondary animate-pulse-slow" style={{animationDelay: '1s'}}>5+</div>
                <div className="font-open-sans text-slate-grey text-xs sm:text-sm">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
              <div className="space-y-4 sm:space-y-6">
                {values.map((value, index) => (
                  <div key={index} 
                       className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                       style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-bounce-slow">
                        <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat font-700 text-secondary mb-2 sm:mb-3 text-base sm:text-lg">{value.title}</h3>
                        <p className="font-open-sans text-slate-grey leading-relaxed text-sm sm:text-base">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-r from-primary to-accent p-4 sm:p-6 rounded-xl sm:rounded-2xl text-white hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <h3 className="font-montserrat font-700 mb-3 text-base sm:text-lg">Why Choose Us?</h3>
                  <ul className="space-y-2 font-open-sans text-xs sm:text-sm">
                    <li className="flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce-slow" />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '1s'}}>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce-slow" />
                      <span>Transparent communication</span>
                    </li>
                    <li className="flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '1.2s'}}>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce-slow" />
                      <span>On-time project delivery</span>
                    </li>
                    <li className="flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '1.4s'}}>
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce-slow" />
                      <span>Competitive pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
