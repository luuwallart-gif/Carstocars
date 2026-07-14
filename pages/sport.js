const competitions = [
  { nom: "Formule 1", desc: "Le sommet du sport automobile mondial", couleur: "#e10600" },
  { nom: "Formule 2", desc: "L'antichambre de la F1", couleur: "#0090ff" },
  { nom: "Formule 3", desc: "Les futurs talents en formation", couleur: "#00b8d4" },
  { nom: "Formule 4", desc: "La porte d'entrée du monopole", couleur: "#00d4ff" },
  { nom: "WRC", desc: "Championnat du monde des rallyes", couleur: "#ff6b00" },
  { nom: "GT World", desc: "Les GT s'affrontent sur circuit", couleur: "#9c27b0" },
  { nom: "WEC", desc: "Championnat du monde d'endurance", couleur: "#ffb300" },
  { nom: "Formule E", desc: "La compétition 100% électrique", couleur: "#00e676" },
];

export default function Sport() {
  return (
    <main style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #141b2e 100%)", color: "#fff", minHeight: "100vh", fontFamily: "'Rajdhani', sans-serif" }}>

      {/* Barre du haut */}
      <header style={{ padding: "20px 40px", background: "rgba(10,14,26,0.8)", borderBottom: "3px solid #00d4ff", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(10px)" }}>
        <h1 style={{ fontFamily: "'Racing Sans One', cursive", background: "linear-gradient(90deg, #00d4ff, #e10600)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, fontSize: "32px", letterSpacing: "1px" }}>CARSTOCARS</h1>
        <nav style={{ fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
          <a href="/" style={{ color: "#fff", marginRight: "24px", textDecoration: "none" }}>Accueil</a>
          <a href="/auto" style={{ color: "#fff", marginRight: "24px", textDecoration: "none" }}>Automobile</a>
          <a href="/sport" style={{ color: "#00d4ff", textDecoration: "none" }}>Sport Auto</a>
        </nav>
      </header>

      {/* Bandeau titre */}
      <section style={{ padding: "60px 40px 30px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Racing Sans One', cursive", fontSize: "48px", margin: "0 0 10px", textTransform: "uppercase" }}>
          Sport <span style={{ color: "#e10600" }}>Automobile</span>
        </h2>
        <p style={{ color: "#8b9bb4", fontSize: "18px", margin: 0 }}>Toutes les compétitions, classements et pilotes</p>
        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #00d4ff, #e10600)", margin: "20px auto 0", borderRadius: "2px" }}></div>
      </section>

      {/* Grille de compétitions */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", padding: "20px 40px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        {competitions.map((comp, i) => (
          <div key={i} style={{ background: "#141b2e", borderRadius: "16px", overflow: "hidden", border: "1px solid #253150", boxShadow: "0 8px 30px rgba(0,0,0,0.4)", cursor: "pointer", borderLeft: `5px solid ${comp.couleur}` }}>
            <div style={{ padding: "24px" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: "26px", fontWeight: "700", color: comp.couleur }}>{comp.nom}</h3>
              <p style={{ color: "#8b9bb4", fontSize: "15px", margin: 0, lineHeight: "1.5" }}>{comp.desc}</p>
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
