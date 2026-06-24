function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-6xl font-bold">
          AI-Powered News Verification
        </h1>

        <p className="mt-6 text-xl text-blue-100">
          Detect fake news instantly using Artificial Intelligence.
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Paste News URL..."
            className="w-2/3 p-4 rounded-l-lg text-black outline-none"
          />

          <button className="bg-green-500 hover:bg-green-600 px-8 rounded-r-lg font-semibold">
            Verify
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;