const steps = [
  {
    number: "01",
    title: "Customer submits your lead form",
    description:
      "A potential customer fills out the intake form on your website. It takes them 60 seconds and captures everything you need to follow up — name, contact info, job type, and any details you want.",
  },
  {
    number: "02",
    title: "You're alerted instantly — and so is the customer",
    description:
      "The second the form is submitted, you receive an email with all their details. At the same time, the customer gets an automatic confirmation letting them know their request was received and someone will be in touch. They feel taken care of before you even pick up the phone.",
  },
  {
    number: "03",
    title: "The lead is logged in your tracking sheet",
    description:
      "Every submission is automatically saved in a Google Sheet we set up for you. You can update each lead's status — New, Contacted, Quoted, Completed — so nothing falls through the cracks and you always know where things stand.",
  },
  {
    number: "04",
    title: "Untouched leads trigger a follow-up reminder",
    description:
      "If a lead hasn't been contacted after a set window of time — whether that's 60 minutes or 24 hours — you get an automatic reminder to reach out. No more forgetting about an inquiry because you were on a job.",
  },
  {
    number: "05",
    title: "Completed jobs trigger a review request",
    description:
      "When you mark a job Completed in the sheet, the customer automatically receives a polite email asking them to leave a Google review. You earn the review without having to remember to ask — every single time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The Lead Response + Review Automation System
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ward Consulting builds and hands off the whole thing — no new software to learn, no complicated setup. If you need a website too, we build that as well. Once it's live, the system runs in the background while you focus on the work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector (desktop) */}
          <div className="hidden lg:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-slate-200" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Step number badge */}
                <div className="flex-shrink-0 w-22 h-22">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold z-10 relative">
                    {step.number}
                  </div>
                </div>
                {/* Content */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex-1 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
