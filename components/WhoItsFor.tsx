const trades = [
  { label: "Electricians", emoji: "⚡" },
  { label: "Roofers", emoji: "🏠" },
  { label: "HVAC Companies", emoji: "❄️" },
  { label: "Plumbers", emoji: "🔧" },
  { label: "Landscapers", emoji: "🌿" },
  { label: "Cleaning Services", emoji: "✨" },
  { label: "Handymen", emoji: "🛠️" },
  { label: "Painters", emoji: "🖌️" },
  { label: "Concrete & Masonry", emoji: "🧱" },
  { label: "Pest Control", emoji: "🐛" },
  { label: "Tree Services", emoji: "🌳" },
  { label: "Other Local Service Businesses", emoji: "📋" },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="who">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Built for small service businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This is for owner-operators and small crews — businesses with 25 employees or fewer who are great at their trade but don't have time to babysit their inbox.
          </p>
        </div>

        {/* Trade grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {trades.map((trade, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl px-4 py-4 text-center hover:border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <div className="text-2xl mb-1">{trade.emoji}</div>
              <span className="text-sm font-medium text-slate-700">{trade.label}</span>
            </div>
          ))}
        </div>

        {/* Qualifier box */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-3">
            If you're running a small service business and you're not following up on every lead as fast as you should be — this was built for you.
          </h3>
          <p className="text-blue-100 text-sm mb-6 max-w-xl mx-auto">
            You don't need to be tech-savvy. You don't need to learn new software. Ward Consulting handles the setup and hands it off so you can just use it.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl text-sm transition-colors"
          >
            See If It's a Good Fit
          </a>
        </div>
      </div>
    </section>
  );
}
