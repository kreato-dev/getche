
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
    },
    {
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics dashboard with data visualization and reporting capabilities.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Logistics Management System",
      category: "Enterprise Software",
      description: "Complete logistics solution with route optimization, tracking, and fleet management features.",
      technologies: ["Angular", "Java", "MySQL", "AWS"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop"
    },
    {
      title: "Social Media Analytics",
      category: "SaaS Platform",
      description: "Social media management and analytics platform with multi-platform integration and AI insights.",
      technologies: ["React", "Python", "Redis", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "IoT Monitoring System",
      category: "IoT Solution",
      description: "Real-time IoT device monitoring with alerts, data visualization, and predictive maintenance.",
      technologies: ["React", "MQTT", "InfluxDB", "Docker"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-800 text-secondary mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg font-open-sans text-slate-grey max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm font-open-sans text-primary font-500 mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-montserrat font-700 text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="font-open-sans text-slate-grey text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-slate-grey text-xs font-open-sans rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-secondary to-primary p-12 rounded-3xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-700 mb-4">
              Delivering Excellence Through
              <br />
              <span className="text-accent">Expertise and Dedication</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-800 text-accent mb-2">90%</div>
              <div className="font-open-sans text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-800 text-accent mb-2">70%</div>
              <div className="font-open-sans text-sm opacity-90">Repeat Clients</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-800 text-accent mb-2">48h</div>
              <div className="font-open-sans text-sm opacity-90">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-800 text-accent mb-2">99%</div>
              <div className="font-open-sans text-sm opacity-90">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
