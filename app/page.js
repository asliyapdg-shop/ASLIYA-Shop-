import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, Arial", color: "#0f172a" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/logo.png" alt="ASLIYA Shop" width={140} height={70} />
        </div>
        <nav style={{ display: "flex", gap: 28 }}>
          <a href="#" style={{ textDecoration: "none", color: "#0f172a", fontWeight: 500 }}>Accueil</a>
          <a href="#" style={{ textDecoration: "none", color: "#0f172a", fontWeight: 500 }}>Produits</a>
          <a href="#" style={{ textDecoration: "none", color: "#0f172a", fontWeight: 500 }}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        padding: "120px 24px",
        textAlign: "center",
        background: "linear-gradient(135deg, #ecfeff, #fefce8)"
      }}>
        <h1 style={{ fontSize: 56, marginBottom: 20 }}>
          Le shopping qui vous ressemble
        </h1>
        <p style={{ fontSize: 20, maxWidth: 700, margin: "0 auto 40px", color: "#334155" }}>
          ASLIYA Shop vous propose une sélection élégante de produits tendance,
          alliant qualité, style et prix justes.
        </p>
        <button style={{
          padding: "16px 40px",
          fontSize: 16,
          borderRadius: 999,
          border: "none",
          background: "#0f172a",
          color: "#fff",
          cursor: "pointer"
        }}>
          Découvrir la collection
        </button>
      </section>

      {/* AVANTAGES */}
      <section style={{
        padding: "80px 48px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 40,
        background: "#ffffff"
      }}>
        <div>
          <h3>✨ Qualité premium</h3>
          <p>Produits soigneusement sélectionnés</p>
        </div>
        <div>
          <h3>🔒 Paiement sécurisé</h3>
          <p>Protection totale de vos données</p>
        </div>
        <div>
          <h3>🚚 Livraison rapide</h3>
          <p>Partout, en toute confiance</p>
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: "80px 48px", background: "#f8fafc" }}>
        <h2 style={{ marginBottom: 40 }}>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32
        }}>
          {[
            { name: "Parfum élégant", price: "25€" },
            { name: "Lunettes tendance", price: "18€" },
            { name: "Sac chic", price: "35€" },
            { name: "Accessoire luxe", price: "15€" }
          ].map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
            }}>
              <div style={{
                height: 180,
                background: "#e5e7eb",
                borderRadius: 12,
                marginBottom: 16
              }} />
              <h3>{p.name}</h3>
              <p style={{ fontWeight: "bold", fontSize: 18 }}>{p.price}</p>
              <button style={{
                marginTop: 12,
                padding: "10px 24px",
                borderRadius: 999,
                border: "none",
                background: "#0f172a",
                color: "#fff",
                cursor: "pointer"
              }}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 40,
        textAlign: "center",
        background: "#0f172a",
        color: "#fff"
      }}>
        © 2026 ASLIYA Shop — Élégance & Confiance
      </footer>

    </div>
  );
}
