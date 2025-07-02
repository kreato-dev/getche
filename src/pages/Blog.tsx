import { Link } from "react-router-dom";
import { Calendar, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Building Scalable E-Commerce: Lessons Learned",
      excerpt: "Key insights from developing a high-performance e-commerce platform that handles thousands of users simultaneously.",
      content: "In this comprehensive guide, we'll explore the challenges and solutions in building scalable e-commerce platforms...",
      date: "2024-01-15",
      author: "Development Team",
      readTime: "5 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      featured: true
    },
    {
      id: "2", 
      title: "Microservices Architecture in Modern Web Apps",
      excerpt: "How we implemented microservices to achieve better scalability and maintainability in our applications.",
      content: "Microservices architecture has revolutionized how we build and deploy web applications...",
      date: "2024-01-10",
      author: "Tech Lead",
      readTime: "8 min read", 
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Security Best Practices for Financial Applications",
      excerpt: "Essential security measures when building applications that handle sensitive financial data.",
      content: "When developing financial applications, security isn't just important - it's critical...",
      date: "2024-01-05",
      author: "Security Team",
      readTime: "6 min read",
      category: "Security", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Mobile App Development: React Native vs Flutter",
      excerpt: "A comprehensive comparison of React Native and Flutter for cross-platform mobile development.",
      content: "Choosing the right framework for mobile development is crucial for project success...",
      date: "2023-12-28",
      author: "Mobile Team",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop"
    },
    {
      id: "5",
      title: "The Future of Cloud Computing",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of cloud infrastructure.",
      content: "Cloud computing continues to evolve at a rapid pace, bringing new opportunities...",
      date: "2023-12-20",
      author: "Cloud Architect",
      readTime: "9 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
    },
    {
      id: "6",
      title: "Database Optimization Strategies",
      excerpt: "Proven techniques to improve database performance and reduce query execution time.",
      content: "Database performance is crucial for application success. Here are our proven strategies...",
      date: "2023-12-15",
      author: "Database Expert",
      readTime: "6 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Security", "Architecture", "Cloud Computing", "Database"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-white to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-open-sans text-sm font-500 mb-6 animate-bounce-slow">
              Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-800 text-secondary mb-6">
              Insights & <span className="text-primary">Knowledge</span>
            </h1>
            <p className="text-lg text-slate-grey font-open-sans max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest trends, best practices, and insights from our development team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full hover:scale-105 transition-all duration-300 ${
                  index === 0 ? 'bg-primary text-white' : 'border-primary/20 text-slate-grey hover:border-primary hover:text-primary'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-montserrat font-700 text-secondary mb-2">Featured Post</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-open-sans rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-slate-grey font-open-sans mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-3">•</span>
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                    <span className="mx-3">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-montserrat font-800 text-secondary mb-4 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-grey font-open-sans leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300">
                      Read Full Article →
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-montserrat font-700 text-secondary mb-2">All Posts</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-open-sans rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-slate-grey font-open-sans mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-lg font-montserrat font-700 text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-grey font-open-sans text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-grey font-open-sans">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h2 className="text-3xl font-montserrat font-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-open-sans font-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;