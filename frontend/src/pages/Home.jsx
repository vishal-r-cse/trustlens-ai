function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-5xl font-bold text-blue-700">
          🛡️ TrustLens AI
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          AI Powered News Verification Platform
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Verify News
        </button>
      </section>

      {/* Platform Statistics */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Platform Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-600">12K+</h3>
            <p className="mt-2">Articles Verified</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">95%</h3>
            <p className="mt-2">Detection Accuracy</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-red-600">3.4K</h3>
            <p className="mt-2">Fake News Detected</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-purple-600">1.2 sec</h3>
            <p className="mt-2">Average Analysis Time</p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          How TrustLens AI Works
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl mb-3">📝</h3>
            <h4 className="font-bold">Paste News</h4>
            <p className="mt-2 text-gray-600">
              Paste any article or news headline.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl mb-3">🤖</h3>
            <h4 className="font-bold">AI Analysis</h4>
            <p className="mt-2 text-gray-600">
              AI checks credibility and misinformation indicators.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl mb-3">✅</h3>
            <h4 className="font-bold">View Result</h4>
            <p className="mt-2 text-gray-600">
              Get confidence score and recommendation.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;