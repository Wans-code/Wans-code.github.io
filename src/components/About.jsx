const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.about}
          </p>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</h3>
              <p className="text-slate-800 font-medium">{data.location}</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
              <p className="text-slate-800 font-medium">
                <a href={`mailto:${data.email}`} className="hover:text-primary-600 transition-colors">
                  {data.email}
                </a>
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</h3>
              <p className="text-slate-800 font-medium">{data.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
