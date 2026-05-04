import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
              {data.role}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
              >
                View Portfolio
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow transition-all w-full sm:w-auto"
              >
                <Mail className="mr-2 -ml-1 h-5 w-5 text-slate-400" />
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Image/Avatar Placeholder */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-200 rounded-full border-8 border-white shadow-xl overflow-hidden flex items-center justify-center">
                <span className="text-6xl text-slate-400 font-bold">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
