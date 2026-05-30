export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/chase.jpg"
                  alt="Chase Ward — Ward Consulting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">
                Based in Nashville, TN
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Who You're Working With
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
              Hi, I'm Chase Ward.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I've spent the last four years building and selling workflow automations for small businesses — and the same problems keep coming up. Leads falling through the cracks. Owners too busy to follow up. Google reviews never getting asked for.
              </p>
              <p>
                Ward Consulting exists because these are solvable problems. Not with expensive software or a full-time hire — just a simple, well-built system that runs in the background while you focus on the work.
              </p>
              <p>
                I handle everything from setup to handoff. You don't need to be technical. You just need to be ready to stop losing leads.
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6156639319"
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-5 py-3 transition-colors group"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">(615) 663-9319</span>
              </a>
              <a
                href="mailto:wardconsulting99@gmail.com"
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-5 py-3 transition-colors group"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">wardconsulting99@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
