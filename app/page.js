export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, Arial", color: "#111" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        background: "#0f172a",
        color: "#fff"
      }}>
        <h2 style={{ margin: 0 }}>ASLIYA Shop</h2>
        <nav style={{ display: "flex", gap: 24 }}>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Accueil</a>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Produits</a>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        padding: "120px 24px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff"
      }}>
        <h1 style={{ fontSize: 52, marginBottom: 16 }}>
          La nouvelle façon d’acheter en ligne
        </h1>
        <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 32 }}>
          Qualité, confiance et prix justes avec ASLIYA Shop
        </p>
        <button style={{
          padding: "16px 36px",
          fontSize: 16,
          border: "none",
          borderRadius: 6,
          background: "#22c55e",
          color: "#000",
          cursor: "pointer"
        }}>
          Voir les produits
        </button>
      </section>

      {/* AVANTAGES */}
      <section style={{
        padding: "80px 48px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 40,
        background: "#fff"
      }}>
        <div>
          <h3>🚚 Livraison rapide</h3>
          <p>Partout, en toute sécurité</p>
        </div>
        <div>
          <h3>💳 Paiement sécurisé</h3>
          <p>Vos données sont protégées</p>
        </div>
        <div>
          <h3>⭐ Produits sélectionnés</h3>
          <p>Qualité garantie</p>
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: "80px 48px", background: "#f8fafc" }}>
        <h2 style={{ marginBottom: 32 }}>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32
        }}>
          {[
            { name: "T-shirt premium", price: "10€" },
            { name: "Sac moderne", price: "20€" },
            { name: "Chaussures élégantes", price: "35€" },
            { name: "Montre design", price: "45€" }
          ].map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              padding: 24,
              borderRadius: 10,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              textAlign: "center"
            }}>
              <div style={{
                height: 160,
                background: "#e5e7eb",
                borderRadius: 8,
                marginBottom: 16
              }} />
              <h3>{p.name}</h3>
              <p style={{ fontWeight: "bold", fontSize: 18 }}>{p.price}</p>
              <button style={{
                marginTop: 12,
                padding: "10px 24px",
                borderRadius: 6,
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
        padding: 32,
        textAlign: "center",
        background: "#0f172a",
        color: "#fff"
      }}>
        © 2026 ASLIYA Shop — Tous droits réservés
      </footer>

    </div>
  );
      }
