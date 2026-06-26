function History() {
  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  if (history.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
        <h1 className="text-4xl font-bold mb-8">
          Verification History
        </h1>

        <p className="text-gray-500 text-lg">
          No verification history yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-8">
        Verification History
      </h1>

      {history.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-5 mb-5 border"
        >
          <h2 className="text-xl font-semibold">
            {item.news}
          </h2>

          <p
            className={`mt-3 font-bold ${
              item.status === "Likely Fake"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {item.status === "Likely Fake"
              ? "❌ Likely Fake"
              : "✅ Likely Genuine"}
          </p>

          <p className="mt-2">
            Confidence: {item.confidence}%
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Verified on: {item.time}
          </p>
        </div>
      ))}
    </div>
  );
}

export default History;