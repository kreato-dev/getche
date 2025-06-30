
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-sm font-500 mb-6">
            About getche();
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-800 text-secondary mb-6">
            Your Trusted Software
            <br />
            <span className="text-primary">Partners and Advisors</span>
          </h2>
          <p className="text-xl font-open-sans text-slate-grey leading-relaxed max-w-3xl mx-auto">
            We are a dedicated team of software developers, designers, and strategists committed to delivering exceptional digital solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} 
                     className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                     style={{animationDelay: `${0.1 * index}s`}}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-open-sans text-slate-grey font-500">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-montserrat font-800 text-secondary">30+</div>
                <div className="font-open-sans text-slate-grey text-sm">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-montserrat font-800 text-secondary">50+</div>
                <div className="font-open-sans text-slate-grey text-sm">Projects Done</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 transition-colors">
                  <Clock className="h-8 w-8 text-highlight" />
                </div>
                <div className="text-3xl font-montserrat font-800 text-secondary">5+</div>
                <div className="font-open-sans text-slate-grey text-sm">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl backdrop-blur-sm">
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} 
                       className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                       style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-montserrat font-700 text-secondary mb-3 text-lg">{value.title}</h3>
                        <p className="font-open-sans text-slate-grey leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-2xl text-white hover:scale-105 transition-transform duration-300">
                  <h3 className="font-montserrat font-700 mb-3 text-lg">Why Choose Us?</h3>
                  <ul className="space-y-2 font-open-sans text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Transparent communication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>On-time project delivery</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
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
