export default function Home() {
  return (
    <main style={{ backgroundColor: "#111", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#e10600" }}>🏎️ Carstocars</h1>
      <p>Bienvenue sur Carstocars, ton site dédié au monde de l'automobile !</p>
      <nav style={{ marginTop: "20px" }}>
        <a href="/auto" style={{ color: "#fff", marginRight: "20px" }}>Automobile</a>
        <a href="/sport" style={{ color: "#fff" }}>Sport Auto</a>
      </nav>
    </main>
  );
}
