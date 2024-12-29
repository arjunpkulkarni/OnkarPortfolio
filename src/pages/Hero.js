"use client";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Discover an amazing world of possibilities with our platform. From tailored solutions to effortless navigation, we've got you covered.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/get-started"
            className="px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
