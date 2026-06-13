export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow label */}
        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Built for small service businesses
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          Respond to leads faster.{" "}
          <span className="text-blue-600">Cut the manual work.</span>{" "}
          Get a website that actually works for you.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ward Consulting builds done-for-you workflow automations and professional websites for small service businesses — so you stop losing leads, reduce manual follow-up, and show up online like the credible business you are.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get a Free Workflow Audit
          </a>
          <a
            href="#how-it-works"
            className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-xl text-lg border border-slate-200 transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-slate-500">
          No complicated software. No long-term contracts. Simple setup and handoff.
        </p>
      </div>
    </section>
  );
}
