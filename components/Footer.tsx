export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="text-xl font-bold text-white">
              Ward <span className="text-blue-400">Consulting</span>
            </span>
            <p className="text-sm mt-3 leading-relaxed">
              Simple workflow automation for small local service businesses. Faster lead response. More Google reviews. Less manual work.
            </p>
            {/* Contact info */}
            <div className="mt-5 space-y-2">
              <a href="tel:6156639319" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (615) 663-9319
              </a>
              <a href="mailto:wardconsulting99@gmail.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                wardconsulting99@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Nashville, TN
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-white text-sm font-semibold mb-3">Navigation</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">The System</a></li>
                <li><a href="#package" className="hover:text-white transition-colors">Package</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-3">Get Started</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">Free Workflow Audit</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Website Design</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Custom Builds</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          © {currentYear} Ward Consulting. All rights reserved. Nashville, TN
        </div>
      </div>
    </footer>
  );
}
