import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      fullDescription: "This comprehensive e-commerce solution was built from the ground up to handle high-volume transactions and provide seamless user experience. The platform includes advanced features like real-time inventory tracking, multi-payment gateway integration, advanced analytics dashboard, and robust security measures.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      client: "TechCorp Solutions",
      duration: "6 months",
      year: "2024",
      challenge: "The client needed a scalable e-commerce platform that could handle thousands of concurrent users while maintaining fast load times and secure transactions.",
      solution: "We implemented a microservices architecture with Redis caching, CDN integration, and horizontal scaling capabilities to ensure optimal performance.",
      results: ["300% increase in conversion rate", "50% reduction in page load time", "99.9% uptime achieved", "500+ concurrent users supported"]
    },
    {
      id: "2", 
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      fullDescription: "A comprehensive healthcare management application designed to streamline patient care and improve communication between healthcare providers and patients.",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
      client: "MedCare Health",
      duration: "8 months", 
      year: "2024",
      challenge: "Creating a HIPAA-compliant mobile application that securely handles sensitive medical data while providing intuitive user experience.",
      solution: "Implemented end-to-end encryption, secure authentication, and compliance monitoring throughout the development process.",
      results: ["40% reduction in appointment no-shows", "85% patient satisfaction rate", "60% faster consultation process", "HIPAA compliance achieved"]
    },
    {
      id: "3",
      title: "Financial Dashboard", 
      category: "Web Application",
      description: "Real-time financial analytics dashboard with data visualization and reporting capabilities.",
      fullDescription: "An advanced financial analytics platform providing real-time insights and comprehensive reporting for financial institutions.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      client: "FinanceFirst Bank",
      duration: "4 months",
      year: "2023", 
      challenge: "Processing and visualizing large volumes of financial data in real-time while ensuring data accuracy and security.",
      solution: "Built a robust data pipeline with real-time processing capabilities and implemented advanced visualization techniques.",
      results: ["Real-time data processing", "90% faster report generation", "Enhanced data accuracy", "Improved decision making"]
    }
  ];

  const project = projects.find(p => p.id === id) || projects[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-white to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in-up">
            <Link to="/#portfolio" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-sm font-500 mb-6">
                {project.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-800 text-secondary mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-slate-grey font-open-sans leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-slate-grey font-open-sans mb-2">Client</div>
                  <div className="font-montserrat font-600 text-secondary">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-grey font-open-sans mb-2">Duration</div>
                  <div className="font-montserrat font-600 text-secondary">{project.duration}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-800 text-secondary mb-6">
              Case Study
            </h2>
            <p className="text-lg text-slate-grey font-open-sans max-w-2xl mx-auto">
              Deep dive into the challenges, solutions, and results of this project
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 animate-fade-in-up">
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-700 text-secondary mb-4">Challenge</h3>
                <p className="text-slate-grey font-open-sans leading-relaxed">{project.challenge}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-700 text-secondary mb-4">Solution</h3>
                <p className="text-slate-grey font-open-sans leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-700 text-secondary mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-slate-grey font-open-sans flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technologies Used */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-montserrat font-700 text-secondary mb-8">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full font-open-sans font-500 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;