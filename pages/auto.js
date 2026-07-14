const marques = [
  { nom: "Ferrari", pays: "Italie", logo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600" },
  { nom: "Porsche", pays: "Allemagne", logo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" },
  { nom: "Mercedes", pays: "Allemagne", logo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600" },
  { nom: "BMW", pays: "Allemagne", logo: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600" },
  { nom: "Bugatti", pays: "France", logo: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600" },
  { nom: "Lamborghini", pays: "Italie", logo: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600" },
];

export default function Auto() {
  return (
    <main style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #141b2e 100%)", color: "#fff", minHeight: "100vh", fontFamily: "'Rajdhani', sans-serif" }}>

      {/* Barre du haut */}
      <header style={{ padding: "20px 40px", background: "rgba(10,14,26,0.8)", borderBottom: "3px solid #00d4ff", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(10px)" }}>
        <h1 style={{ fontFamily: "'Racing Sans One', cursive", background: "linear-gradient(90deg, #00d4ff, #e10600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, fontSize: "32px", letterSpacing: "1px" }}>CARSTOCARS</h1>
        <nav style={{ fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
          <a href="/" style={{ color: "#fff", marginRight: "24px", textDecoration: "none" }}>Accueil</a>
          <a href="/auto" style={{ color: "#00d4ff", marginRight: "24px", textDecoration: "none" }}>Automobile</a>
          <a href="/sport" style={{ color: "#fff", textDecoration: "none" }}>Sport Auto</a>
        </nav>
      </header>

      {/* Bandeau titre */}
      <section style={{ padding: "60px 40px 30px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Racing Sans One', cursive", fontSize: "48px", margin: "0 0 10px", textTransform: "uppercase" }}>
          Les <span style={{ color: "#e10600" }}>Marques</span>
        </h2>
        <p style={{ color: "#8b9bb4", fontSize: "18px", margin: 0 }}>Explorez les constructeurs et leurs modèles</p>
        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #00d4ff, #e10600)", margin: "20px auto 0", borderRadius: "2px" }}></div>
      </section>

      {/* Grille de marques */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "28px", padding: "20px 40px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        {marques.map((marque, i) => (
          <div key={i} style={{ background: "#141b2e", borderRadius: "16px", overflow: "hidden", border: "1px solid #253150", boxShadow: "0 8px 30px rgba(0,0,0,0.4)", cursor: "pointer" }}>
            <img src={marque.logo} alt={marque.nom} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "18px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "22px", fontWeight: "700" }}>{marque.nom}</h3>
              <p style={{ color: "#8b9bb4", fontSize: "14px", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>{marque.pays}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Bas de page */}
      <footer style={{ borderTop: "1px solid #253150", padding: "24px 40px", color: "#5a6b8c", fontSize: "14px", textAlign: "center" }}>
        © 2026 Carstocars — Passion automobile
      </footer>

    </main>
  );
}
