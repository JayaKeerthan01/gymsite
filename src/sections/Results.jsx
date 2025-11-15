import BeforeAfterSlider from "../components/BeforeAfterSlider";

const transformations = [
  { name: "Rajesh K.", before: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=800", after: "https://images.unsplash.com/photo-1581129724998-5a7239a5c2b2?w=800" },
  { name: "Priya S.", before: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=800", after: "https://images.unsplash.com/photo-1581129724998-5a7239a5c2b2?w=800" },
];

export default function Results() {
  return (
    <section id="results" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-red-600 mb-16">
          REAL RESULTS
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {transformations.map((t, i) => (
            <BeforeAfterSlider key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}