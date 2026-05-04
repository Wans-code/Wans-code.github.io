import { Briefcase } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Experience</h2>
          <p className="mt-4 text-lg text-slate-600">My professional journey</p>
        </div>

        <div className="space-y-12">
          {data.map((job, index) => (
            <div key={job.id} className="relative flex flex-col md:flex-row gap-8 items-start">
              {/* Timeline Line (Hidden on very small screens) */}
              {index !== data.length - 1 && (
                <div className="hidden md:block absolute top-16 bottom-[-3rem] left-[2.25rem] w-px bg-slate-200"></div>
              )}
              
              {/* Icon */}
              <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center z-10">
                <Briefcase className="w-6 h-6 text-primary-600" />
              </div>

              {/* Content Card */}
              <div className="flex-1 w-full bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <div className="text-primary-600 font-medium">{job.company}</div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
