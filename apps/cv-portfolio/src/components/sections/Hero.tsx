export default function Hero() {
  return (
    <section
      role="region"
      aria-labelledby="hero-heading"
      className="bg-[#102A43] text-white py-20"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 id="hero-heading" className="text-4xl font-bold">
          Hi, I’m Honomono 👋
        </h1>
        <p className="mt-4 text-lg font-light">
          I build accessible, modern web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-white text-[#102A43] font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
