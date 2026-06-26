import { useState } from "react";

function Verify() {
  const [news, setNews] =useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
  // Validation
  if (!news.trim()) {
    alert("Please enter a news article or headline.");
    return;
  }

  if (news.trim().length < 20) {
    alert("Please enter a complete news article or headline.");
    return;
  }

  const words = news.trim().split(" ");

  if (words.length < 5) {
    alert("Unable to verify. Please enter meaningful news content.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        news,
      }),
    });

    const verificationResult = await response.json();

    setResult(verificationResult);

    // Save History
    const historyItem = {
      news,
      status: verificationResult.status,
      confidence: verificationResult.confidence,
      time: new Date().toLocaleString(),
    };

    const oldHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    oldHistory.unshift(historyItem);

    localStorage.setItem(
      "history",
      JSON.stringify(oldHistory)
    );
  } catch (error) {
    console.error(error);
    alert("Unable to connect to backend server.");
  }

  setLoading(false);
};

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">

      <h1 className="text-4xl font-bold mb-6">
        Verify News
      </h1>

      <textarea
        rows="8"
        placeholder="Paste a news article or headline here for AI verification..."
        value={news}
        onChange={(e) => setNews(e.target.value)}
        className="w-full border rounded-lg p-4"
      />

      <div className="mt-4">
        <label className="block mb-2 font-semibold">
          Upload News Screenshot
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {image && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="rounded-lg border max-h-64"
          />
        </div>
      )}

      <button
        onClick={handleVerify}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        🔍 Verify News
      </button>

      {loading && (
        <div className="mt-6 bg-blue-50 border border-blue-300 rounded-lg p-4">
          <p className="font-bold text-blue-700">
            🤖 TrustLens AI is analyzing...
          </p>

          <ul className="mt-2 text-sm text-gray-700 list-disc ml-6">
            <li>Checking credibility...</li>
            <li>Scanning misinformation indicators...</li>
            <li>Calculating confidence score...</li>
          </ul>
        </div>
      )}

      {result && !loading && (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border">

          <h2
            className={`text-2xl font-bold ${
              result.status === "Likely Fake"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {result.status === "Likely Fake"
              ? "❌ Likely Fake"
              : "✅ Likely Genuine"}
          </h2>

          <p className="mt-4 text-lg font-semibold">
            Confidence Score: {result.confidence}%
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className={`h-4 rounded-full ${
                result.status === "Likely Fake"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              style={{ width: `${result.confidence}%` }}
            ></div>
          </div>

          <div className="mt-6">

            <h3 className="font-bold text-lg">
              AI Analysis
            </h3>

            <ul className="list-disc ml-6 mt-3 space-y-2">

              {result.status === "Likely Fake" ? (
                <>
                  <li>Sensational headline detected.</li>
                  <li>No trusted source confirmation.</li>
                  <li>Possible misinformation indicators found.</li>
                  <li>Language appears misleading.</li>
                </>
              ) : (
                <>
                  <li>Trusted sources reported similar information.</li>
                  <li>No manipulation detected.</li>
                  <li>Natural language pattern observed.</li>
                  <li>No major misinformation signals found.</li>
                </>
              )}

            </ul>

          </div>

          <div className="mt-6 bg-gray-100 rounded-lg p-4">

            <h3 className="font-bold">
              Recommendation
            </h3>

            <p className="mt-2">
              {result.status === "Likely Fake"
                ? "Avoid sharing this news until verified by trusted sources."
                : "This article appears reliable, but always cross-check with trusted news sources."}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default Verify;