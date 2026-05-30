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
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            One focused package. Everything you need.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            No bloated software bundles or recurring fees for features you'll never use. Just a clean system that solves a real problem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Main package card */}
          <div className="lg:col-span-3 bg-white rounded-3xl border-2 border-blue-600 shadow-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Lead Response + Review Automation Setup
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Built and handed off by Ward Consulting
                </p>
              </div>
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            </div>

            {/* Included list */}
            <ul className="space-y-3 mb-6">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Website add-on callout */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                Don't have a website yet?
              </p>
              <p className="text-sm text-blue-700">
                A professional landing page can be added directly into this package — built, designed, and fully connected to the automation system from day one. No separate setup needed.
              </p>
            </div>

            <a
              href="#contact"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-base transition-colors"
            >
              Get a Free Workflow Audit
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">
              No commitment. We'll talk through your situation first.
            </p>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Website Design card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Professional Landing Page
              </h3>
              <p className="text-xs font-medium text-blue-600 mb-3">Add-on or standalone</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                A clean, fast, mobile-friendly landing page built specifically for your business. Designed to look credible, load fast, and convert visitors into leads — with your intake form built right in.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                {websiteAddOn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                Ask About Website Design
              </a>
            </div>

            {/* Custom builds card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Need something custom?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Every business is a little different. If you have a specific workflow in mind, reach out and we'll figure out what makes sense.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> SMS alerts and notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> Scheduling or booking workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> Quote request automation
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl text-sm transition-colors mt-6"
              >
                Let's Talk Custom Builds
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
