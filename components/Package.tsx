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
            <ul className="space-y-3 mb-8">
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
              Get a Free Workflow Audit
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">
              No commitment. We'll talk through your situation first.
            </p>
          </div>

          {/* Side card: Custom builds */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between">
            <div>
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
                Every business is a little different. If you have a specific workflow in mind — scheduling, quoting, invoicing, or something else — reach out and we'll figure out what makes sense for your operation.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> SMS alerts and notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> Zapier or Make integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> Scheduling or booking workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">→</span> Quote request automation
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl text-sm transition-colors mt-8"
            >
              Let's Talk Custom Builds
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
