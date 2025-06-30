
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      featured: true
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
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-xs sm:text-sm font-500 mb-4 sm:mb-6 animate-bounce-slow">
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-secondary mb-4 sm:mb-6">
            Our <span className="text-primary animate-slide-in-right" style={{animationDelay: '0.3s'}}>Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-open-sans text-slate-grey max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Explore our recent projects and see how we've helped businesses achieve their digital transformation goals through innovative software solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <Card key={index} 
                  className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:scale-105 animate-fade-in-up ${project.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end">
                    <div className="text-white">
                      <div className="text-xs sm:text-sm font-open-sans opacity-90 mb-1">{project.category}</div>
                      <div className="text-sm sm:text-lg font-montserrat font-700">{project.title}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors hover:scale-110 animate-bounce-slow">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors hover:scale-110 animate-bounce-slow" style={{animationDelay: '0.2s'}}>
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 sm:px-3 py-1 bg-primary text-white text-xs font-open-sans rounded-full animate-pulse-slow">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-700 text-secondary mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-open-sans text-slate-grey text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-primary/10 text-slate-grey hover:text-primary text-xs font-open-sans rounded-full transition-colors cursor-default animate-fade-in-up"
                      style={{animationDelay: `${0.5 + techIndex * 0.1}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-primary font-open-sans font-500 text-xs sm:text-sm group-hover:text-accent transition-colors cursor-pointer animate-slide-in-right" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                  <span>View Project</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-secondary via-primary to-accent p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-800 mb-4 sm:mb-6 animate-bounce-slow">
              Delivering Excellence Through
              <br />
              <span className="text-accent">Expertise and Dedication</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-open-sans opacity-90 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Our commitment to quality and innovation drives exceptional results for every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-accent mb-2 sm:mb-3 group-hover:text-white transition-colors animate-pulse-slow">90%</div>
              <div className="font-open-sans opacity-90 text-xs sm:text-sm lg:text-base">Success Rate</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div className="bg-accent h-2 rounded-full w-[90%] animate-[width_2s_ease-in-out]"></div>
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-accent mb-2 sm:mb-3 group-hover:text-white transition-colors animate-pulse-slow" style={{animationDelay: '0.5s'}}>70%</div>
              <div className="font-open-sans opacity-90 text-xs sm:text-sm lg:text-base">Repeat Clients</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div className="bg-accent h-2 rounded-full w-[70%] animate-[width_2s_ease-in-out_0.5s]"></div>
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-accent mb-2 sm:mb-3 group-hover:text-white transition-colors animate-pulse-slow" style={{animationDelay: '1s'}}>48h</div>
              <div className="font-open-sans opacity-90 text-xs sm:text-sm lg:text-base">Response Time</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div className="bg-accent h-2 rounded-full w-full animate-[width_2s_ease-in-out_1s]"></div>
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-800 text-accent mb-2 sm:mb-3 group-hover:text-white transition-colors animate-pulse-slow" style={{animationDelay: '1.5s'}}>99%</div>
              <div className="font-open-sans opacity-90 text-xs sm:text-sm lg:text-base">Uptime</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div className="bg-accent h-2 rounded-full w-[99%] animate-[width_2s_ease-in-out_1.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
