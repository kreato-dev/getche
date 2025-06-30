
import { Globe, Smartphone, Code, Database, Cloud, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.",
      features: ["iOS & Android", "Cross-platform", "App Store Ready", "Push Notifications"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements and streamline operations.",
      features: ["Business Logic", "Integration Ready", "Scalable Architecture", "Maintenance Support"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and management services including SQL, NoSQL, and cloud-based database solutions.",
      features: ["Data Modeling", "Performance Tuning", "Backup & Recovery", "Migration Services"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and management using AWS, Google Cloud, and Microsoft Azure platforms.",
      features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "DevOps Integration"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security audits, implementation of best practices, and ongoing maintenance and support services.",
      features: ["Security Audits", "Bug Fixes", "Performance Monitoring", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-xs sm:text-sm font-500 mb-4 sm:mb-6 animate-bounce-slow">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-secondary mb-4 sm:mb-6">
            Our <span className="text-primary animate-slide-in-right" style={{animationDelay: '0.3s'}}>Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-open-sans text-slate-grey max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            We offer comprehensive software development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-105 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform group-hover:animate-float">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-montserrat font-700 text-secondary text-lg sm:text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="font-open-sans text-slate-grey leading-relaxed text-sm sm:text-base">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} 
                         className="flex items-center space-x-2 animate-slide-in-left"
                         style={{animationDelay: `${0.5 + featureIndex * 0.1}s`}}>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
                      <span className="font-open-sans text-xs sm:text-sm text-slate-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-montserrat font-700 mb-3 sm:mb-4 animate-bounce-slow">
              Ready to Start Your Project?
            </h3>
            <p className="font-open-sans mb-4 sm:mb-6 opacity-90 text-sm sm:text-base animate-fade-in-up" style={{animationDelay: '1s'}}>
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-open-sans font-600 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
