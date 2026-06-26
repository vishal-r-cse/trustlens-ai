function History() {
  const history = [
    {
      title: "ISRO successfully launches new satellite",
      status: "Genuine",
      confidence: "91%",
    },
    {
      title: "Aliens landed in Chennai yesterday",
      status: "Fake",
      confidence: "97%",
    },
    {
      title: "RBI announces new digital payment rules",
      status: "Genuine",
      confidence: "88%",
    },
  ];

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
            {item.title}
          </h2>

          <p
            className={
              item.status === "Fake"
                ? "text-red-600 font-bold mt-2"
                : "text-green-600 font-bold mt-2"
            }
          >
            {item.status}
          </p>

          <p>Confidence: {item.confidence}</p>
        </div>
      ))}
    </div>
  );
}

export default History;