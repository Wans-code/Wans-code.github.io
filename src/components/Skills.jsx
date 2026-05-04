const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-slate-600">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-200 shadow-sm hover:border-primary-300 hover:text-primary-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
