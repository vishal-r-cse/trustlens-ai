function ResultCard() {
  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-green-600">
        ✅ VERIFIED
      </h2>

      <div className="mt-6 space-y-4">

        <div>
          <p className="font-semibold">Confidence Score</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "98%" }}
            ></div>
          </div>
          <p className="mt-1">96%</p>
        </div>

        <div>
          <p className="font-semibold">Source Credibility</p>
          <p className="text-blue-600 font-bold">High</p>
        </div>

        <div>
          <p className="font-semibold">AI Explanation</p>
          <p className="text-gray-600">
            This article closely matches trusted news sources and
            contains no major misinformation indicators.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ResultCard;