import { ExternalLink, Code } from 'lucide-react';

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Selected Projects</h2>
          <p className="mt-4 text-lg text-slate-600">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                  >
                    <Code className="w-4 h-4 mr-1.5" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
