
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-800 text-secondary mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg font-open-sans text-slate-grey max-w-2xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-montserrat font-700 text-secondary text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="font-open-sans text-slate-grey leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-open-sans text-sm text-slate-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-montserrat font-700 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-open-sans mb-6 opacity-90">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-open-sans font-600 transition-colors"
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
