
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    "Modern Technology Stack",
    "Agile Development Process",
    "24/7 Support & Maintenance",
    "Scalable Architecture",
    "Security-First Approach",
    "Performance Optimized"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-montserrat font-800 text-secondary">
                Your Trusted Software
                <br />
                <span className="text-primary">Partners and Advisors</span>
              </h2>
              <p className="text-lg font-open-sans text-slate-grey leading-relaxed">
                We are a dedicated team of software developers, designers, and strategists committed to delivering exceptional digital solutions that drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-open-sans text-slate-grey">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-montserrat font-800 text-secondary">30+</div>
                <div className="font-open-sans text-slate-grey text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-montserrat font-800 text-secondary">50+</div>
                <div className="font-open-sans text-slate-grey text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-highlight" />
                </div>
                <div className="text-2xl font-montserrat font-800 text-secondary">5+</div>
                <div className="font-open-sans text-slate-grey text-sm">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="font-montserrat font-700 text-secondary mb-3">Our Mission</h3>
                  <p className="font-open-sans text-slate-grey">
                    To empower businesses with cutting-edge software solutions that drive innovation, efficiency, and growth in the digital age.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="font-montserrat font-700 text-secondary mb-3">Our Approach</h3>
                  <p className="font-open-sans text-slate-grey">
                    We combine technical expertise with business acumen to deliver solutions that not only meet your requirements but exceed your expectations.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-2xl text-white">
                  <h3 className="font-montserrat font-700 mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 font-open-sans text-sm">
                    <li>• Proven track record of success</li>
                    <li>• Transparent communication</li>
                    <li>• On-time project delivery</li>
                    <li>• Competitive pricing</li>
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
