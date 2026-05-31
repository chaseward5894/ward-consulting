const included = [
  "Custom lead intake form built for your business",
  "Google Sheets lead tracker with status fields",
  "Instant email alert to you when a new lead comes in",
  "Automatic confirmation email to the customer",
  "Automated follow-up reminders for untouched leads",
  "Review request email triggered when a job is marked Completed",
  "Simple handoff documentation so you know how it all works",
  "Optional follow-up support after delivery",
];

const websiteAddOn = [
  "Clean, mobile-friendly landing page built for your business",
  "Professional design that looks credible to new customers",
  "Lead form integrated directly into your new site",
  "Fully connected to the automation system from day one",
  "Simple and fast — no bloated page builders or CMS to manage",
];

export default function Package() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="package">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, flat-rate pricing.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            No recurring fees. No subscriptions. You pay once, it's built, and it's yours.{" "}
            <span className="text-slate-500 text-base">Retainer arrangements available upon request and availability.</span>
          </p>
        </div>

        {/* Three pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Card 1: Automation only */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 shadow-xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Automation Setup
              </h3>
              <p className="text-slate-500 text-sm">
                Connected to your existing website
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$300</span>
              <span className="text-slate-500 text-sm ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-base transition-colors"
            >
              Get Started
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">
              No commitment. Free audit call first.
            </p>
          </div>

          {/* Card 2: Automation + Landing Page (bundle) */}
          <div className="bg-slate-900 rounded-3xl border-2 border-slate-900 shadow-xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
              Best Value
            </div>
            <div className="mb-6">
              <span className="inline-block bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Bundle
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                Automation + Landing Page
              </h3>
              <p className="text-slate-400 text-sm">
                Full setup for businesses without a website
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$600</span>
              <span className="text-slate-400 text-sm ml-2">one-time</span>
              <p className="text-blue-400 text-xs mt-1 font-medium">Save $100 vs. buying separately</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[...included, ...websiteAddOn].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-base transition-colors"
            >
              Get Started
            </a>
            <p className="text-center text-xs text-slate-500 mt-3">
              No commitment. Free audit call first.
            </p>
          </div>

          {/* Card 3: Landing page only */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Standalone
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Landing Page Only
              </h3>
              <p className="text-slate-500 text-sm">
                No automation package needed
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$400</span>
              <span className="text-slate-500 text-sm ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {websiteAddOn.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl text-base transition-colors"
            >
              Get Started
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">
              No commitment. Free audit call first.
            </p>
          </div>

        </div>

        {/* Custom builds bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Need something custom?</p>
              <p className="text-slate-500 text-sm">SMS alerts, booking workflows, Zapier integrations, quote automation — reach out and we'll figure out what makes sense.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}
