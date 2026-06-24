function FeatureCard({ title, description, emoji }) {
  return (
    <div
      style={{
        width: "300px",
        padding: "25px",
        borderRadius: "15px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>{emoji}</h1>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;