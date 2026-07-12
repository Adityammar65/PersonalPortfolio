import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center">About Me</h1>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">
          Get to know more about who I am, my educational background, and what
          drives my passion for web development.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-8 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)] transition-all duration-300">
            <h2 className="text-blue-400 text-2xl font-semibold mb-6">
              Who Am I?
            </h2>

            <p className="text-slate-300 leading-8">
              <span className="text-white font-semibold">
                Hi! I'm Aditya Ammar Al Haqqi.
              </span>
              <br />
              <br />
              I am an Informatics Management student at Universitas Amikom
              Yogyakarta with a strong interest in Web Development. I enjoy
              creating modern web applications, learning new technologies, and
              solving real-world problems through clean, maintainable code.
              <br />
              <br />
              My goal is to continuously improve as a developer while building
              software that provides meaningful value to users.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-8 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)] transition-all duration-300">
            <h2 className="text-blue-400 text-2xl font-semibold mb-6">
              Quick Information
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-blue-400 font-medium">Education</p>
                <p className="text-white">Diploma of Informatics Management</p>
                <p className="text-slate-400 text-sm">
                  Universitas Amikom Yogyakarta
                </p>
                <p className="text-slate-500 text-sm">2024 – Present</p>
              </div>

              <div>
                <p className="text-blue-400 font-medium">Location</p>

                <p className="text-white">Yogyakarta, Indonesia</p>
              </div>

              <div>
                <p className="text-blue-400 font-medium">Interests</p>

                <p className="text-white">
                  Web Development, Technology, Games, Cars, Diecast
                </p>
              </div>

              <div>
                <p className="text-blue-400 font-medium">Languages</p>

                <p className="text-white">Indonesian • English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
