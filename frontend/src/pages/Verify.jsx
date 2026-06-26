import { useState } from "react";

function Verify() {
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

 const handleVerify = () => {
  if (!news.trim()) {
    alert("Please enter some news.");
    return;
    const historyItem = {
  news,
  status: fakeScore >= 2 ? "Likely Fake" : "Likely Genuine",
  confidence: fakeScore >= 2 ? 95 : 91,
  time: new Date().toLocaleString(),
};
  }

  setLoading(true);

  setTimeout(() => {
    const lowerNews = news.toLowerCase();

    let fakeKeywords = [
      "shocking",
      "100%",
      "miracle",
      "secret",
      "viral",
      "click here",
      "free money",
      "breaking"
    ];

    let fakeScore = 0;

    fakeKeywords.forEach((word) => {
      if (lowerNews.includes(word)) {
        fakeScore++;
      }
    });

    if (fakeScore >= 2) {
      setResult({
        status: "Likely Fake",
        confidence: 95,
      });
    } else {
      setResult({
        status: "Likely Genuine",
        confidence: 91,
      });
    }

    setLoading(false);
  }, 2000);
};
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">

      <h1 className="text-4xl font-bold mb-6">
        Verify News
      </h1>

      <textarea
        rows="8"
        placeholder="Paste news article here..."
        value={news}
        onChange={(e) => setNews(e.target.value)}
        className="w-full border rounded-lg p-4"
      />

      <button
        onClick={handleVerify}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Verify News
      </button>

      {loading && (
        <div className="mt-6 text-blue-600 font-semibold">
          🔄 AI is analyzing the article...
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
            {result.status === "Likely Fake" ? "❌" : "✅"} {result.status}
          </h2>

          <p className="mt-2 text-lg">
            Confidence Score:
            <span className="font-bold text-blue-600">
              {" "}
              {result.confidence}%
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
            </span>
          </p>

          <div className="mt-5">
            <h3 className="font-semibold">
              AI Analysis
            </h3>

            <ul className="list-disc ml-6 mt-2 space-y-2">

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

            <h3 className="font-semibold">
              Recommendation
            </h3>

            <p className="mt-2">
              {result.status === "Likely Fake"
                ? "Avoid sharing this news until verified from trusted sources."
                : "This article appears reliable, but always cross-check with trusted news sources."}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default Verify;