export default function DemoWorkflow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="demo">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Before & After
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What actually changes when you set this up
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Here's the difference between how most small service businesses handle leads today — and how it looks after Ward Consulting sets up your system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className="bg-white border-2 border-red-100 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <h3 className="text-lg font-bold text-slate-900">Before</h3>
            </div>
            <ol className="space-y-4">
              {[
                "A lead submits a contact form on your site",
                "You're on a job. You don't see it for two hours.",
                "The customer gets no confirmation. They think you didn't get it.",
                "You finally see the form, make a mental note to call later.",
                "You forget. Or you get to it the next day.",
                "The customer already hired someone else.",
                "Job is completed weeks later — nobody asks for a review.",
                "You never get the Google review you earned.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex-shrink-0 w-5 h-5 bg-red-50 text-red-400 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* AFTER */}
          <div className="bg-white border-2 border-green-100 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900">After</h3>
            </div>
            <ol className="space-y-4">
              {[
                "A lead submits your intake form",
                "You get an instant email with all their details — while you're still on the job.",
                "The customer immediately gets a confirmation email. They know you got it.",
                "The lead is automatically saved in your Google Sheet.",
                "If you haven't reached out after a set time, you get a reminder.",
                "You call the lead. They're still warm. You book the job.",
                "Job is complete. You mark it Done in the sheet.",
                "The customer automatically gets a Google review request. Reviews start coming in.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex-shrink-0 w-5 h-5 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          The difference isn't complicated software — it's a simple system that runs in the background while you focus on the work.
        </p>
      </div>
    </section>
  );
}
