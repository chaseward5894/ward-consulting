const stats = [
  {
    stat: "7x",
    description: "more likely to qualify a lead when you respond within the first hour",
    source: "Harvard Business Review",
  },
  {
    stat: "60%",
    description: "of small businesses say they don't have time to follow up with every lead",
    source: "SMB Survey Data",
  },
  {
    stat: "#1",
    description: "Google reviews are the top factor in local search ranking",
    source: "BrightLocal Local SEO Study",
  },
];

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Divider line on desktop between items */}
              {i > 0 && (
                <div className="hidden md:block absolute" />
              )}
              <span className="text-5xl font-bold text-blue-400 mb-3">
                {item.stat}
              </span>
              <p className="text-white text-base font-medium leading-snug mb-2">
                {item.description}
              </p>
              <p className="text-slate-500 text-xs">
                — {item.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
