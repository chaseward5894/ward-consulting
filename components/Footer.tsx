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
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-white text-sm font-semibold mb-3">Navigation</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">The System</a></li>
                <li><a href="#package" className="hover:text-white transition-colors">Package</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-3">Get Started</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">Free Workflow Audit</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Custom Builds</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          © {currentYear} Ward Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
