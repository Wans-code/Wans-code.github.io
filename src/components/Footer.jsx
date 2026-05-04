import { Code, User, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white tracking-tight">
              {data.name.split(' ')[0]}<span className="text-primary-500">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">
              Building digital products, brands, and experience.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={data.social.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Code className="h-6 w-6" />
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <User className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${data.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
