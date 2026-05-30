export default function DemoVideo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="demo-video">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Watch how the system works
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            A quick walkthrough of the full Lead Response + Google Review Automation System — from form submission to review request.
          </p>
        </div>

        {/* Video embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
          {/* 16:9 aspect ratio wrapper */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://drive.google.com/file/d/1Ca23fFXnWXUVo_QNug7X5sbE_kDR2H_v/preview"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Ward Consulting — Demo Walkthrough"
            />
          </div>
        </div>

        {/* CTA below video */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm mb-4">
            Ready to set this up for your business?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-base transition-colors"
          >
            Get a Free Workflow Audit
          </a>
        </div>
      </div>
    </section>
  );
}
